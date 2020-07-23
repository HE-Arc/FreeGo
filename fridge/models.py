from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
from django.core.exceptions import ValidationError
from .validators import phone_number_validator, NPA_validator, \
    expiration_date_validator
from PIL import Image
from io import BytesIO
from django.utils.translation import gettext_lazy as _
from django.core.files.uploadedfile import InMemoryUploadedFile
import sys
from geopy.geocoders import Nominatim


def compress_image(uploaded_image):
    '''Return compressed image'''
    tmp_image = Image.open(uploaded_image)
    output_io_stream = BytesIO()
    tmp_image.save(output_io_stream, format='PNG', quality=60)
    output_io_stream.seek(0)
    uploaded_image = InMemoryUploadedFile(
        output_io_stream, 'ImageField', "%s.png" %
        uploaded_image.name.split('.')[
            0], 'image/png', sys.getsizeof(output_io_stream), None)
    return uploaded_image


class Fridge(models.Model):
    '''Fridge model'''
    name = models.CharField(max_length=45)
    address = models.CharField(max_length=45)
    city = models.CharField(max_length=45)
    zip_code = models.CharField(max_length=45, validators=[NPA_validator])
    phone_number = models.CharField(
        max_length=12, validators=[phone_number_validator])
    latitude = models.FloatField()
    longitude = models.FloatField()
    image = models.ImageField(upload_to='images/')
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE,
        null=True, blank=True)
    is_active = models.BooleanField(default=False)

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

    def get_reserved_food_by_me(self, current_user):
        return [food for food in Food.objects.filter(fridge=self)
                if food.is_reserved_by_me(current_user) is True]

    def is_favorite(self, user):
        return FridgeFollowing.objects.filter(user=user) \
            .filter(fridge=self).count() != 0

    def get_longitude_latitude(self):
        geolocator = Nominatim(user_agent="freego")
        address = "{}, {} {}".format(self.address, self.zip_code, self.city)
        location = geolocator.geocode(address)
        return location.longitude, location.latitude

    def save(self, *args, **kwargs):
        geolocator = Nominatim(user_agent=self.name)
        address = "{}, {} {}".format(self.address, self.zip_code, self.city)
        location = geolocator.geocode(address)
        if not location:
            raise ValidationError(_("Invalid address"))
        self.latitude = location.latitude
        self.longitude = location.longitude
        self.image = compress_image(self.image)
        super().save(*args, **kwargs)


class Food(models.Model):
    '''Food model'''
    name = models.CharField(max_length=45)
    description = models.CharField(max_length=200, null=True, blank=True)
    vegetarian = models.BooleanField()
    vegan = models.BooleanField()
    halal = models.BooleanField()
    lactose_free = models.BooleanField()
    gluten_free = models.BooleanField()
    bio = models.BooleanField()
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

    def save(self, *args, **kwargs):
        self.image = compress_image(self.image)
        super().save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        self.image.delete(save=False)
        super().delete(*args, **kwargs)


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
    (0, _("Monday")),
    (1, _("Tuesday")),
    (2, _("Wednesday")),
    (3, _("Thursday")),
    (4, _("Friday")),
    (5, _("Saturday")),
    (6, _("Sunday")),
]


class OpeningHour(models.Model):
    '''OpeningHour model'''
    weekday = models.PositiveSmallIntegerField(
        choices=WEEKDAYS, default=0)
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
    description = models.CharField(max_length=200)
    is_open = models.BooleanField(default=False)
    from_date = models.DateField()
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
        sd = _("%(description)s : %(is_open)s ") % {
            'description': self.description, 'is_open': "open" if self.is_open == True else "closed"}
        if self.to_date:
            return sd + _("from %(from_date)s to %(to_date)s") % \
                {'from_date': self.from_date.strftime('%d/%m/%Y'),
                 'to_date': self.to_date.strftime('%d/%m/%Y')}
        elif self.from_hour and self.to_hour:
            return sd + _("the %(from_date)s open from %(from_hour)s to %(to_hour)s") % \
                {'from_date': self.from_date.strftime('%d/%m/%Y'),
                 'from_hour': self.from_hour.strftime('%H:%M'),
                 'to_hour':  self.to_hour.strftime('%H:%M')}
        elif self.from_hour:
            return sd + _("the %(from_date)s open from %(from_hour)s") % \
                {'from_date': self.from_date.strftime('%d/%m/%Y'),
                 'from_hour': self.from_hour.strftime('%H:%M')}
        elif self.to_hour:
            return sd + _("the %(from_date)s closed at %(to_hour)s") % \
                {'from_date': self.from_date.strftime('%d/%m/%Y'),
                 'to_hour': self.to_hour.strftime('%H:%M')}
        return sd + _("The %(from_date)s") % \
            {'from_date': self.from_date.strftime('%d/%m/%Y')}


class User(AbstractUser):
    '''User model'''
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []
    email = models.EmailField(unique=True)

    def has_fridge(self):
        return Fridge.objects.filter(user=self).count() != 0

    def get_reserved_food(self):
        return [food for food in Food.objects.all()
                if food.is_reserved_by_me(self)]


class FridgeFollowing(models.Model):
    '''FridgeFollowing model'''
    fridge = models.ForeignKey(
        Fridge, on_delete=models.CASCADE)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE)


class ReportContent(models.Model):
    '''ReportContent model'''
    food = models.ForeignKey(
        Food, on_delete=models.CASCADE)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE)


class Sponsor(models.Model):
    '''Sponsor model'''
    name = models.CharField(max_length=45)
    logo = models.ImageField(upload_to='images/')
    website = models.URLField(max_length=200, null=True, blank=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        self.logo = compress_image(self.logo)
        super().save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        self.logo.delete(save=False)
        super().delete(*args, **kwargs)


class Inventory(models.Model):
    '''Inventory class for inventory sheet'''
    date = models.DateField()
    product_name = models.CharField(max_length=45)
    product_number = models.IntegerField()
    temperature = models.FloatField()
    visa = models.CharField(max_length=45)
    fridge = models.ForeignKey(
        Fridge, on_delete=models.CASCADE)

    def __str__(self):
        return self.product_name


class TemperatureControl(models.Model):
    '''TemperatureControl model'''
    date = models.DateField()
    temperature = models.FloatField()
    visa = models.CharField(max_length=45)
    fridge = models.ForeignKey(
        Fridge, on_delete=models.CASCADE)
