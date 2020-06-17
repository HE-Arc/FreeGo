from django.shortcuts import render, redirect
from django.views import generic, View
from django.urls import reverse_lazy
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.mixins import PermissionRequiredMixin
from django.contrib.auth.models import Permission
from rest_framework import viewsets

from fridge.models import Fridge, Food, OpeningHour, SpecialDay, Reservation
from fridge.forms import FridgeForm, FoodForm, OpeningHourForm, SpecialDayForm
from fridge.serializers import FridgeSerializer

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


class StoreIndexView(PermissionRequiredMixin, generic.TemplateView):
    template_name = 'admin/store.html'
    permission_required = 'fridge.store'
    login_url = LOGIN_URL

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        fridge = Fridge.objects.filter(user=self.request.user).first()
        context['fridge'] = fridge
        context['food_reserved'] = fridge.get_reserved_food()
        return context


class FridgeDetailView(PermissionRequiredMixin, generic.DetailView):
    template_name = 'admin/fridge_detail.html'
    permission_required = 'fridge.store'
    login_url = LOGIN_URL
    model = Fridge


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
            fridge.longitude, fridge.latitude = fridge.get_longitude_latitude()
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
            fridge.longitude, fridge.latitude = fridge.get_longitude_latitude()
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


class FridgeDeleteView(PermissionRequiredMixin, generic.DeleteView):
    model = Fridge
    success_url = reverse_lazy('fridge:myadmin')
    permission_required = 'fridge.admin'
    login_url = LOGIN_URL

    def get(self, request, *args, **kwargs):
        return self.post(request, *args, **kwargs)


class FridgesViewSet(viewsets.ModelViewSet):
    queryset = Fridge.objects.all()
    serializer_class = FridgeSerializer


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
                expiration_date=form.cleaned_data['expiration_date'],
                image=form.cleaned_data['image'],
                fridge=Fridge.objects.filter(user=request.user).first(),
                user=request.user
            )
            food.save()
            return redirect('fridge:store')
        return render(request, self.template_name, {'form': form})


class FoodUpdateView(PermissionRequiredMixin, generic.UpdateView):
    model = Food
    template_name = 'admin/food_update_form.html'
    permission_required = 'fridge.store'
    fields = ['name', 'vegetarian', 'vegan', 'expiration_date', 'image']

    def get_success_url(self):
        return reverse_lazy('fridge:profile')


class FoodDeleteView(PermissionRequiredMixin, generic.DeleteView):
    model = Food
    success_url = reverse_lazy('fridge:store')
    permission_required = 'fridge.store'
    login_url = LOGIN_URL

    def get(self, request, *args, **kwargs):
        return self.post(request, *args, **kwargs)


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
                fridge=Fridge.objects.filter(user=request.user).first()
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
        context['opening_hour_list'] = fridge.get_opening_hours()
        return context


class SpecialDayListView(LoginRequiredMixin, generic.ListView):
    template_name = 'admin/special_day_list.html'
    model = Fridge
    login_url = LOGIN_URL

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        fridge = Fridge.objects.get(pk=self.kwargs['pk'])
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
                fridge=Fridge.objects.filter(
                    user=request.user).first()  # TODO change for sd.pk
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


class FridgeUpdateView(PermissionRequiredMixin, generic.UpdateView):
    model = Fridge
    template_name = 'user/user_update_form.html'
    permission_required = 'fridge.store'

    def get_success_url(self):
        return reverse_lazy('fridge:fridge-detail',
                            kwargs={'pk': self.object.pk})


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
