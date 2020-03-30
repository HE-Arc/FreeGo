from django.urls import path
from django.contrib import admin

from . import views

app_name = 'fridge'

urlpatterns = [
    path('', views.DashboardView.as_view(), name='dashboard'),

    # Admin
    path('myadmin', views.AdminIndexView.as_view(), name='admins'),
    path('myadmin/detail', views.AdminDetailView.as_view(), name='admin-detail'),

    # Food
    path('myadmin/food/new', views.FoodCreateView.as_view(), name='admin-food-form'),
    path('myadmin/food/<pk>/delete', views.FoodDeleteView.as_view(),
         name='admin-food-delete'),
    path('food/<pk>/list', views.FoodListView.as_view(), name='food-list'),

    # Opening Day
    path('myadmin/openinghour/new', views.OpeningHourCreateView.as_view(),
         name='admin-openinghour-form'),
    path('myadmin/openinghour/<pk>/delete', views.OpeningHourDeleteView.as_view(),
         name='admin-openinghour-delete'),

    # Special Day
    path('myadmin/specialday/new', views.SpecialDayCreateView.as_view(),
         name='admin-specialday-form'),
    path('myadmin/specialday/<pk>/delete', views.SpecialDayDeleteView.as_view(),
         name='admin-specialday-delete'),

    # Reservation
    path('food/<pk>/reservation', views.FoodReservation.as_view(),
         name='food-reservation'),
    path('food/<pk>/cancellation', views.FoodCancellation.as_view(),
         name='food-cancellation')
]
