from django.contrib.auth.tokens import (
    default_token_generator, PasswordResetTokenGenerator)
from django.shortcuts import render, redirect
from django.views import generic, View
from django.urls import reverse_lazy
from django.contrib.auth.mixins import LoginRequiredMixin
from rest_framework import viewsets

from fridge.models import Fridge, Food, Reservation, FridgeFollowing, User
from fridge.serializers import NotificationSerializer
from notifications.models import Notification
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

from fridge.forms import RegisterForm
from django.contrib.auth import login, authenticate, logout

from django.core.mail import send_mail
from fridge.forms import ContactForm
from django.contrib.auth.models import Permission

from django.http import HttpResponse
from django.contrib.sites.shortcuts import get_current_site
from django.utils.encoding import force_bytes, force_text
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.template.loader import render_to_string
from django.core.mail import EmailMessage
from django.utils.translation import gettext_lazy as _
from django.contrib import messages

# Constant
LOGIN_URL = 'fridge:login'


class FoodReservation(LoginRequiredMixin, View):
    login_url = LOGIN_URL

    def post(self, request, *args, **kwargs):
        food = Food.objects.get(pk=self.kwargs['pk'])
        reservation = Reservation(food=food, user=request.user)
        reservation.save()
        message = _(
            "Food reserved with success")
        messages.add_message(request, messages.INFO, message)
        return redirect('fridge:food-list', food.fridge.pk)

    def get(self, request, *args, **kwargs):
        return self.post(request, args, kwargs)


class FoodCancellation(LoginRequiredMixin, View):
    login_url = LOGIN_URL

    def post(self, request, *args, **kwargs):
        food = Food.objects.get(pk=self.kwargs['pk'])
        reservation = Reservation.objects.get(food=food)
        reservation.delete()
        message = _(
            "Food cancelled with success")
        messages.add_message(request, messages.INFO, message)
        return redirect('fridge:food-list', food.fridge.pk)

    def get(self, request, *args, **kwargs):
        return self.post(request, args, kwargs)


class NotificationsView(generic.TemplateView):
    template_name = 'home/notifications.html'


class NotificationsViewSet(viewsets.ModelViewSet):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer

    @action(detail=False)
    def by_user(self, request):
        notifications = Notification.objects.filter(
            recipient=self.request.user).filter(unread=True)
        serializer = self.get_serializer(notifications, many=True)
        return Response(serializer.data)


class RegisterView(View):
    form_class = RegisterForm
    template_name = 'user/register.html'
    initial = {'username': 'toto', 'raw_password': 'toto'}

    def post(self, request, *args, **kwargs):
        form = RegisterForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.is_active = False
            user.save()
            current_site = get_current_site(request)
            mail_subject = 'Activate your blog account.'
            token_generator = PasswordResetTokenGenerator()
            message = render_to_string('user/acc_active_email.html', {
                'user': user,
                'domain': current_site.domain,
                'uid': urlsafe_base64_encode(force_bytes(user.pk)),
                'token': token_generator.make_token(user),
            })
            to_email = form.cleaned_data.get('email')
            email = EmailMessage(
                mail_subject, message, to=[to_email]
            )
            email.send()

            message = _(
                "Please confirm your email address " +
                "to complete the registration")
            messages.add_message(request, messages.INFO, message)
            return redirect("fridge:settings")
        return render(request, self.template_name, {'form': form})

    def get(self, request, *args, **kwargs):
        form = RegisterForm()
        return render(request, self.template_name, {'form': form})


class LoginView(generic.TemplateView):
    template_name = 'user/login.html'

    def post(self, request, *args, **kwargs):
        username = request.POST.get("username")
        raw_password = request.POST.get("password")
        user = authenticate(username=username, password=raw_password)
        if user is not None:
            login(request, user)
            refresh = RefreshToken.for_user(user)
            message = _(
                "Login with success")
            messages.add_message(request, messages.INFO, message)
            return render(request, 'home/home.html', {
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            })
        return redirect('fridge:login')


class LogoutView(LoginRequiredMixin, View):
    login_url = LOGIN_URL

    def get(self, request, *args, **kwargs):
        logout(request)
        message = _(
            "Logout with success")
        messages.add_message(request, messages.INFO, message)
        return redirect('fridge:settings')


class ProfileView(LoginRequiredMixin, generic.TemplateView):
    template_name = 'user/profile.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['user'] = self.request.user
        return context


class UserUpdateView(LoginRequiredMixin, generic.UpdateView):
    model = User
    template_name = 'new_form.html'

    def get_success_url(self):
        return reverse_lazy('fridge:profile')


class ReservationListView(generic.TemplateView):
    template_name = 'user/reservation_list.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['reservation_list'] = self.request.user.get_reserved_food()
        return context


class FridgeFollowingCreateView(LoginRequiredMixin, View):
    login_url = LOGIN_URL

    def post(self, request, *args, **kwargs):
        fridge = Fridge.objects.get(pk=self.kwargs['pk'])
        fridge_following = FridgeFollowing(fridge=fridge, user=request.user)
        fridge_following.save()
        return redirect('fridge:food-list', fridge.pk)

    def get(self, request, *args, **kwargs):
        return self.post(request, args, kwargs)


class FridgeFollowingDeleteView(LoginRequiredMixin, View):
    login_url = LOGIN_URL

    def post(self, request, *args, **kwargs):
        fridge = Fridge.objects.get(pk=self.kwargs['pk'])
        fridge_following = FridgeFollowing.objects.get(fridge=fridge)
        fridge_following.delete()
        return redirect('fridge:food-list', fridge.pk)

    def get(self, request, *args, **kwargs):
        return self.post(request, args, kwargs)


class ContactView(View):
    form_class = ContactForm
    template_name = 'new_form.html'

    def post(self, request, *args, **kwargs):
        form = ContactForm(request.POST)
        if form.is_valid():
            subject = form.cleaned_data.get('subject')
            message = form.cleaned_data.get('message')
            from_user = self.request.user.email
            perm = Permission.objects.get(codename="admin")
            to_user = User.objects.filter(
                user_permissions__in=[perm])
            send_mail(subject=subject, message=message,
                      from_email=from_user, recipient_list=to_user)
            message = _(
                "Message send with success")
            messages.add_message(request, messages.INFO, message)
            return redirect('fridge:home')
        return render(request, self.template_name, {'form': form})

    def get(self, request, *args, **kwargs):
        form = ContactForm()
        return render(request, self.template_name, {'form': form})


class DonationView(generic.TemplateView):
    template_name = 'home/donation.html'


def activate(request, uidb64, token):
    try:
        uid = force_text(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except(TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None
    if user is not None and default_token_generator.check_token(user, token):
        user.is_active = True
        user.save()
        login(request, user)
        refresh = RefreshToken.for_user(user)
        return render(request, 'home/home.html', {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        })
    else:
        return HttpResponse('Activation link is invalid!')
