from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
from django.core.exceptions import ValidationError
from .validators import phone_number_validator, NPA_validator, \
    expiration_date_validator, latitude_longitude_validators
from PIL import Image
from io import BytesIO
from django.utils.translation import gettext_lazy as _
from django.core.files.uploadedfile import InMemoryUploadedFile
import sys
from geopy.geocoders import Nominatim


def compress_image(uploaded_image, width):
    """
    Return compressed image
    """
    tmp_image = Image.open(uploaded_image)
    output_io_stream = BytesIO()
    old_size = tmp_image.size
    new_width = width
    new_height = int(old_size[1]/(old_size[0]/new_width))
    tmp_image = tmp_image.resize((new_width, new_height))
    tmp_image.save(output_io_stream, format='PNG')

    output_io_stream.seek(0)
    uploaded_image = InMemoryUploadedFile(
        output_io_stream, 'ImageField', "%s.png" %
        uploaded_image.name.split('.')[
            0], 'image/png', sys.getsizeof(output_io_stream), None)
    return uploaded_image


WEEKDAYS = [
    (0, _("Monday")),
    (1, _("Tuesday")),
    (2, _("Wednesday")),
    (3, _("Thursday")),
    (4, _("Friday")),
    (5, _("Saturday")),
    (6, _("Sunday")),
]

IS_OPEN = [
    (0, _("Opened")),
    (1, _("Closed"))
]


class Fridge(models.Model):
    """
    Fridge model
    """
    name = models.CharField(max_length=45)
    address = models.CharField(max_length=45)
    city = models.CharField(max_length=45)
    zip_code = models.CharField(max_length=45, validators=[NPA_validator])
    phone_number = models.CharField(
        max_length=12, validators=[phone_number_validator])
    latitude = models.FloatField(blank=True, validators=[
                                 latitude_longitude_validators])
    longitude = models.FloatField(blank=True, validators=[
                                  latitude_longitude_validators])
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
        """
        Return opening hours
        """
        return OpeningHour.objects.filter(fridge=self)

    def get_special_days(self):
        """
        Return special days
        """
        return SpecialDay.objects.filter(fridge=self)

    def get_available_food(self):
        """
        Return unreserved food
        """
        all_reservation = [
            r.food.pk for r in Reservation.objects.all()
            if r.quantity == r.food.counter]
        return Food.objects.filter(fridge=self).exclude(id__in=all_reservation)

    def get_reserved_food(self):
        """
        Return reserved food
        """
        return [food for food in Food.objects.filter(fridge=self)
                if food.is_reserved() is True]

    def get_reserved_food_by_me(self, current_user):
        """
        Return food reserved by user give in argument
        """
        return [food for food in Food.objects.filter(fridge=self)
                if food.is_reserved_by_me(current_user) is True]

    def is_favorite(self, user):
        """
        Return true if user has fridge in is favorite.
        """
        return FridgeFollowing.objects.filter(user=user) \
            .filter(fridge=self).count() != 0

    def get_longitude_latitude(self):
        """
        Return longitude and latitude from the adresses.
        """
        geolocator = Nominatim(user_agent="freego")
        address = "{}, {} {}".format(self.address, self.zip_code, self.city)
        location = geolocator.geocode(address)
        return location.longitude, location.latitude

    def has_content_image(self):
        """
        Check if fridge has content image
        """
        return FridgeContentImage.objects.filter(fridge=self).count() != 0

    def save(self, *args, **kwargs):
        if self.latitude and self.longitude:
            super().save(*args, **kwargs)
        else:
            geolocator = Nominatim(user_agent=self.name)
            address = "{}, {} {}".format(
                self.address, self.zip_code, self.city)
            location = geolocator.geocode(address)
            if not location:
                raise ValidationError(_("Invalid address"))
            self.latitude = location.latitude
            self.longitude = location.longitude
            self.image = compress_image(self.image, 600)
            super().save(*args, **kwargs)


class Food(models.Model):
    """
    Food model
    """
    name = models.CharField(max_length=45)
    description = models.CharField(max_length=200, null=True, blank=True)
    counter = models.PositiveIntegerField()
    vegetarian = models.BooleanField()
    vegan = models.BooleanField()
    halal = models.BooleanField()
    lactose_free = models.BooleanField()
    gluten_free = models.BooleanField()
    bio = models.BooleanField()
    expiration_date = models.DateField(validators=[expiration_date_validator])
    fridge = models.ForeignKey(
        Fridge, on_delete=models.CASCADE, null=True, blank=True)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE,
        null=True, blank=True)

    def is_reserved(self):
        """
        Check if food is reserved.
        """
        return Reservation.objects.filter(food=self).count() != 0

    def is_reserved_by_me(self, current_user):
        """
        Check if food is reserved by user give in argument
        """
        return Reservation.objects.filter(food=self) \
            .filter(user=current_user).count() != 0

    def has_reservation(self):
        """
        Check if food is reserved by user
        """
        # TODO check if method is used
        return Reservation.objects.filter(
            user=self.user, food=self).count() != 0

    def quantity_available(self):
        """
        Get quantity of food available.
        """
        quantity_available = self.counter - sum(
            map(lambda r: r.quantity,
                list(Reservation.objects.filter(food=self))))
        quantity_available = min(4, quantity_available)
        return range(1, quantity_available + 1)

    def quantity_reserved_by_user(self, user):
        """
        Get quantity reserved by user give in argument.
        """
        return Reservation.objects.filter(user=user, food=self).count()

    def __str__(self):
        return str(self.name)


class Reservation(models.Model):
    """
    Reservation model
    """
    food = models.ForeignKey(
        Food, on_delete=models.CASCADE, null=True, blank=True)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE,
        null=True, blank=True)
    quantity = models.PositiveIntegerField()

    def save(self, *args, **kwargs):
        if self.food.counter < int(self.quantity):
            raise ValidationError(_("Not enough food available"))
        if int(self.quantity) > 4:
            raise ValidationError(_("You can't reserve more than for food"))
        super().save(*args, **kwargs)


class OpeningHour(models.Model):
    """
    OpeningHour model
    """
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
        return "{}: {}-{}".format(str(WEEKDAYS[self.weekday][1]),
                                  self.from_hour.strftime('%H:%M'),
                                  self.to_hour.strftime('%H:%M'))


class SpecialDay(models.Model):
    """
    SpecialDay model
    """
    description = models.CharField(max_length=200)
    is_open = models.PositiveSmallIntegerField(
        choices=IS_OPEN, default=0)
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
        sd = _("%(description)s: %(is_open)s ") % {
            'description': self.description, 'is_open': _("open")
            if self.is_open is True else _("closed")}
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
    """
    User model
    """
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []
    email = models.EmailField(unique=True)
    email_confirmed = models.BooleanField(default=False)

    def has_fridge(self):
        """
        Check if user has fridge
        """
        return Fridge.objects.filter(user=self).count() != 0

    def get_reserved_food(self):
        """
        Get food reserved by user.
        """
        return [food for food in Food.objects.all()
                if food.is_reserved_by_me(self)]


class FridgeFollowing(models.Model):
    """
    FridgeFollowing model
    """
    fridge = models.ForeignKey(
        Fridge, on_delete=models.CASCADE)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE)


class FridgeContentImage(models.Model):
    """
    FridgeContentImage model
    """
    fridge = models.ForeignKey(
        Fridge, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='images/')

    def save(self, *args, **kwargs):
        self.image = compress_image(self.image, 600)
        super().save(*args, **kwargs)


class ReportContent(models.Model):
    """
    ReportContent model
    """
    food = models.ForeignKey(
        Food, on_delete=models.CASCADE)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE)


class Sponsor(models.Model):
    """
    Sponsor model
    """
    name = models.CharField(max_length=45)
    logo = models.ImageField(upload_to='images/')
    website = models.URLField(max_length=200, null=True, blank=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        self.logo = compress_image(self.logo, 600)
        super().save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        self.logo.delete(save=False)
        super().delete(*args, **kwargs)


class Inventory(models.Model):
    """
    Inventory class for inventory sheet
    """
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
    """
    TemperatureControl model
    """
    date = models.DateField()
    temperature = models.FloatField()
    visa = models.CharField(max_length=45)
    fridge = models.ForeignKey(
        Fridge, on_delete=models.CASCADE)
