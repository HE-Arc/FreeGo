from django.contrib.auth.mixins import UserPassesTestMixin
from django.shortcuts import render, redirect
from django.views import generic, View
from django.urls import reverse_lazy
from django.contrib.auth.mixins import PermissionRequiredMixin

from fridge.models import Fridge, Food, Sponsor, Inventory, \
    TemperatureControl, ReportContent
from fridge.forms import SponsorForm, InventoryForm, TemperatureControlForm
from django.contrib.auth.mixins import LoginRequiredMixin
from notifications.signals import notify
from django.utils.translation import gettext_lazy as _


# Constant
LOGIN_URL = 'fridge:login'


class AdminIndexView(PermissionRequiredMixin, generic.TemplateView):
    template_name = 'admin/admin.html'
    permission_required = 'fridge.admin'
    login_url = LOGIN_URL

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['fridges'] = Fridge.objects.all()
        context['fridges_to_valid'] = Fridge.objects.filter(is_active=False)
        context['sponsors'] = Sponsor.objects.all()
        return context


class StoreIndexView(UserPassesTestMixin, generic.TemplateView):
    template_name = 'admin/store.html'
    permission_required = 'fridge.store'
    login_url = LOGIN_URL

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        pk = self.kwargs['pk']
        fridge = Fridge.objects.filter(pk=pk).first()
        context['fridge'] = fridge
        context['food_reserved'] = fridge.get_reserved_food()
        return context

    def test_func(self):
        pk = self.kwargs['pk']
        fridge = Fridge.objects.filter(pk=pk).first()
        return self.request.user == fridge.user or \
            self.request.user.has_perm('fridge.admin')


class SponsorCreateView(PermissionRequiredMixin, generic.CreateView):
    form_class = SponsorForm
    permission_required = 'fridge.admin'
    template_name = "common/form.html"
    login_url = LOGIN_URL
    success_url = reverse_lazy('fridge:myadmin')


class SponsorListView(LoginRequiredMixin, generic.ListView):
    template_name = 'admin/sponsor_list.html'
    model = Sponsor
    login_url = LOGIN_URL


class SponsorUpdateView(PermissionRequiredMixin, generic.UpdateView):
    model = Sponsor
    permission_required = 'fridge.admin'
    template_name = "common/form.html"
    login_url = LOGIN_URL
    fields = ['name', 'logo', 'website']
    success_url = reverse_lazy('fridge:myadmin')


class SponsorDeleteView(PermissionRequiredMixin, generic.DeleteView):
    model = Sponsor
    success_url = reverse_lazy('fridge:myadmin')
    permission_required = 'fridge.admin'
    login_url = LOGIN_URL

    def get(self, request, *args, **kwargs):
        return self.post(request, *args, **kwargs)


class ValidInventoryUser(UserPassesTestMixin):
    def test_func(self):
        fridge = Fridge.objects.get(pk=self.kwargs['pk'])
        return self.request.user == fridge.user or \
            self.request.user.has_perm('fridge.admin')


class InventoryCreateView(ValidInventoryUser, generic.CreateView):
    form_class = InventoryForm
    model = Inventory
    template_name = "common/form.html"
    login_url = LOGIN_URL

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["fridge"] = Fridge.objects.get(pk=self.kwargs['pk'])
        return context

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST)

        if form.is_valid():
            inventory = Inventory(
                date=form.cleaned_data['date'],
                product_name=form.cleaned_data['product_name'],
                product_number=form.cleaned_data['product_number'],
                temperature=form.cleaned_data['temperature'],
                visa=form.cleaned_data['visa'],
                fridge=Fridge.objects.get(pk=self.kwargs['pk'])
            )
            inventory.save()
            return redirect('fridge:inventory-sheet', inventory.fridge.pk)
        return render(request, self.template_name, {'form': form})


class InventoryListView(ValidInventoryUser, generic.ListView):
    model = Inventory
    template_name = "admin/inventory_sheet.html"
    login_url = LOGIN_URL

    def get_queryset(self):
        fridge = Fridge.objects.get(pk=self.kwargs['pk'])
        return Inventory.objects.filter(fridge=fridge)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["fridge"] = Fridge.objects.get(pk=self.kwargs['pk'])
        return context


class InventoryDeleteView(UserPassesTestMixin, generic.DeleteView):
    model = Inventory
    login_url = LOGIN_URL

    def get(self, request, *args, **kwargs):
        return self.post(request, *args, **kwargs)

    def get_success_url(self):
        return reverse_lazy('fridge:inventory-sheet',
                            kwargs={'pk': self.object.fridge.pk})

    def test_func(self):
        inventory = Inventory.objects.get(pk=self.kwargs['pk'])
        return self.request.user == inventory.fridge.user or \
            self.request.user.has_perm('fridge.admin')


class InventoryUpdateView(UserPassesTestMixin, generic.UpdateView):
    model = Inventory
    template_name = "common/form.html"
    login_url = LOGIN_URL
    fields = ['date', 'product_name', 'product_number', 'temperature', 'visa']

    def get_success_url(self):
        return reverse_lazy('fridge:inventory-sheet',
                            kwargs={'pk': self.object.fridge.pk})

    def test_func(self):
        inventory = Inventory.objects.get(pk=self.kwargs['pk'])
        return self.request.user == inventory.fridge.user or \
            self.request.user.has_perm('fridge.admin')


class TemperatureControlCreateView(ValidInventoryUser, generic.CreateView):
    form_class = TemperatureControlForm
    template_name = "common/form.html"
    login_url = LOGIN_URL

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["fridge"] = Fridge.objects.get(pk=self.kwargs['pk'])
        return context

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST)
        if form.is_valid():
            temperature_control = TemperatureControl(
                date=form.cleaned_data['date'],
                temperature=form.cleaned_data['temperature'],
                visa=form.cleaned_data['visa'],
                fridge=Fridge.objects.get(pk=self.kwargs['pk'])
            )
            temperature_control.save()
            return redirect('fridge:temperature-control-list',
                            temperature_control.fridge.pk)
        return render(request, self.template_name, {'form': form})


class TemperatureControlListView(ValidInventoryUser, generic.ListView):
    model = TemperatureControl
    template_name = "admin/temperature_control_list.html"
    login_url = LOGIN_URL

    def get_queryset(self):
        fridge = Fridge.objects.get(pk=self.kwargs['pk'])
        return TemperatureControl.objects.filter(fridge=fridge)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["fridge"] = Fridge.objects.get(pk=self.kwargs['pk'])
        return context


class TemperatureControlDeleteView(UserPassesTestMixin, generic.DeleteView):
    model = TemperatureControl
    login_url = LOGIN_URL

    def get(self, request, *args, **kwargs):
        return self.post(request, *args, **kwargs)

    def get_success_url(self):
        return reverse_lazy('fridge:temperature-control-list',
                            kwargs={'pk': self.object.fridge.pk})

    def test_func(self):
        temperature_control = TemperatureControl.objects.get(
            pk=self.kwargs['pk'])
        return self.request.user == temperature_control.fridge.user or \
            self.request.user.has_perm('fridge.admin')


class TemperatureControlUpdateView(UserPassesTestMixin, generic.UpdateView):
    model = TemperatureControl
    template_name = "common/form.html"
    login_url = LOGIN_URL
    fields = ['date', 'temperature', 'visa']

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        print(context)
        return context

    def get_success_url(self):
        return reverse_lazy('fridge:temperature-control-list',
                            kwargs={'pk': self.object.fridge.pk})

    def test_func(self):
        temperature_control = TemperatureControl.objects.get(
            pk=self.kwargs['pk'])
        return self.request.user == temperature_control.fridge.user or \
            self.request.user.has_perm('fridge.admin')


class ReportContentView(LoginRequiredMixin, View):
    def post(self, request, *args, **kwargs):
        food = Food.objects.get(pk=self.kwargs['pk'])
        report_content = ReportContent(food=food, user=request.user)
        report_content.save()
        recipient = [food.user]
        verb = _("Someone report %(food)s as illegal content") % {
            'food': food}
        notify.send(request.user, recipient=recipient,
                    verb=verb)
        return redirect('fridge:home')
