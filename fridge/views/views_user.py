from django.shortcuts import render, redirect
from django.views import generic, View
from django.urls import reverse_lazy
from django.contrib.auth.mixins import LoginRequiredMixin

from fridge.models import User
from fridge.forms import RegisterForm
from django.contrib.auth import login, authenticate, logout

# Constant
LOGIN_URL = 'fridge:login'



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
            return redirect('fridge:home')
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
            return redirect('fridge:home')
        return redirect('fridge:login')


class LogoutView(LoginRequiredMixin, View):
    login_url = LOGIN_URL

    def get(self, request, *args, **kwargs):
        logout(request)
        return redirect('fridge:settings')


class ProfileView(LoginRequiredMixin, generic.DetailView):
    model = User
    template_name = 'user/profile.html'


class UserUsernameUpdateView(LoginRequiredMixin, generic.UpdateView):
    model = User
    fields = ['username']
    template_name = 'user/user_username_update.html'

    def get_success_url(self):
        return reverse_lazy('fridge:profile', kwargs={'pk': self.object.pk})


class ReservationListView(generic.TemplateView):
    template_name = 'user/reservation_list.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['reservation_list'] = self.request.user.get_reserved_food()
        return context
