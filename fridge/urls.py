from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from .views import views_admin, views_home, views_user

app_name = 'fridge'

urlpatterns = [
    path('fridge/list', views_admin.FridgeListView.as_view(),
         name='fridge-list'),
    # Admin
    path('myadmin', views_admin.AdminIndexView.as_view(), name='myadmin'),

    # Fridge
    path('fridge/new',
         views_admin.FridgeCreateView.as_view(), name='fridge-new'),
    path('fridge/<pk>/delete', views_admin.FridgeDeleteView.as_view(),
         name='fridge-delete'),
    path('fridge/<pk>/update', views_admin.FridgeUpdateView.as_view(),
         name='fridge-update'),

    # Store
    path('store', views_admin.StoreIndexView.as_view(), name='store'),
    path('store/detail',
         views_admin.StoreDetailView.as_view(), name='store-detail'),

    # Food
    path('food/new', views_admin.FoodCreateView.as_view(),
         name='food-form'),
    path('food/<pk>/delete', views_admin.FoodDeleteView.as_view(),
         name='food-delete'),
    path('food/<pk>/list/', views_admin.FoodListView.as_view(),
         name='food-list'),

    # Opening Day
    path('openinghour/new', views_admin.OpeningHourCreateView.as_view(),
         name='openinghour-form'),
    path('openinghour/<pk>/delete',
         views_admin.OpeningHourDeleteView.as_view(),
         name='openinghour-delete'),

    # Special Day
    path('specialday/new', views_admin.SpecialDayCreateView.as_view(),
         name='specialday-form'),
    path('specialday/<pk>/delete', views_admin.SpecialDayDeleteView.as_view(),
         name='specialday-delete'),

    # Reservation
    path('food/<pk>/reservation', views_admin.FoodReservation.as_view(),
         name='food-reservation'),
    path('food/<pk>/cancellation', views_admin.FoodCancellation.as_view(),
         name='food-cancellation'),
    path('reservation/list', views_user.ReservationListView.as_view(),
         name='reservation-list'),


    # Login/Register/Logout
    path('register', views_user.RegisterView.as_view(), name='register'),
    path('login', views_user.LoginView.as_view(), name='login'),
    path('logout', views_user.LogoutView.as_view(), name='logout'),
    path('profile/<pk>', views_user.ProfileView.as_view(), name='profile'),
    path('user/<pk>/username/update',
         views_user.UserUsernameUpdateView.as_view(),
         name='user-username-update'),

    # Home
    path('', views_home.HomeView.as_view(), name='home'),
    path('home', views_home.HomeView.as_view(), name='home'),
    path('map', views_home.MapView.as_view(), name='map'),
    path('favorite', views_home.FavoriteView.as_view(), name='favorite'),
    path('settings', views_home.SettingsView.as_view(), name='settings'),

    # PWA
    path('forecast/get-fridges-data',
         views_home.get_fridges_data, name='get-fridges-data'),
    path('forecast/get-foods-data',
         views_home.get_foods_data, name='get-foods-data'),
    path('offline', views_home.offline_view, name='offline')
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
