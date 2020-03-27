from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
from datetime import datetime
from django.utils import timezone
from django.core.exceptions import ValidationError


#####################################
#              Fridge               #
#####################################


class Fridge(models.Model):
    '''Fridge model'''
    name = models.CharField(max_length=45)
    address = models.CharField(max_length=45)
    NPA = models.CharField(max_length=45)
    phone_number = models.CharField(max_length=12)
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return str(self.name)

    def get_opening_hours(self):
        return OpeningHour.objects.filter(fridge=self)

    def get_special_hour(self):
        return SpecialDay.objects.filter(fridge=self)

    def get_foods(self):
        return Food.objects.filter(fridge=self)


class Food(models.Model):
    '''Food model'''
    name = models.CharField(max_length=45)
    vegetarian = models.BooleanField()
    vegan = models.BooleanField()
    expiration_date = models.DateField()
    fridge = models.ForeignKey(
        'Fridge', on_delete=models.CASCADE, null=True, blank=True)
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True, blank=True)

    def save(self, *args, **kwargs):
        if self.expiration_date < datetime.now():
            raise ValidationError("Incorrect hour")
        super().save(*args, **kwargs)

    def __str__(self):
        return str(self.name)


class Reporting(models.Model):
    '''Reporting model'''
    title = models.CharField(max_length=45)
    description = models.CharField(max_length=500)
    fridge = models.ForeignKey(
        'Fridge', on_delete=models.CASCADE, null=True, blank=True)
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return str(self.title)


#####################################
#           Opening Hours           #
#####################################

WEEKDAYS = [
    (1, "Monday"),
    (2, "Tuesday"),
    (3, "Wednesday"),
    (4, "Thursday"),
    (5, "Friday"),
    (6, "Saturday"),
    (7, "Sunday"),
]


class OpeningHour(models.Model):
    '''OpeningHour model'''
    weekday = models.PositiveSmallIntegerField(
        choices=WEEKDAYS)
    from_hour = models.TimeField()
    to_hour = models.TimeField()
    fridge = models.ForeignKey(
        'Fridge', on_delete=models.CASCADE, null=True, blank=True)

    def save(self, *args, **kwargs):
        if self.from_hour >= self.to_hour:
            raise ValidationError("Incorrect hour")
        super().save(*args, **kwargs)

    def __str__(self):
        return str(WEEKDAYS[self.weekday][1])


class SpecialDay(models.Model):
    '''SpecialDay model'''
    from_date = models.DateField(default=datetime.now)
    to_date = models.DateField(null=True, blank=True)
    from_hour = models.TimeField(null=True, blank=True)
    to_hour = models.TimeField(null=True, blank=True)
    fridge = models.ForeignKey(
        'Fridge', on_delete=models.CASCADE, null=True, blank=True)

    def save(self, *args, **kwargs):
        if self.to_date != None:
            if self.to_hour != None or self.from_hour != None:
                raise ValidationError(
                    "If two date are selected, you can't select an hour")
            elif self.to_date <= self.from_date:
                raise ValidationError("Invalid date")
        elif self.from_hour != None and self.to_hour != None:
            if self.to_hour <= self.from_hour:
                raise ValidationError("Invalid hour")

    def __str__(self):
        return str(self.from_date)
