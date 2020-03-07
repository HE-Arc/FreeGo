from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views import generic, View
from django.urls import reverse_lazy

from .models import Fridge, Food

def index(request):
    return HttpResponse("Hello, world. You're at the fridge index.")

class FridgeListView(generic.ListView):
    model = Fridge

class FridgeDetailView(generic.DetailView):
    model = Fridge

class FridgeCreateView(generic.CreateView):
    model = Fridge
    fields = ['name', 'address', 'NPA', 'phone_number', 'user']

class FridgeUpdateView(generic.UpdateView):
    model = Fridge

class FridgeDeleteView(generic.DeleteView):
    model = Fridge