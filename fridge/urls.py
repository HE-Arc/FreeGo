from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from . import views

app_name = 'fridge'

urlpatterns = [
    path('fridge/list/', views.FridgeListView.as_view(), name='fridge-list'),

    # Admin
    path('myadmin/', views.AdminIndexView.as_view(), name='myadmin'),

    # Fridge
    path('fridge/new/', views.FridgeCreateView.as_view(), name='fridge-new'),
    path('fridge/<pk>/delete/', views.FridgeDeleteView.as_view(), name='fridge-delete'),
    path('fridge/<pk>/update/', views.FridgeUpdateView.as_view(), name='fridge-update'),

    # Store
    path('store/', views.StoreIndexView.as_view(), name='store'),
    path('store/detail/', views.StoreDetailView.as_view(), name='store-detail'),

    # Food
    path('food/new/', views.FoodCreateView.as_view(),
         name='food-form'),
    path('food/<pk>/delete/', views.FoodDeleteView.as_view(),
         name='food-delete'),
    path('food/<pk>/list/', views.FoodListView.as_view(), name='food-list'),

    # Opening Day
    path('openinghour/new/', views.OpeningHourCreateView.as_view(),
         name='openinghour-form'),
    path('openinghour/<pk>/delete/', views.OpeningHourDeleteView.as_view(),
         name='openinghour-delete'),

    # Special Day
    path('specialday/new/', views.SpecialDayCreateView.as_view(),
         name='specialday-form'),
    path('specialday/<pk>/delete/', views.SpecialDayDeleteView.as_view(),
         name='specialday-delete'),

    # Reservation
    path('food/<pk>/reservation/', views.FoodReservation.as_view(),
         name='food-reservation'),
    path('food/<pk>/cancellation/', views.FoodCancellation.as_view(),
         name='food-cancellation'),
    path('reservation/list/', views.ReservationListView.as_view(),
         name='reservation-list'),

    # Settings
    path('settings/', views.SettingsView.as_view(), name='settings'),

    # Login/Register/Logout
    path('register/', views.RegisterView.as_view(), name='register'),
    path('login/', views.LoginView.as_view(), name='login'),
    path('logout/', views.LogoutView.as_view(), name='logout'),

    # TODO (TB)
    path('', views.HomeView.as_view(), name='home'),
    path('home/', views.HomeView.as_view(), name='home'),
    path('map/', views.MapView.as_view(), name='map'),
    path('favorite/', views.FavoriteView.as_view(), name='favorite'),

    # PWA
    path('offline-view/', views.offline_view, name='offline-view')
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
