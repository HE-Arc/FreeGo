from django.shortcuts import render, redirect, reverse
from django.http import HttpResponse, HttpResponseRedirect
from django.views import generic, View
from django.urls import reverse_lazy
from django.contrib.auth.mixins import LoginRequiredMixin

from .models import Fridge, Food, OpeningHour, SpecialDay
from .forms import FoodForm, OpeningHourForm, SpecialDayForm

from datetime import datetime


def index(request):
    context = {}
    return render(request, 'fridge/index.html', context)

######################################
#               Fridge               #
######################################


class FridgeListView(generic.ListView):
    model = Fridge


class FridgeDetailView(generic.DetailView):
    model = Fridge


class FridgeCreateView(generic.CreateView):
    model = Fridge
    fields = ['name', 'address', 'NPA', 'phone_number', 'user']
    success_url = reverse_lazy('fridge:fridges')


class FridgeUpdateView(generic.UpdateView):
    model = Fridge
    template_name_suffix = '_update_form'
    fields = ['name', 'address', 'NPA', 'phone_number', 'user']
    success_url = reverse_lazy('fridge:fridges')


class FridgeDeleteView(generic.DeleteView):
    model = Fridge
    success_url = reverse_lazy('fridge:fridges')


####################################
#               Food               #
####################################

class FoodListView(generic.ListView):
    model = Food


class FoodDetailView(generic.DetailView):
    model = Food


class FoodCreateView(generic.CreateView):
    model = Food
    fields = ['name', 'vegetarian', 'vegan',
              'expiration_date', 'fridge', 'user']
    success_url = reverse_lazy('fridge:foods')


class FoodUpdateView(generic.UpdateView):
    model = Food
    template_name_suffix = '_update_form'
    fields = ['name', 'vegetarian', 'vegan',
              'expiration_date', 'fridge', 'user']
    success_url = reverse_lazy('fridge:foods')


class FoodDeleteView(generic.DeleteView):
    model = Food
    success_url = reverse_lazy('fridge:foods')


######################################
#               Admin                #
######################################

class AdminIndexView(LoginRequiredMixin, generic.TemplateView):
    template_name = 'fridge/admin.html'
    login_url = 'admin/login/?next=/admin/'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['fridge'] = Fridge.objects.filter(
            user=self.request.user).first()
        return context


class AdminCreateView(LoginRequiredMixin, View):
    form_class = FoodForm
    template_name = 'fridge/food_form.html'
    initial = {'name': 'n', 'vegetarian': True,
               'vegan': False, 'expiration_date': '2020-04-04'}
    login_url = 'admin/login/?next=/admin/'

    def get(self, request, *args, **kwargs):
        form = self.form_class(initial=self.initial)
        return render(request, self.template_name, {'form': form})

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST)
        if form.is_valid() and form.date_validation():
            food = Food(
                name=form.cleaned_data['name'],
                vegetarian=form.cleaned_data['vegetarian'],
                vegan=form.cleaned_data['vegan'],
                expiration_date=datetime.strptime(
                    form.cleaned_data['expiration_date'], '%b %d, %Y'),
                fridge=Fridge.objects.filter(user=request.user).first(),
                user=request.user
            )
            food.save()
            return redirect('fridge:admins')
        print(form.errors)
        return render(request, self.template_name, {'form': form})


class AdminDeleteView(LoginRequiredMixin, generic.DeleteView):
    model = Food
    template_name = 'fridge/food_confirm_delete.html'
    success_url = reverse_lazy('fridge:admins')
    login_url = 'admin/login/?next=/admin/'


class AdminDetailView(LoginRequiredMixin, generic.TemplateView):
    template_name = 'fridge/admin_detail.html'
    login_url = 'admin/login/?next=/admin/'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['fridge'] = Fridge.objects.filter(
            user=self.request.user).first()
        return context


class OpeningHourCreateView(LoginRequiredMixin, View):
    form_class = OpeningHourForm
    template_name = 'fridge/opening_hour_form.html'
    login_url = 'admin/login/?next=/admin/'
    initial = {'weekday': 1, 'from_hour': '08:00', 'to_hour': '16:00'}

    def get(self, request, *args, **kwargs):
        form = self.form_class(initial=self.initial)
        return render(request, self.template_name, {'form': form})

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST)

        if form.is_valid() and form.date_validation():
            openingHour = OpeningHour(
                weekday=form.cleaned_data['weekday'],
                from_hour=form.cleaned_data['from_hour'],
                to_hour=form.cleaned_data['to_hour'],
                fridge=Fridge.objects.filter(user=request.user).first()
            )
            openingHour.save()
            return redirect('fridge:admin-detail')
        return render(request, self.template_name, {'form': form})


class SpecialDayCreateView(LoginRequiredMixin, View):
    form_class = SpecialDayForm
    template_name = 'fridge/special_day_form.html'
    login_url = 'admin/login/?next=/admin/'
    initial = {'holiday_date': '2020-04-04', 'closed': True,
               'from_hour': '16:00', 'to_hour': '16:00'}

    def get(self, request, *args, **kwargs):
        form = self.form_class(initial=self.initial)
        return render(request, self.template_name, {'form': form})

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST)

        if form.is_valid() and form.date_validation():
            specialDay = SpecialDay(
                from_date=datetime.strptime(
                    form.cleaned_data['from_date'], '%b %d, %Y'),
                to_date=datetime.strptime(
                    form.cleaned_data['to_date'], '%b %d, %Y'),
                from_hour=form.cleaned_data['from_hour'],
                to_hour=form.cleaned_data['to_hour'],
                fridge=Fridge.objects.filter(user=request.user).first()
            )
            specialDay.save()
            return redirect('fridge:admin-detail')
        return render(request, self.template_name, {'form': form})


class DashboardView(generic.TemplateView):
    template_name = 'fridge/dashboard.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['fridge_list'] = Fridge.objects.all()
        return context
