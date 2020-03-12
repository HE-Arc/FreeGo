from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views import generic, View
from django.urls import reverse_lazy

from .models import Fridge, Food


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
    fields = ['name', 'vegetarian', 'vegan', 'expiration_date', 'fridge', 'user']
    success_url = reverse_lazy('fridge:foods')


class FoodUpdateView(generic.UpdateView):
    model = Food
    template_name_suffix = '_update_form'
    fields = ['name', 'vegetarian', 'vegan', 'expiration_date', 'fridge', 'user']
    success_url = reverse_lazy('fridge:foods')


class FoodDeleteView(generic.DeleteView):
    model = Food
    success_url = reverse_lazy('fridge:foods')