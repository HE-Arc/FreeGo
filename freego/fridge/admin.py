from django.contrib import admin

from .models import Fridge, User, Food, Reporting

admin.site.register(Fridge)
admin.site.register(User)
admin.site.register(Food)
admin.site.register(Reporting)
