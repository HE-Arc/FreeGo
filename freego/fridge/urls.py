from django.urls import path

from . import views

app_name = 'fridge'

urlpatterns = [
    path('', views.index, name='index'),
    path('fridges', views.FridgeListView.as_view(), name="fridges"),
    path('fridge/detail/<pk>', views.FridgeDetailView.as_view(), name="fridge-detail"),
    path('fridge/new', views.FridgeCreateView.as_view(), name="fridge-form"),
    path('fridge/<pk>/update', views.FridgeUpdateView.as_view(), name="fride-update"),
    path('fridge/<pk>/delete', views.FridgeDeleteView.as_view(), name="fridge-delete")
]