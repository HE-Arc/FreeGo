from django.shortcuts import render, redirect
from django.views import generic
from django.urls import reverse_lazy
from django.contrib.auth.mixins import LoginRequiredMixin

from fridge.models import Fridge, Food, FridgeFollowing, User
from fridge.forms import FoodForm
from notifications.signals import notify
from django.utils.translation import gettext_lazy as _
from fridge.views.views_fridge import ValidFridgeUser
from django.contrib.auth.mixins import UserPassesTestMixin

# Constant
LOGIN_URL = 'fridge:login'


class FoodCreateView(UserPassesTestMixin, generic.CreateView):
    form_class = FoodForm
    template_name = 'common/form.html'
    permission_required = 'fridge.store'
    initial = {}
    login_url = LOGIN_URL

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["fridge"] = Fridge.objects.get(pk=self.kwargs['pk'])
        return context

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST, request.FILES)
        if form.is_valid():
            food = Food(
                name=form.cleaned_data['name'],
                description=form.cleaned_data['description'],
                counter=form.cleaned_data['counter'],
                vegetarian=form.cleaned_data['vegetarian'],
                vegan=form.cleaned_data['vegan'],
                halal=form.cleaned_data['halal'],
                lactose_free=form.cleaned_data['lactose_free'],
                gluten_free=form.cleaned_data['gluten_free'],
                bio=form.cleaned_data['bio'],
                expiration_date=form.cleaned_data['expiration_date'],
                fridge=Fridge.objects.get(pk=self.kwargs['pk']),
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

    def test_func(self):
        fridge_user = Fridge.objects.get(pk=self.kwargs['pk']).user
        return self.request.user == fridge_user or \
            self.request.user.has_perm('fridge.admin')


class FoodDetailView(LoginRequiredMixin, generic.DetailView):
    template_name = 'food/food_detail.html'
    login_url = LOGIN_URL
    model = Food


class FoodUpdateView(ValidFridgeUser, generic.UpdateView):
    model = Food
    template_name = 'common/form.html'
    fields = ['name', 'description', 'counter', 'vegetarian', 'vegan',
              'halal', 'lactose_free', 'gluten_free', 'bio', 'expiration_date']

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
    template_name = 'food/food_list.html'
    model = Food
    login_url = LOGIN_URL

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        fridge = Fridge.objects.get(pk=self.kwargs['pk'])
        context['fridge'] = fridge
        context['is_favorite'] = fridge.is_favorite(self.request.user)
        context['food_available'] = fridge.get_available_food()
        context['food_reserve'] = fridge.get_reserved_food_by_me(
            self.request.user)
        return context
