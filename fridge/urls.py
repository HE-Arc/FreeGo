from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from fridge.views import views_admin, views_home, views_user
from rest_framework import routers

from rest_framework_simplejwt import views as jwt_views
from django.contrib.auth import views as auth_views
from django.urls import reverse_lazy

app_name = 'fridge'

router = routers.DefaultRouter()
router.register('fridges', views_admin.FridgesViewSet)
router.register('notifications', views_admin.NotificationsViewSet)

urlpatterns = [
    path('list', views_admin.FridgeListView.as_view(),
         name='list'),
    # Admin
    path('myadmin', views_admin.AdminIndexView.as_view(), name='myadmin'),

    # Fridge
    path('fridge/new',
         views_admin.FridgeCreateView.as_view(), name='fridge-new'),
    path('fridge/<pk>/delete', views_admin.FridgeDeleteView.as_view(),
         name='fridge-delete'),
    path('fridge/<pk>/update', views_admin.FridgeUpdateView.as_view(),
         name='fridge-update'),
    path('api/', include(router.urls)),

    # Store
    path('store/<pk>', views_admin.StoreIndexView.as_view(), name='store'),
    path('fridge/detail/<pk>',
         views_admin.FridgeDetailView.as_view(), name='fridge-detail'),
    path('change/address/<pk>',
         views_admin.FridgeUpdateView.as_view(
             fields=['address', 'NPA', 'city']), name='change-address'),
    path('change/phone-number/<pk>',
         views_admin.FridgeUpdateView.as_view(
             fields=['phone_number']), name='change-phone-number'),
    path('change/user/<pk>',
         views_admin.FridgeUpdateView.as_view(
             fields=['user']), name='change-user'),

    # Food
    path('food/new', views_admin.FoodCreateView.as_view(),
         name='food-form'),
    path('food/<pk>/delete', views_admin.FoodDeleteView.as_view(),
         name='food-delete'),
    path('food/<pk>/list/', views_admin.FoodListView.as_view(),
         name='food-list'),
    path('food/<pk>/update/', views_admin.FoodUpdateView.as_view(),
         name='food-update'),

    # Opening Day
    path('openinghour/<pk>/new', views_admin.OpeningHourCreateView.as_view(),
         name='openinghour-form'),
    path('openinghour/<pk>/delete',
         views_admin.OpeningHourDeleteView.as_view(),
         name='openinghour-delete'),
    path('openinghour/<pk>/list',
         views_admin.OpeningHourListView.as_view(),
         name='opening-hour-list'),

    # Special Day
    path('specialday/<pk>/new', views_admin.SpecialDayCreateView.as_view(),
         name='specialday-form'),
    path('specialday/<pk>/delete', views_admin.SpecialDayDeleteView.as_view(),
         name='specialday-delete'),
    path('specialday/<pk>/list', views_admin.SpecialDayListView.as_view(),
         name='special-day-list'),

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
    path('profile', views_user.ProfileView.as_view(), name='profile'),
    path('change/username/<pk>',
         views_user.UserUpdateView.as_view(fields=['username']),
         name='change-username'),
    path('change/email/<pk>',
         views_user.UserUpdateView.as_view(fields=['email']),
         name='change-email'),
    path('change/password', auth_views.PasswordChangeView.as_view(
        template_name='user/user_update_form.html',
        success_url=reverse_lazy('fridge:profile')
    ),
        name='change-password'),

    path('password-reset/',
         auth_views.PasswordResetView.as_view(
             template_name='user/password_reset_form.html',
             subject_template_name='user/password_reset_subject.txt',
             email_template_name='user/password_reset_email.html',
             success_url=reverse_lazy('fridge:password_reset_done')
         ),
         name='password_reset'),
    path('password-reset/done/',
         auth_views.PasswordResetDoneView.as_view(
             template_name='user/password_reset_done.html'
         ),
         name='password_reset_done'),
    path('password-reset-confirm/<uidb64>/<token>/',
         auth_views.PasswordResetConfirmView.as_view(
             template_name='user/password_reset_confirm.html',
             success_url=reverse_lazy('fridge:password_reset_complete')
         ),
         name='password_reset_confirm'),
    path('password-reset-complete/',
         auth_views.PasswordResetCompleteView.as_view(
             template_name='user/password_reset_complete.html'
         ),
         name='password_reset_complete'),
    path('contact', views_home.ContactView.as_view(), name='contact'),

    # Home
    path('', views_home.HomeView.as_view(), name='home'),
    path('home', views_home.HomeView.as_view(), name='home'),
    path('map', views_home.MapView.as_view(), name='map'),
    path('favorite', views_home.FavoriteView.as_view(), name='favorite'),
    path('settings', views_home.SettingsView.as_view(), name='settings'),

    # PWA
    path('offline', views_home.offline_view, name='offline'),

    path('fridge-follow/<pk>',
         views_user.FridgeFollowingCreateView.as_view(),
         name='fridge-follow'),
    path('fridge-unfollow/<pk>',
         views_user.FridgeFollowingDeleteView.as_view(),
         name='fridge-unfollow'),
    path('fridge/demand', views_admin.FridgeDemandCreateView.as_view(),
         name='fridge-demand'),
    path('fridge/valid/<pk>', views_admin.FridgeValidDemand.as_view(),
         name='fridge-valid'),
    path('fridge/refuse/<pk>', views_admin.FridgeRefuseDemand.as_view(),
         name='fridge-refuse'),
    path('api/token/', jwt_views.TokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(),
         name='token_refresh'),
    path('notifications', views_home.NotificationsView.as_view(),
         name='notifications'),

]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
