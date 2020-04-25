from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
from datetime import datetime
from django.utils import timezone
from django.core.exceptions import ValidationError
from .validators import phone_number_validator, NPA_validator, expiration_date_validator

#####################################
#              Fridge               #
#####################################


class Fridge(models.Model):
    '''Fridge model'''
    name = models.CharField(max_length=45)
    address = models.CharField(max_length=45)
    NPA = models.CharField(max_length=45, validators=[NPA_validator])
    phone_number = models.CharField(
        max_length=12, validators=[phone_number_validator])
    image = models.ImageField(
        upload_to='images/', default="images/store-default.png")
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return str(self.name)

    def delete(self, *args, **kwargs):
        self.image.delete(save=False)
        super().delete(*args, **kwargs)

    def get_opening_hours(self):
        return OpeningHour.objects.filter(fridge=self)

    def get_special_day(self):
        return SpecialDay.objects.filter(fridge=self)

    def get_foods(self):
        return Food.objects.filter(fridge=self)


class Food(models.Model):
    '''Food model'''
    name = models.CharField(max_length=45)
    vegetarian = models.BooleanField()
    vegan = models.BooleanField()
    expiration_date = models.DateField(validators=[expiration_date_validator])
    fridge = models.ForeignKey(
        Fridge, on_delete=models.CASCADE, null=True, blank=True)
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True, blank=True)

    def is_reserve(self):
        return Reservation.objects.filter(food=self).count() != 0

    def __str__(self):
        return str(self.name)


class Reporting(models.Model):
    '''Reporting model'''
    title = models.CharField(max_length=45)
    description = models.CharField(max_length=500)
    fridge = models.ForeignKey(
        Fridge, on_delete=models.CASCADE, null=True, blank=True)
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return str(self.title)


class Reservation(models.Model):
    '''Reservation model'''
    food = models.ForeignKey(
        Food, on_delete=models.CASCADE, null=True, blank=True)
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True, blank=True)

    def save(self, *args, **kwargs):
        r = Reservation.objects.filter(food=self.food)
        if r and r[0].user == self.user:
            raise ValidationError("Reservation error hour")
        super().save(*args, **kwargs)


#####################################
#           Opening Hours           #
#####################################

WEEKDAYS = [
    (1, "Lundi"),
    (2, "Mardi"),
    (3, "Mercredi"),
    (4, "Jeudi"),
    (5, "Vendredi"),
    (6, "Samedi"),
    (7, "Dimanche"),
]


class OpeningHour(models.Model):
    '''OpeningHour model'''
    weekday = models.PositiveSmallIntegerField(
        choices=WEEKDAYS, default=1)
    from_hour = models.TimeField()
    to_hour = models.TimeField()
    fridge = models.ForeignKey(
        'Fridge', on_delete=models.CASCADE, null=True, blank=True)

    def save(self, *args, **kwargs):
        if self.from_hour >= self.to_hour:
            raise ValidationError("Heure invalide")
        super().save(*args, **kwargs)

    def __str__(self):
        return str(WEEKDAYS[self.weekday][1]) + " : " + str(self.from_hour) + "-" + str(self.to_hour)


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
                    "Si deux dates sont sélecionnées, vous ne pouvez pas sélectionner une heure.")
            elif self.to_date <= self.from_date:
                raise ValidationError("Date invalide")
        elif self.from_hour != None and self.to_hour != None and self.to_hour <= self.from_hour:
            raise ValidationError("Heure invalide")
        super().save(*args, **kwargs)

    def __str__(self):
        return str(self.from_date)
