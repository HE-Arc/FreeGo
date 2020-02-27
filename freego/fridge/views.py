from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views import generic, View
from django.urls import reverse_lazy

def index(request):
    
    context = {}
    return render(request, 'fridge/index.html', context)
