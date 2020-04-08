from django.contrib import admin

from .models import Fridge, Food, Reporting, OpeningHour, SpecialDay

admin.site.register(Fridge)
admin.site.register(Food)
admin.site.register(Reporting)
admin.site.register(OpeningHour)
admin.site.register(SpecialDay)
