from rest_framework.authtoken.models import Token
from django.contrib.auth.tokens import (
    default_token_generator, PasswordResetTokenGenerator)
from django.shortcuts import render, redirect
from django.views import generic, View
from django.urls import reverse_lazy
from django.contrib.auth.mixins import LoginRequiredMixin

from fridge.models import Fridge, Food, Reservation, FridgeFollowing, User


from fridge.forms import RegisterForm
from django.contrib.auth import login, logout, views as auth_views

from django.core.mail import send_mail
from fridge.forms import ContactForm
from django.contrib.auth.models import Permission

from django.http import HttpResponse
from django.contrib.sites.shortcuts import get_current_site
from django.utils.encoding import force_bytes, force_text
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.template.loader import get_template
from django.core.mail import EmailMultiAlternatives
from django.utils.translation import gettext_lazy as _
from django.contrib import messages

from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from fridge.views.views_fridge import ValidFridgeUser

# Constant
LOGIN_URL = 'fridge:login'


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)


class FoodReservation(LoginRequiredMixin, View):
    login_url = LOGIN_URL

    def post(self, request, *args, **kwargs):
        food = Food.objects.get(pk=self.kwargs['pk'])

        if Reservation.objects.filter(user=request.user).count() != 0:
            Reservation.objects.filter(user=request.user).delete()
        reservation = Reservation(
            food=food, user=request.user, quantity=self.kwargs['quantity'])
        reservation.save()
        message = _(
            "Food reserved with success")
        messages.add_message(request, messages.INFO, message)
        return redirect('fridge:food-list', food.fridge.pk)

    def get(self, request, *args, **kwargs):
        return self.post(request, args, kwargs)


class FoodReservationValidation(View):
    def get(self, request, *args, **kwargs):
        food = Food.objects.get(pk=self.kwargs['pk'])
        reservation = Reservation.objects.get(
            user=request.user, food=food)
        food.counter -= reservation.quantity
        food.save()
        reservation.delete()
        if food.counter <= 0:
            food.delete()
        return redirect('fridge:store', food.fridge.pk)


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

            txt = get_template('user/acc_active_email.txt')
            html = get_template('user/acc_active_email.html')
            d = {
                'user': user,
                'domain': current_site.domain,
                'uid': urlsafe_base64_encode(force_bytes(user.pk)),
                'token': token_generator.make_token(user),
            }
            html_content = html.render(d)
            txt_content = txt.render(d)
            to_email = form.cleaned_data.get('email')
            email = EmailMultiAlternatives(
                mail_subject, txt_content, to=[to_email]
            )
            email.attach_alternative(html_content, "text/html")
            email.send()

            message = _(
                "Please confirm your email address to complete the registration")
            messages.add_message(request, messages.INFO, message)
            return redirect("fridge:settings")
        return render(request, self.template_name, {'form': form})

    def get(self, request, *args, **kwargs):
        form = RegisterForm()
        return render(request, self.template_name, {'form': form})


class LoginView(auth_views.LoginView):
    template_name = 'user/login.html'

    def form_valid(self, form):
        """Security check complete. Log the user in."""
        login(self.request, form.get_user())
        token, created = Token.objects.get_or_create(user=form.get_user())
        message = _(
            "Login with success")
        messages.add_message(self.request, messages.INFO, message)
        return render(self.request, 'home/home.html', {
            'token': token.key,
        })


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
    template_name = 'common/form.html'

    def get_object(self, queryset=None):
        return self.request.user

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
        fridge_following = FridgeFollowing.objects.get(
            fridge=fridge, user=request.user)
        fridge_following.delete()
        return redirect('fridge:food-list', fridge.pk)

    def get(self, request, *args, **kwargs):
        return self.post(request, args, kwargs)


class ContactView(generic.FormView):
    form_class = ContactForm
    template_name = 'common/form.html'

    def form_valid(self, form):
        subject = form.cleaned_data.get('subject')
        message = form.cleaned_data.get('message')
        from_user = self.request.user.email
        perm = Permission.objects.get(codename="admin")
        to_user = User.objects.filter(
            user_permissions__in=[perm]).values_list('email', flat=True)
        send_mail(subject=subject, message=message,
                  from_email=from_user, recipient_list=to_user)
        message2 = _(
            "Message send with success")
        messages.add_message(self.request, messages.INFO, message2)
        return render(self.request, 'home/home.html', {'form': form})


class DonationView(generic.TemplateView):
    template_name = 'home/donation.html'


class AllRightsReserved(generic.TemplateView):
    template_name = 'home/all_rights_reserved.html'


class ActivateAccount(View):
    def get(self, request, uidb64, token, *args, **kwargs):
        try:
            uid = force_text(urlsafe_base64_decode(uidb64))
            user = User.objects.get(pk=uid)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            user = None

        if user is not None and \
                default_token_generator.check_token(user, token):
            user.is_active = True
            user.email_confirmed = True
            user.save()
            login(request, user)
            message = _("Login with success")
            messages.add_message(request, messages.INFO, message)
            return render(request, 'home/home.html', {
                'token': token,
            })
        else:
            return HttpResponse(_('Activation link is invalid!'))
