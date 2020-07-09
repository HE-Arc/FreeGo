from django.contrib.auth.mixins import UserPassesTestMixin
from django.shortcuts import render, redirect
from django.views import generic, View
from django.urls import reverse_lazy
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.mixins import PermissionRequiredMixin
from django.contrib.auth.models import Permission
from rest_framework import viewsets

from fridge.models import Fridge, Food, OpeningHour, SpecialDay, Reservation, \
    FridgeFollowing, User, Sponsor, Inventory, TemperatureControl
from fridge.forms import FridgeForm, FoodForm, OpeningHourForm, \
    SpecialDayForm, SponsorForm, InventoryForm, TemperatureControlForm
from fridge.serializers import FridgeSerializer, NotificationSerializer
from notifications.signals import notify
from django.utils.translation import gettext_lazy as _
from notifications.models import Notification
from rest_framework.decorators import action
from rest_framework.response import Response


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


class ValidFridgeUser(UserPassesTestMixin):
    def test_func(self):
        obj = super().get_object()
        return self.request.user == obj.user or \
            self.request.user.has_perm('fridge.admin')


class FridgeDetailView(ValidFridgeUser, generic.DetailView):
    template_name = 'admin/fridge_detail.html'
    login_url = LOGIN_URL
    model = Fridge


class FridgeUpdateView(ValidFridgeUser, generic.UpdateView):
    model = Fridge
    template_name = 'user/user_update_form.html'

    def get_success_url(self):
        return reverse_lazy('fridge:fridge-detail',
                            kwargs={'pk': self.object.pk})


class FridgeDeleteView(PermissionRequiredMixin, generic.DeleteView):
    model = Fridge
    success_url = reverse_lazy('fridge:myadmin')
    permission_required = 'fridge.admin'
    login_url = LOGIN_URL

    def get(self, request, *args, **kwargs):
        return self.post(request, *args, **kwargs)


class FridgeDemandCreateView(LoginRequiredMixin, generic.CreateView):
    form_class = FridgeForm
    template_name = 'admin/fridge_demand_form.html'
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
                city=form.cleaned_data['city'],
                phone_number=form.cleaned_data['phone_number'],
                image=form.cleaned_data['image'],
                user=request.user
            )
            fridge.save()

            permission = Permission.objects.get(codename='store')
            fridge.user.user_permissions.add(permission)
            return redirect('fridge:settings')

        return render(request, self.template_name, {'form': form})


class FridgeCreateView(PermissionRequiredMixin, FridgeDemandCreateView):
    template_name = 'admin/fridge_form.html'
    permission_required = 'fridge.admin'

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST, request.FILES)
        if form.is_valid():
            fridge = Fridge(
                name=form.cleaned_data['name'],
                address=form.cleaned_data['address'],
                NPA=form.cleaned_data['NPA'],
                city=form.cleaned_data['city'],
                phone_number=form.cleaned_data['phone_number'],
                image=form.cleaned_data['image'],
                user=form.cleaned_data['user'],
                is_active=True
            )
            fridge.save()

            permission = Permission.objects.get(codename='store')
            fridge.user.user_permissions.add(permission)
            return redirect('fridge:myadmin')

        return render(request, self.template_name, {'form': form})


class FridgeListView(generic.TemplateView):
    template_name = 'admin/fridge_list.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        fridge_list = Fridge.objects.filter(is_active=True)
        context['fridge_list'] = fridge_list
        return context


class FridgeValidDemand(PermissionRequiredMixin, View):
    login_url = LOGIN_URL
    permission_required = 'fridge.admin'

    def post(self, request, *args, **kwargs):
        fridge = Fridge.objects.get(pk=self.kwargs['pk'])
        fridge.is_active = True
        fridge.save()
        return redirect('fridge:myadmin')

    def get(self, request, *args, **kwargs):
        return self.post(request, args, kwargs)


class FridgeRefuseDemand(PermissionRequiredMixin, View):
    login_url = LOGIN_URL
    permission_required = 'fridge.admin'

    def post(self, request, *args, **kwargs):
        fridge = Fridge.objects.get(pk=self.kwargs['pk'])
        permission = Permission.objects.get(codename='store')
        fridge.user.user_permissions.remove(permission)
        fridge.delete()
        return redirect('fridge:myadmin')

    def get(self, request, *args, **kwargs):
        return self.post(request, args, kwargs)


class FridgesViewSet(viewsets.ModelViewSet):
    queryset = Fridge.objects.filter(is_active=True)
    serializer_class = FridgeSerializer

    @action(detail=False)
    def favorites(self, request):
        reserved_fridges = FridgeFollowing.objects.filter(
            user=request.user).values_list('fridge_id')
        favorites = Fridge.objects.filter(id__in=reserved_fridges)
        serializer = self.get_serializer(favorites, many=True)
        return Response(serializer.data)


class FoodCreateView(PermissionRequiredMixin, View):
    form_class = FoodForm
    template_name = 'admin/food_form.html'
    permission_required = 'fridge.store'
    initial = {}
    login_url = LOGIN_URL

    def get(self, request, *args, **kwargs):
        form = self.form_class(initial=self.initial)
        return render(request, self.template_name, {'form': form})

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST, request.FILES)
        if form.is_valid():
            food = Food(
                name=form.cleaned_data['name'],
                vegetarian=form.cleaned_data['vegetarian'],
                vegan=form.cleaned_data['vegan'],
                halal=form.cleaned_data['halal'],
                lactose_free=form.cleaned_data['lactose_free'],
                gluten_free=form.cleaned_data['gluten_free'],
                bio=form.cleaned_data['bio'],
                expiration_date=form.cleaned_data['expiration_date'],
                image=form.cleaned_data['image'],
                fridge=Fridge.objects.filter(user=request.user).first(),
                user=request.user
            )
            food.save()
            user = request.user

            user_list = FridgeFollowing.objects.filter(
                fridge=food.fridge).values_list('user')
            recipient = User.objects.filter(id__in=user_list)
            verb = _("You have new notifications from fridge %(fridge)s") % {
                'fridge': food.fridge}

            notify.send(user, recipient=recipient,
                        verb=verb)
            return redirect('fridge:store', food.fridge.pk)
        return render(request, self.template_name, {'form': form})


class FoodUpdateView(ValidFridgeUser, generic.UpdateView):
    model = Food
    template_name = 'admin/food_update_form.html'
    fields = ['name', 'vegetarian', 'vegan',  'halal', 'lactose_free',
              'gluten_free', 'bio', 'expiration_date', 'image']

    def get_success_url(self):
        return reverse_lazy('fridge:profile')


class FoodDeleteView(ValidFridgeUser, generic.DeleteView):
    model = Food
    login_url = LOGIN_URL

    def get(self, request, *args, **kwargs):
        return self.post(request, *args, **kwargs)

    def get_success_url(self):
        return reverse_lazy('fridge:store',
                            kwargs={'pk': self.object.fridge.pk})


class FoodListView(LoginRequiredMixin, generic.ListView):
    template_name = 'admin/food_list.html'
    model = Food
    login_url = LOGIN_URL

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        fridge = Fridge.objects.get(pk=self.kwargs['pk'])
        context['fridge'] = fridge
        context['is_favorite'] = fridge.is_favorite(self.request.user)
        context['food_available'] = fridge.get_available_food()
        context['food_reserve'] = self.request.user.get_reserved_food()
        return context


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


class NotificationsViewSet(viewsets.ModelViewSet):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer

    @action(detail=False)
    def by_user(self, request):
        notifications = Notification.objects.filter(
            recipient=self.request.user).filter(unread=True)
        serializer = self.get_serializer(notifications, many=True)
        return Response(serializer.data)


class SponsorCreateView(PermissionRequiredMixin, generic.CreateView):
    form_class = SponsorForm
    permission_required = 'fridge.admin'
    template_name = "new_form.html"
    login_url = LOGIN_URL
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
    template_name = "new_form.html"
    login_url = LOGIN_URL

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


class InventoryDeleteView(ValidInventoryUser, generic.DeleteView):
    model = Inventory
    login_url = LOGIN_URL

    def get(self, request, *args, **kwargs):
        return self.post(request, *args, **kwargs)

    def get_success_url(self):
        return reverse_lazy('fridge:inventory-sheet',
                            kwargs={'pk': self.object.fridge.pk})


class InventoryUpdateView(ValidInventoryUser, generic.UpdateView):
    model = Inventory
    template_name = "new_form.html"
    login_url = LOGIN_URL
    fields = ['date', 'product_name', 'product_number', 'temperature', 'visa']

    def get_success_url(self):
        return reverse_lazy('fridge:inventory-sheet',
                            kwargs={'pk': self.object.fridge.pk})


class TemperatureControlCreateView(ValidInventoryUser, generic.CreateView):
    form_class = TemperatureControlForm
    template_name = "new_form.html"
    login_url = LOGIN_URL

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


class TemperatureControlDeleteView(ValidInventoryUser, generic.DeleteView):
    model = TemperatureControl
    login_url = LOGIN_URL

    def get(self, request, *args, **kwargs):
        return self.post(request, *args, **kwargs)

    def get_success_url(self):
        return reverse_lazy('fridge:temperature-control-list',
                            kwargs={'pk': self.object.fridge.pk})


class TemperatureControlUpdateView(ValidInventoryUser, generic.UpdateView):
    model = TemperatureControl
    template_name = "new_form.html"
    login_url = LOGIN_URL
    fields = ['date', 'temperature', 'visa']

    def get_success_url(self):
        return reverse_lazy('fridge:temperature-control-list',
                            kwargs={'pk': self.object.fridge.pk})
