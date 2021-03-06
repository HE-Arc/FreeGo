from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import (Fridge, Food, OpeningHour, SpecialDay,
                     User, FridgeFollowing, ReportContent, Sponsor)

admin.site.register(Fridge)
admin.site.register(Food)
admin.site.register(OpeningHour)
admin.site.register(SpecialDay)
admin.site.register(FridgeFollowing)
admin.site.register(ReportContent)
admin.site.register(Sponsor)
admin.site.register(User, UserAdmin)
