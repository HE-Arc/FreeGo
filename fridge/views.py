from django.shortcuts import render, redirect
from django.views import generic, View
from django.urls import reverse_lazy
from django.contrib.auth.mixins import LoginRequiredMixin

from .models import Fridge, Food, OpeningHour, SpecialDay, Reservation
from .forms import FridgeForm, FoodForm, OpeningHourForm, \
    SpecialDayForm, RegisterForm
from django.contrib.auth import login, authenticate, logout
from django.core import serializers
from django.http import HttpResponse
from django.contrib.auth.mixins import PermissionRequiredMixin
from django.contrib.auth.models import Permission

# Constant
LOGIN_URL = 'fridge:login'
DATE_FORMAT = '%b %d, %Y'


class AdminIndexView(PermissionRequiredMixin, generic.TemplateView):
    template_name = 'fridge/admin.html'
    permission_required = 'fridge.admin'
    login_url = LOGIN_URL

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['fridges'] = Fridge.objects.all()
        return context


class StoreIndexView(PermissionRequiredMixin, generic.TemplateView):
    template_name = 'fridge/store.html'
    permission_required = 'fridge.store'
    login_url = LOGIN_URL

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['fridge'] = Fridge.objects.filter(
            user=self.request.user).first()
        return context


class StoreDetailView(PermissionRequiredMixin, generic.TemplateView):
    template_name = 'fridge/store_detail.html'
    permission_required = 'fridge.store'
    login_url = LOGIN_URL

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['fridge'] = Fridge.objects.filter(
            user=self.request.user).first()
        return context


class FridgeCreateView(PermissionRequiredMixin, View):
    form_class = FridgeForm
    template_name = 'fridge/fridge_form.html'
    permission_required = 'fridge.admin'
    initial = {}
    login_url = LOGIN_URL

    def get(self, request, *args, **kwargs):
        form = self.form_class(initial=self.initial)
        return render(request, self.template_name, {'form': form})

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST, request.FILES)
        if form.is_valid():
            fridge = Fridge(
                name=form.cleaned_data['name'],
                address=form.cleaned_data['address'],
                NPA=form.cleaned_data['NPA'],
                phone_number=form.cleaned_data['NPA'],
                image=form.cleaned_data['image'],
                user=form.cleaned_data['user']
            )
            fridge.save()

            permission = Permission.objects.get(codename='store')
            fridge.user.user_permissions.add(permission)
            return redirect('fridge:myadmin')

        return render(request, self.template_name, {'form': form})


class FridgeListView(generic.TemplateView):
    template_name = 'fridge/fridge_list.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        fridge_list = Fridge.objects.all()
        context['fridge_list'] = fridge_list
        return context


class FridgeDeleteView(PermissionRequiredMixin, generic.DeleteView):
    model = Fridge
    success_url = reverse_lazy('fridge:myadmin')
    permission_required = 'fridge.admin'
    login_url = LOGIN_URL

    def get(self, request, *args, **kwargs):
        return self.post(request, *args, **kwargs)


class FridgeUpdateView(PermissionRequiredMixin, generic.UpdateView):
    model = Fridge
    template_name = 'fridge/fridge_update_form.html'
    permission_required = 'fridge.store'
    success_url = reverse_lazy('fridge:store-detail')
    fields = ['name', 'address', 'NPA', 'phone_number', 'image']
    login_url = LOGIN_URL


class FoodCreateView(PermissionRequiredMixin, View):
    form_class = FoodForm
    template_name = 'fridge/food_form.html'
    permission_required = 'fridge.store'
    initial = {}
    login_url = LOGIN_URL

    def get(self, request, *args, **kwargs):
        form = self.form_class(initial=self.initial)
        return render(request, self.template_name, {'form': form})

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST)
        if form.is_valid():
            food = Food(
                name=form.cleaned_data['name'],
                vegetarian=form.cleaned_data['vegetarian'],
                vegan=form.cleaned_data['vegan'],
                expiration_date=form.cleaned_data['expiration_date'],
                fridge=Fridge.objects.filter(user=request.user).first(),
                user=request.user
            )
            food.save()
            return redirect('fridge:store')
        return render(request, self.template_name, {'form': form})


class FoodDeleteView(PermissionRequiredMixin, generic.DeleteView):
    model = Food
    success_url = reverse_lazy('fridge:store')
    permission_required = 'fridge.store'
    login_url = LOGIN_URL

    def get(self, request, *args, **kwargs):
        return self.post(request, *args, **kwargs)


class FoodListView(LoginRequiredMixin, generic.ListView):
    template_name = 'fridge/food_list.html'
    model = Food
    login_url = LOGIN_URL

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        fridge = Fridge.objects.get(pk=self.kwargs['pk'])
        context['food_available'] = fridge.get_available_food()
        context['food_reserve'] = fridge.get_reserved_food(self.request.user)
        return context


class OpeningHourCreateView(PermissionRequiredMixin, View):
    form_class = OpeningHourForm
    template_name = 'fridge/opening_hour_form.html'
    permission_required = 'fridge.store'
    login_url = LOGIN_URL
    initial = {}

    def get(self, request, *args, **kwargs):
        form = self.form_class(initial=self.initial)
        return render(request, self.template_name, {'form': form})

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST)

        if form.is_valid():
            opening_hour = OpeningHour(
                weekday=form.cleaned_data['weekday'],
                from_hour=form.cleaned_data['from_hour'],
                to_hour=form.cleaned_data['to_hour'],
                fridge=Fridge.objects.filter(user=request.user).first()
            )

            opening_hour.save()

            return redirect('fridge:store-detail')
        return render(request, self.template_name, {'form': form})


class OpeningHourDeleteView(PermissionRequiredMixin, generic.DeleteView):
    model = OpeningHour
    success_url = reverse_lazy('fridge:store-detail')
    permission_required = 'fridge.store'
    login_url = LOGIN_URL

    def get(self, request, *args, **kwargs):
        return self.post(request, *args, **kwargs)


class SpecialDayCreateView(PermissionRequiredMixin, View):
    form_class = SpecialDayForm
    template_name = 'fridge/special_day_form.html'
    permission_required = 'fridge.store'
    login_url = LOGIN_URL
    initial = {}

    def get(self, request, *args, **kwargs):
        form = self.form_class(initial=self.initial)
        return render(request, self.template_name, {'form': form})

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST)

        if form.is_valid():
            if form.cleaned_data['to_date']:
                to_date = form.cleaned_data['to_date']
            else:
                to_date = None

            special_day = SpecialDay(
                from_date=form.cleaned_data['from_date'],
                to_date=to_date,
                from_hour=form.cleaned_data['from_hour'],
                to_hour=form.cleaned_data['to_hour'],
                fridge=Fridge.objects.filter(user=request.user).first()
            )
            special_day.save()
            return redirect('fridge:store-detail')
        return render(request, self.template_name, {'form': form})


class SpecialDayDeleteView(PermissionRequiredMixin, generic.DeleteView):
    model = SpecialDay
    success_url = reverse_lazy('fridge:store-detail')
    permission_required = 'fridge.store'
    login_url = LOGIN_URL

    def get(self, request, *args, **kwargs):
        return self.post(request, *args, **kwargs)


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


class SettingsView(generic.TemplateView):
    template_name = 'fridge/settings.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        if self.request.user.is_authenticated:
            context['has_fridge'] = self.request.user.has_fridge()

        return context


class ReservationListView(generic.TemplateView):
    template_name = 'fridge/reservation_list.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['reservation_list'] = self.request.user.get_reserved_food()
        return context


class RegisterView(View):
    form_class = RegisterForm
    template_name = 'fridge/register.html'
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
    template_name = 'fridge/login.html'

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


class HomeView(generic.TemplateView):
    template_name = 'fridge/home.html'


class MapView(generic.TemplateView):
    template_name = 'fridge/map.html'


class FavoriteView(generic.TemplateView):
    template_name = 'fridge/favorite.html'


def get_fridges_data(request):
    results = Fridge.objects.all()
    jsondata = serializers.serialize('json', results)
    return HttpResponse(jsondata)


def get_foods_data(request):
    results = Food.objects.all()
    jsondata = serializers.serialize('json', results)
    return HttpResponse(jsondata)


def offline_view(request):
    template = "fridge/offline.html"
    return render(request, template)
