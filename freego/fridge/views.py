from django.shortcuts import render, redirect, reverse
from django.http import HttpResponse, HttpResponseRedirect
from django.views import generic, View
from django.urls import reverse_lazy
from django.contrib.auth.mixins import LoginRequiredMixin

from .models import Fridge, Food, OpeningHour, SpecialDay, Reservation
from .forms import FoodForm, OpeningHourForm, SpecialDayForm

from datetime import datetime


def index(request):
    context = {}
    return render(request, 'fridge/index.html', context)

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


class AdminDetailView(LoginRequiredMixin, generic.TemplateView):
    template_name = 'fridge/admin_detail.html'
    login_url = 'admin/login/?next=/admin/'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['fridge'] = Fridge.objects.filter(
            user=self.request.user).first()
        return context


######################################
#                Food                #
######################################

class FoodCreateView(LoginRequiredMixin, View):
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
        if form.is_valid():
            print(form)
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


class FoodDeleteView(LoginRequiredMixin, generic.DeleteView):
    model = Food
    success_url = reverse_lazy('fridge:admins')
    login_url = 'admin/login/?next=/admin/'

    def get(self, request, *args, **kwargs):
        return self.post(request, *args, **kwargs)


class FoodListView(generic.ListView):
    template_name = 'fridge/food_list.html'
    model = Food

    def get_queryset(self):
        fridge = Fridge.objects.get(pk=self.kwargs['pk'])
        print(Food.objects.filter(fridge=fridge))
        return Food.objects.filter(fridge=fridge)


######################################
#            Opening hour            #
######################################


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

        if form.is_valid():
            openingHour = OpeningHour(
                weekday=form.cleaned_data['weekday'],
                from_hour=form.cleaned_data['from_hour'],
                to_hour=form.cleaned_data['to_hour'],
                fridge=Fridge.objects.filter(user=request.user).first()
            )
            openingHour.save()

            return redirect('fridge:admin-detail')
        return render(request, self.template_name, {'form': form})


class OpeningHourDeleteView(LoginRequiredMixin, generic.DeleteView):
    model = OpeningHour
    success_url = reverse_lazy('fridge:admin-detail')
    login_url = 'admin/login/?next=/admin/'

    def get(self, request, *args, **kwargs):
        return self.post(request, *args, **kwargs)


######################################
#            Special day             #
######################################

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

        if form.is_valid():
            if form.cleaned_data['to_date']:
                to_date = datetime.strptime(
                    form.cleaned_data['to_date'], '%b %d, %Y')
            else:
                to_date = None

            specialDay = SpecialDay(
                from_date=datetime.strptime(
                    form.cleaned_data['from_date'], '%b %d, %Y'),
                to_date=to_date,
                from_hour=form.cleaned_data['from_hour'],
                to_hour=form.cleaned_data['to_hour'],
                fridge=Fridge.objects.filter(user=request.user).first()
            )
            specialDay.save()
            return redirect('fridge:admin-detail')
        return render(request, self.template_name, {'form': form})


class SpecialDayDeleteView(LoginRequiredMixin, generic.DeleteView):
    model = SpecialDay
    success_url = reverse_lazy('fridge:admin-detail')
    login_url = 'admin/login/?next=/admin/'

    def get(self, request, *args, **kwargs):
        return self.post(request, *args, **kwargs)

######################################
#             Dashboard              #
######################################


class DashboardView(generic.TemplateView):
    template_name = 'fridge/dashboard.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['fridge_list'] = Fridge.objects.all()
        return context

######################################
#            Reservation             #
######################################


class FoodReservation(LoginRequiredMixin, View):
    def post(self, request, *args, **kwargs):
        food = Food.objects.get(pk=self.kwargs['pk'])
        reservation = Reservation(food=food, user=request.user)
        reservation.save()
        return redirect('fridge:food-list', food.fridge.pk)

    def get(self, request, *args, **kwargs):
        return self.post(request, args, kwargs) # TODO find a better solutions

class FoodCancellation(LoginRequiredMixin, View):
    def post(self, request, *args, **kwargs):
        food = Food.objects.get(pk=self.kwargs['pk'])
        reservation = Reservation.objects.get(food = food)
        reservation.delete()
        return redirect('fridge:food-list', food.fridge.pk)

    def get(self, request, *args, **kwargs):
        return self.post(request, args, kwargs) # TODO find a better solutions
