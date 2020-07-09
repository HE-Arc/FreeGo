from django.shortcuts import render, redirect
from django.views import generic, View
from django.urls import reverse_lazy
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.mixins import PermissionRequiredMixin

from fridge.models import Fridge, OpeningHour, SpecialDay
from fridge.forms import OpeningHourForm, SpecialDayForm

# Constant
LOGIN_URL = 'fridge:login'


class OpeningHourCreateView(PermissionRequiredMixin, View):
    form_class = OpeningHourForm
    template_name = 'admin/opening_hour_form.html'
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
                fridge=Fridge.objects.get(pk=self.kwargs['pk'])
            )

            opening_hour.save()

            return redirect('fridge:fridge-detail', opening_hour.fridge.pk)
        return render(request, self.template_name, {'form': form})


class OpeningHourDeleteView(PermissionRequiredMixin, generic.DeleteView):
    model = OpeningHour
    permission_required = 'fridge.store'
    login_url = LOGIN_URL

    def get(self, request, *args, **kwargs):
        return self.post(request, *args, **kwargs)

    def get_success_url(self):
        return reverse_lazy('fridge:fridge-detail',
                            kwargs={'pk': self.object.fridge.pk})


class OpeningHourListView(LoginRequiredMixin, generic.ListView):
    template_name = 'admin/opening_hour_list.html'
    model = Fridge
    login_url = LOGIN_URL

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        fridge = Fridge.objects.get(pk=self.kwargs['pk'])
        context['fridge'] = fridge
        context['opening_hour_list'] = fridge.get_opening_hours()
        return context


class SpecialDayListView(LoginRequiredMixin, generic.ListView):
    template_name = 'admin/special_day_list.html'
    model = Fridge
    login_url = LOGIN_URL

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        fridge = Fridge.objects.get(pk=self.kwargs['pk'])
        context['fridge'] = fridge
        context['special_day_list'] = fridge.get_special_days()
        return context


class SpecialDayCreateView(PermissionRequiredMixin, View):
    form_class = SpecialDayForm
    template_name = 'admin/special_day_form.html'
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
                fridge=Fridge.objects.get(pk=self.kwargs['pk'])
            )
            special_day.save()
            return redirect('fridge:fridge-detail', special_day.fridge.pk)
        return render(request, self.template_name, {'form': form})


class SpecialDayDeleteView(PermissionRequiredMixin, generic.DeleteView):
    model = SpecialDay
    permission_required = 'fridge.store'
    login_url = LOGIN_URL

    def get(self, request, *args, **kwargs):
        return self.post(request, *args, **kwargs)

    def get_success_url(self):
        return reverse_lazy('fridge:fridge-detail',
                            kwargs={'pk': self.object.fridge.pk})
