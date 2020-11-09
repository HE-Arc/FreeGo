from django.shortcuts import render, redirect
from django.views import generic
from django.urls import reverse_lazy
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.mixins import PermissionRequiredMixin

from fridge.models import Fridge, OpeningHour, SpecialDay
from fridge.forms import OpeningHourForm, SpecialDayForm

# Constant
LOGIN_URL = 'fridge:login'


class OpeningHourCreateView(PermissionRequiredMixin, generic.CreateView):
    form_class = OpeningHourForm
    template_name = 'common/form.html'
    permission_required = 'fridge.store'
    login_url = LOGIN_URL
    initial = {}

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["fridge"] = Fridge.objects.get(pk=self.kwargs['pk'])
        return context

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST)

        if form.is_valid():
            opening_hour = OpeningHour(
                weekday=form.cleaned_data['weekday'],
                from_hour=form.cleaned_data['from_hour'],
                to_hour=form.cleaned_data['to_hour'],
                fridge=Fridge.objects.get(pk=self.kwargs['pk'])
            )

            opening_hour.save()

            return redirect('fridge:opening-hour-list', opening_hour.fridge.pk)
        return render(request, self.template_name, {'form': form})


class OpeningHourDeleteView(PermissionRequiredMixin, generic.DeleteView):
    model = OpeningHour
    permission_required = 'fridge.store'
    login_url = LOGIN_URL

    def get(self, request, *args, **kwargs):
        return self.post(request, *args, **kwargs)

    def get_success_url(self):
        return reverse_lazy('fridge:opening-hour-list',
                            kwargs={'pk': self.object.fridge.pk})


class OpeningHourListView(LoginRequiredMixin, generic.ListView):
    template_name = 'schedule/opening_hour_list.html'
    model = Fridge
    login_url = LOGIN_URL

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        fridge = Fridge.objects.get(pk=self.kwargs['pk'])
        context['fridge'] = fridge
        context['opening_hour_list'] = fridge.get_opening_hours()
        return context


class SpecialDayListView(LoginRequiredMixin, generic.ListView):
    template_name = 'schedule/special_day_list.html'
    model = Fridge
    login_url = LOGIN_URL

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        fridge = Fridge.objects.get(pk=self.kwargs['pk'])
        context['fridge'] = fridge
        context['special_day_list'] = fridge.get_special_days()
        return context


class SpecialDayCreateView(PermissionRequiredMixin, generic.CreateView):
    form_class = SpecialDayForm
    template_name = 'common/form.html'
    permission_required = 'fridge.store'
    login_url = LOGIN_URL
    initial = {}

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["fridge"] = Fridge.objects.get(pk=self.kwargs['pk'])
        return context

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST)

        if form.is_valid():
            if form.cleaned_data['to_date']:
                to_date = form.cleaned_data['to_date']
            else:
                to_date = None

            special_day = SpecialDay(
                description=form.cleaned_data['description'],
                is_open=form.cleaned_data['is_open'],
                from_date=form.cleaned_data['from_date'],
                to_date=to_date,
                from_hour=form.cleaned_data['from_hour'],
                to_hour=form.cleaned_data['to_hour'],
                fridge=Fridge.objects.get(pk=self.kwargs['pk'])
            )
            special_day.save()
            return redirect('fridge:special-day-list', special_day.fridge.pk)
        return render(request, self.template_name, {'form': form})


class SpecialDayDeleteView(PermissionRequiredMixin, generic.DeleteView):
    model = SpecialDay
    permission_required = 'fridge.store'
    login_url = LOGIN_URL

    def get(self, request, *args, **kwargs):
        return self.post(request, *args, **kwargs)

    def get_success_url(self):
        return reverse_lazy('fridge:special-day-list',
                            kwargs={'pk': self.object.fridge.pk})
