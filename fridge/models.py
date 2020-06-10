from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
from django.core.exceptions import ValidationError
from .validators import phone_number_validator, NPA_validator, \
    expiration_date_validator

from django.utils.translation import gettext_lazy as _


class Fridge(models.Model):
    '''Fridge model'''
    name = models.CharField(max_length=45)
    address = models.CharField(max_length=45)
    NPA = models.CharField(max_length=45, validators=[NPA_validator])
    city = models.CharField(max_length=45)
    phone_number = models.CharField(
        max_length=12, validators=[phone_number_validator])
    image = models.ImageField(upload_to='images/')
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE,
        null=True, blank=True)

    def __str__(self):
        return str(self.name)

    def delete(self, *args, **kwargs):
        self.image.delete(save=False)
        super().delete(*args, **kwargs)

    def get_opening_hours(self):
        return OpeningHour.objects.filter(fridge=self)

    def get_special_days(self):
        return SpecialDay.objects.filter(fridge=self)

    def get_foods(self):
        return Food.objects.filter(fridge=self)

    def get_available_food(self):
        all_reservation = Reservation.objects.values_list('food_id')
        return Food.objects.filter(fridge=self).exclude(id__in=all_reservation)

    def get_reserved_food(self):
        return [food for food in Food.objects.filter(fridge=self)
                if food.is_reserved() is True]

    def is_favorite(self, user):
        return FridgeFollowing.objects.filter(user=user) \
            .filter(fridge=self).count() != 0


class Food(models.Model):
    '''Food model'''
    name = models.CharField(max_length=45)
    vegetarian = models.BooleanField()
    vegan = models.BooleanField()
    expiration_date = models.DateField(validators=[expiration_date_validator])
    image = models.ImageField(
        upload_to='images/', default='default.JPG')
    fridge = models.ForeignKey(
        Fridge, on_delete=models.CASCADE, null=True, blank=True)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE,
        null=True, blank=True)

    def is_reserved(self):
        return Reservation.objects.filter(food=self).count() != 0

    def is_reserved_by_me(self, current_user):
        return Reservation.objects.filter(food=self) \
            .filter(user=current_user).count() != 0

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
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE,
        null=True, blank=True)

    def __str__(self):
        return str(self.title)


class Reservation(models.Model):
    '''Reservation model'''
    food = models.ForeignKey(
        Food, on_delete=models.CASCADE, null=True, blank=True)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE,
        null=True, blank=True)

    def save(self, *args, **kwargs):
        r = Reservation.objects.filter(food=self.food)
        if r and r[0].user == self.user:
            raise ValidationError(_("You can't reserve your own food."))
        super().save(*args, **kwargs)


WEEKDAYS = [
    (1, _("Monday")),
    (2, _("Tuesday")),
    (3, _("Wednesday")),
    (4, _("Thursday")),
    (5, _("Friday")),
    (6, _("Saturday")),
    (7, _("Sunday")),
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
            raise ValidationError(_("Invalid hour"))
        super().save(*args, **kwargs)

    def __str__(self):
        return "{} : {}-{}".format(str(WEEKDAYS[self.weekday][1]),
                                   self.from_hour.strftime('%H:%M'),
                                   self.to_hour.strftime('%H:%M'))


class SpecialDay(models.Model):
    '''SpecialDay model'''
    from_date = models.DateField(null=True, blank=True)
    to_date = models.DateField(null=True, blank=True)
    from_hour = models.TimeField(null=True, blank=True)
    to_hour = models.TimeField(null=True, blank=True)
    fridge = models.ForeignKey(
        'Fridge', on_delete=models.CASCADE, null=True, blank=True)

    def save(self, *args, **kwargs):
        if self.to_date is not None:
            if self.to_hour is not None or self.from_hour is not None:
                raise ValidationError(
                    _("If two dates are selected, you can't select an hour."))
            elif self.to_date <= self.from_date:
                raise ValidationError(_("Invalid date"))
        elif (self.from_hour is not None and self.to_hour is not None and
              self.to_hour <= self.from_hour):
            raise ValidationError(_("Invalid hour"))
        super().save(*args, **kwargs)

    def __str__(self):
        if self.to_date:
            return _("From %(from_date)s to %(to_date)s") % \
                {'from_date': self.from_date.strftime('%d/%m/%Y'),
                 'to_date': self.to_date.strftime('%d/%m/%Y')}
        elif self.from_hour and self.to_hour:
            return _("The %(from_date)s open from %(from_hour)s to %(to_hour)s") % \
                {'from_date': self.from_date.strftime('%d/%m/%Y'),
                 'from_hour': self.from_hour.strftime('%H:%M'),
                 'to_hour':  self.to_hour.strftime('%H:%M')}
        elif self.from_hour:
            return _("The %(from_date)s open from %(from_hour)s") % \
                {'from_date': self.from_date.strftime('%d/%m/%Y'),
                 'from_hour': self.from_hour.strftime('%H:%M')}
        elif self.to_hour:
            return _("The %(from_date)s closed at %(to_hour)s") % \
                {'from_date': self.from_date.strftime('%d/%m/%Y'),
                 'to_hour': self.to_hour.strftime('%H:%M')}
        return _("The %(from_date)s") % \
            {'from_date': self.from_date.strftime('%d/%m/%Y')}


class User(AbstractUser):
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []

    def has_fridge(self):
        return Fridge.objects.filter(user=self).count() != 0

    def get_reserved_food(self):
        return [food for food in Food.objects.all()
                if food.is_reserved_by_me(self)]


class FridgeFollowing(models.Model):
    '''FridgeFollowing class'''
    fridge = models.ForeignKey(
        Fridge, on_delete=models.CASCADE)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
