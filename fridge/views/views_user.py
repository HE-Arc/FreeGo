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

# Constant
LOGIN_URL = 'fridge:login'


class FoodReservation(LoginRequiredMixin, View):
    login_url = LOGIN_URL

    def post(self, request, *args, **kwargs):
        food = Food.objects.get(pk=self.kwargs['pk'])
        reservation = Reservation(food=food, user=request.user)
        reservation.save()
        return redirect('fridge:food-list', food.fridge.pk)

    def get(self, request, *args, **kwargs):
        return self.post(request, args, kwargs)


class FoodCancellation(LoginRequiredMixin, View):
    login_url = LOGIN_URL

    def post(self, request, *args, **kwargs):
        food = Food.objects.get(pk=self.kwargs['pk'])
        reservation = Reservation.objects.get(food=food)
        reservation.delete()
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
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            refresh = RefreshToken.for_user(user)
            return render(request, 'home/home.html', {
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            })
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
            return render(request, 'home/home.html', {
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            })
        return redirect('fridge:login')


class LogoutView(LoginRequiredMixin, View):
    login_url = LOGIN_URL

    def get(self, request, *args, **kwargs):
        logout(request)
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
    template_name = 'home/contact.html'

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
            return redirect('fridge:home')
        return render(request, self.template_name, {'form': form})

    def get(self, request, *args, **kwargs):
        form = ContactForm()
        return render(request, self.template_name, {'form': form})


class DonationView(generic.TemplateView):
    template_name = 'home/donation.html'
