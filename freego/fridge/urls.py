from django.urls import path
from django.contrib import admin

from . import views

app_name = 'fridge'

urlpatterns = [
    path('', views.index, name='index'),
    # Fridge
    path('fridges', views.FridgeListView.as_view(), name='fridges'),
    path('fridge/detail/<pk>', views.FridgeDetailView.as_view(), name='fridge-detail'),
    path('fridge/new', views.FridgeCreateView.as_view(), name='fridge-form'),
    path('fridge/<pk>/update', views.FridgeUpdateView.as_view(), name='fridge-update-form'),
    path('fridge/<pk>/delete', views.FridgeDeleteView.as_view(), name='fridge-delete'),
    # Food
    path('foods', views.FoodListView.as_view(), name='foods'),
    path('food/detail/<pk>', views.FoodDetailView.as_view(), name='food-detail'),
    path('food/new', views.FoodCreateView.as_view(), name='food-form'),
    path('food/<pk>/update', views.FoodUpdateView.as_view(), name='food-update-form'),
    path('food/<pk>/delete', views.FoodDeleteView.as_view(), name='food-delete'),
    # Admin
    path('myadmin/detail/<pk>', views.AdminDetailView.as_view(), name='admins'),
    path('myadmin/new', views.AdminCreateView.as_view(), name='admin-form'),
    path('myadmin/<pk>/delete', views.AdminDeleteView.as_view(), name='admin-delete')
]