from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import Fridge, Food, Reporting, OpeningHour, SpecialDay, User

admin.site.register(Fridge)
admin.site.register(Food)
admin.site.register(Reporting)
admin.site.register(OpeningHour)
admin.site.register(SpecialDay)
admin.site.register(User, UserAdmin)
