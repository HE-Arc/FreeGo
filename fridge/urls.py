from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from fridge.views import views_admin, views_home, views_user, views_fridge, \
    views_schedule, views_food
from fridge import viewsets
from rest_framework import routers

from django.contrib.auth import views as auth_views
from django.urls import reverse_lazy
from fridge.forms import FridgeUpdateAddressForm


app_name = 'fridge'

router = routers.DefaultRouter()
router.register('fridges', viewsets.FridgeViewSet)
router.register('notifications', viewsets.NotificationViewSet)

urlpatterns = [
    path('api/', include(router.urls)),

    # Fridge
    path('list', views_fridge.FridgeListView.as_view(),
         name='list'),
    path('fridge/new',
         views_fridge.FridgeCreateView.as_view(), name='fridge-new'),
    path('fridge/<pk>/delete', views_fridge.FridgeDeleteView.as_view(),
         name='fridge-delete'),
    path('fridge/detail/<pk>',
         views_fridge.FridgeDetailView.as_view(), name='fridge-detail'),
    path('fridge/demand', views_fridge.FridgeDemandCreateView.as_view(),
         name='fridge-demand'),
    path('fridge/valid/<pk>', views_fridge.FridgeValidDemand.as_view(),
         name='fridge-valid'),
    path('fridge/refuse/<pk>', views_fridge.FridgeRefuseDemand.as_view(),
         name='fridge-refuse'),
    path('fridge/content-image-update/<pk>',
         views_fridge.FridgeContentImageUpdateView.as_view(),
         name='fridge-content-image-update'),
    path('fridge/content-image-list/<pk>',
         views_fridge.FridgeContentImageListView.as_view(),
         name='fridge-content-image-list'),
    path('fridge/content-image-add/<pk>',
         views_fridge.FridgeContentImageCreateView.as_view(),
         name='fridge-content-image-add'),
    path('fridge/content-image-delete/<pk>',
         views_fridge.FridgeContentImageDeleteView.as_view(),
         name='fridge-content-image-delete'),

    path('change/name/<pk>',
         views_fridge.FridgeUpdateView.as_view(
             fields=['name']), name='change-name'),
    path('change/address/<pk>',
         views_fridge.FridgeUpdateView.as_view(
             form_class=FridgeUpdateAddressForm), name='change-address'),
    path('change/phone-number/<pk>',
         views_fridge.FridgeUpdateView.as_view(
             fields=['phone_number']), name='change-phone-number'),
    path('change/image/<pk>',
         views_fridge.FridgeUpdateView.as_view(
             fields=['image']), name='change-image'),

    # Food
    path('food/<pk>/new', views_food.FoodCreateView.as_view(),
         name='food-form'),
    path('food/<pk>/detail', views_food.FoodDetailView.as_view(),
         name='food-detail'),
    path('food/<pk>/delete', views_food.FoodDeleteView.as_view(),
         name='food-delete'),
    path('food/<pk>/list/', views_food.FoodListView.as_view(),
         name='food-list'),
    path('food/<pk>/update/', views_food.FoodUpdateView.as_view(),
         name='food-update'),
    # Schedule
    path('openinghour/<pk>/new',
         views_schedule.OpeningHourCreateView.as_view(),
         name='openinghour-form'),
    path('openinghour/<pk>/delete',
         views_schedule.OpeningHourDeleteView.as_view(),
         name='openinghour-delete'),
    path('openinghour/<pk>/list',
         views_schedule.OpeningHourListView.as_view(),
         name='opening-hour-list'),

    path('specialday/<pk>/new', views_schedule.SpecialDayCreateView.as_view(),
         name='specialday-form'),
    path('specialday/<pk>/delete',
         views_schedule.SpecialDayDeleteView.as_view(),
         name='specialday-delete'),
    path('specialday/<pk>/list', views_schedule.SpecialDayListView.as_view(),
         name='special-day-list'),
    # User
    path('register', views_user.RegisterView.as_view(), name='register'),
    path('login', views_user.LoginView.as_view(), name='login'),
    path('logout', views_user.LogoutView.as_view(), name='logout'),
    path('profile', views_user.ProfileView.as_view(), name='profile'),
    path('change/username',
         views_user.UserUpdateView.as_view(fields=['username']),
         name='change-username'),
    path('change/password', auth_views.PasswordChangeView.as_view(
        template_name='common/form.html',
        success_url=reverse_lazy('fridge:profile')
    ),
        name='change-password'),

    path('password-reset/',
         auth_views.PasswordResetView.as_view(
             template_name='common/form.html',
             subject_template_name='user/password_reset_subject.txt',
             html_email_template_name='user/html_password_reset_email.html',
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
             template_name='common/form.html',
             success_url=reverse_lazy('fridge:password_reset_complete')
         ),
         name='password_reset_confirm'),
    path('password-reset-complete/',
         auth_views.PasswordResetCompleteView.as_view(
             template_name='user/password_reset_complete.html'
         ),
         name='password_reset_complete'),

    path('food/<pk>/reservation/<quantity>',
         views_user.FoodReservation.as_view(), name='food-reservation'),
    path('food/<pk>/reservation/validation/',
         views_user.FoodReservationValidation.as_view(), name='food-reservation-validation'),
    path('food/<pk>/cancellation>',
         views_user.FoodCancellation.as_view(), name='food-cancellation'),
    path('reservation/list', views_user.ReservationListView.as_view(),
         name='reservation-list'),
    path('fridge-follow/<pk>',
         views_user.FridgeFollowingCreateView.as_view(),
         name='fridge-follow'),
    path('fridge-unfollow/<pk>',
         views_user.FridgeFollowingDeleteView.as_view(),
         name='fridge-unfollow'),
    path('contact', views_user.ContactView.as_view(), name='contact'),
    path('donations', views_user.DonationView.as_view(), name='donations'),
    path('all-rights-reserved', views_user.AllRightsReserved.as_view(),
         name='all_rights_reserved'),
    path('notifications', views_user.NotificationsView.as_view(),
         name='notifications'),


    # Admin
    path('myadmin', views_admin.AdminIndexView.as_view(), name='myadmin'),
    path('store/<pk>', views_admin.StoreIndexView.as_view(), name='store'),
    path("sponsor/new/", views_admin.SponsorCreateView.as_view(),
         name="sponsor-new"),
    path("sponsor-list/", views_admin.SponsorListView.as_view(),
         name="sponsor-list"),
    path("sponsor/update/<pk>", views_admin.SponsorUpdateView.as_view(),
         name="sponsor-update"),
    path("sponsor/delete/<pk>", views_admin.SponsorDeleteView.as_view(),
         name="sponsor-delete"),

    path("inventory/new/<pk>", views_admin.InventoryCreateView.as_view(),
         name="inventory-new"),
    path("inventory-sheet/<pk>", views_admin.InventoryListView.as_view(),
         name="inventory-sheet"),
    path("inventory/update/<pk>", views_admin.InventoryUpdateView.as_view(),
         name="inventory-update"),
    path("inventory/delete/<pk>", views_admin.InventoryDeleteView.as_view(),
         name="inventory-delete"),

    path("temperature-control/new/<pk>",
         views_admin.TemperatureControlCreateView.as_view(),
         name="temperature-control-new"),
    path("temperature-control/list/<pk>",
         views_admin.TemperatureControlListView.as_view(),
         name="temperature-control-list"),
    path("temperature-control/update/<pk>",
         views_admin.TemperatureControlUpdateView.as_view(),
         name="temperature-control-update"),
    path("temperature-control/delete/<pk>",
         views_admin.TemperatureControlDeleteView.as_view(),
         name="temperature-control-delete"),

    path('report-content/<pk>', views_admin.ReportContentView.as_view(),
         name='report-content'),

    # Home
    path('', views_home.HomeView.as_view(), name='home'),
    path('home', views_home.HomeView.as_view(), name='home'),
    path('map', views_home.MapView.as_view(), name='map'),
    path('favorite', views_home.FavoriteView.as_view(), name='favorite'),
    path('settings', views_home.SettingsView.as_view(), name='settings'),
    path('offline', views_home.offline_view, name='offline'),

    path('activate/<uidb64>/<token>/',
         views_user.ActivateAccount.as_view(), name='activate'),
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
