from django.db import models
from django.contrib.auth.models import AbstractUser, User
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
        upload_to='images/')
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True, blank=True)

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

    def get_available_food(self):
        all_reservation = Reservation.objects.values_list('food_id')
        return Food.objects.filter(fridge=self).exclude(id__in=all_reservation)

    def get_reserved_food(self, user):
        return [food for food in Food.objects.filter(fridge=self) if food.is_reserve_by_me(user) == True]


class Food(models.Model):
    '''Food model'''
    name = models.CharField(max_length=45)
    vegetarian = models.BooleanField()
    vegan = models.BooleanField()
    expiration_date = models.DateField(validators=[expiration_date_validator])
    fridge = models.ForeignKey(
        Fridge, on_delete=models.CASCADE, null=True, blank=True)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True, blank=True)

    def is_reserve_by_me(self, current_user):
        return Reservation.objects.filter(food=self).filter(user=current_user).count() != 0

    def is_available(self):
        return Reservation.objects.filter(food=self).count() == 0

    def __str__(self):
        return str(self.name)


class Reporting(models.Model):
    '''Reporting model'''
    title = models.CharField(max_length=45)
    description = models.CharField(max_length=500)
    fridge = models.ForeignKey(
        Fridge, on_delete=models.CASCADE, null=True, blank=True)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return str(self.title)


class Reservation(models.Model):
    '''Reservation model'''
    food = models.ForeignKey(
        Food, on_delete=models.CASCADE, null=True, blank=True)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True, blank=True)

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
        return str(WEEKDAYS[self.weekday][1]) + " : " + self.from_hour.strftime('%H:%M') + "-" + self.to_hour.strftime('%H:%M')


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
        if self.to_date:
            return "Du " + self.from_date.strftime('%d/%m/%Y') + " aux " + self.from_date.strftime('%d/%m/%Y')
        elif self.from_hour and self.to_hour:
            return "Le " + self.from_date.strftime('%d/%m/%Y') + " ouvert de " + self.from_hour.strftime('%H:%M') + " à " + self.to_hour.strftime('%H:%M')
        elif self.from_hour:
            return "Le " + self.from_date.strftime('%d/%m/%Y') + " ouvre à " + self.from_hour.strftime('%H:%M')
        elif self.to_hour:
            return "Le " + self.from_date.strftime('%d/%m/%Y') + " ferme à " + self.to_hour.strftime('%H:%M')
        return "Le " + self.from_date.strftime('%d/%m/%Y')


#####################################
#                User               #
#####################################

class User(AbstractUser):
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []

    def has_fridge(self):
        return Fridge.objects.filter(user=self).count() != 0

    def get_reserved_food(self):
        reserved_food = [food for food in Food.objects.all()
                         if food.is_reserve_by_me(self)]
        print(reserved_food)
        return [food for food in Food.objects.all() if food.is_reserve_by_me(self)]
