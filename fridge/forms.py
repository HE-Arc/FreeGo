from django import forms
from django.core.exceptions import ValidationError
from django.contrib.auth.forms import UserCreationForm
from .models import Fridge, Food, OpeningHour, SpecialDay, User, Sponsor, \
    Inventory, TemperatureControl, FridgeContentImage
from .validators import expiration_date_validator

from django.utils.translation import gettext_lazy as _
from geopy.geocoders import Nominatim

# Constant
DATE_FORMAT = '%b %d, %Y'


class DateInput(forms.DateInput):
    input_type = 'date'


class TimeInput(forms.TimeInput):
    input_type = 'time'
    input_formats = ['%H:%M'],


class FridgeDemandForm(forms.ModelForm):
    '''Fridge Demand form'''
    has_address = forms.BooleanField(
        label=_('As valid address'), required=False)

    class Meta:
        model = Fridge
        fields = ('name', 'address', 'zip_code', 'city',
                  'phone_number', 'image', 'latitude', 'longitude')
        labels = {
            'name': _('Name') + "*",
            'address': _('Address') + "*",
            'zip_code': _('Zip code') + "*",
            'city': _('City') + "*",
            'phone_number': _('Phone number') + "*",
            'image': _('Image') + "*",
            'latitude': _('Latitude'),
            'longitude': _('Longitude')
        }

        required = {
            'latitude': False,
            'longitude': False
        }

    field_order = ['name', 'address', 'zip_code', 'city', 'phone_number',
                   'image', 'has_address', 'latitude', 'longitude']

    def clean(self):
        cleaned_data = super().clean()
        name = cleaned_data.get('name')
        address = cleaned_data.get('address')
        zip_code = cleaned_data.get('zip_code')
        city = cleaned_data.get('city')
        address = "{}, {} {}".format(address, zip_code, city)
        geolocator = Nominatim(user_agent=name)
        location = geolocator.geocode(address)
        if not location:
            raise ValidationError(_("Invalid address"))


class FridgeForm(forms.ModelForm):
    '''Fridge form'''
    has_address = forms.BooleanField(
        label=_('As valid address'), required=False)

    class Meta:
        model = Fridge
        fields = ('name', 'address', 'zip_code', 'city',
                  'phone_number', 'image', 'user', 'latitude', 'longitude')
        labels = {
            'name': _('Name') + "*",
            'address': _('Address') + "*",
            'zip_code': _('Zip code') + "*",
            'city': _('City') + "*",
            'phone_number': _('Phone number') + "*",
            'image': _('Image') + "*",
            'user': _('User') + "*",
            'latitude': _('Latitude'),
            'longitude': _('Longitude')
        }

        required = {
            'latitude': False,
            'longitude': False
        }
    field_order = ['name', 'address', 'zip_code', 'city', 'phone_number',
                   'image', 'user', 'has_address', 'latitude', 'longitude']

    def clean(self):
        cleaned_data = super().clean()
        if not cleaned_data.get('has_address'):
            name = cleaned_data.get('name')
            address = cleaned_data.get('address')
            zip_code = cleaned_data.get('zip_code')
            city = cleaned_data.get('city')
            address = "{}, {} {}".format(address, zip_code, city)
            geolocator = Nominatim(user_agent=name)
            location = geolocator.geocode(address)
            if not location:
                raise ValidationError(_("Invalid address"))
        else:
            if cleaned_data.get('latitude') and \
                    not cleaned_data.get('longitude'):
                raise ValidationError(
                    _("You must have latitude AND longitude"))
            elif not cleaned_data.get('latitude') and \
                    cleaned_data.get('longitude'):
                raise ValidationError(
                    _("You must have latitude AND longitude"))
            elif not cleaned_data.get('latitude') and \
                    not cleaned_data.get('longitude'):
                raise ValidationError(
                    _("You must have latitude AND longitude"))

            # cleaned_data.get('latitude') and cleaned_data.get('longitude')


class FridgeUpdateAddressForm(forms.ModelForm):
    '''Fridge form'''

    class Meta:
        model = Fridge
        fields = ('address', 'zip_code', 'city')
        labels = {
            'address': _('Address') + "*",
            'zip_code': _('Zip code') + "*",
            'city': _('City') + "*"
        }

    def clean(self):
        cleaned_data = super().clean()
        address = cleaned_data.get('address')
        zip_code = cleaned_data.get('zip_code')
        city = cleaned_data.get('city')
        address = "{}, {} {}".format(address, zip_code, city)
        geolocator = Nominatim(user_agent='address')
        location = geolocator.geocode(address)
        if not location:
            raise ValidationError(_("Invalid address"))


class FoodForm(forms.ModelForm):
    '''Food form'''

    class Meta:
        model = Food
        fields = ('name', 'description', 'counter', 'vegetarian', 'vegan',
                  'halal', 'lactose_free', 'gluten_free', 'bio',
                  'expiration_date')
        labels = {
            'name': _('Name') + "*",
            'description': _('Description'),
            'counter': _('Counter') + "*",
            'vegetarian': _('Vegetarian'),
            'vegan': _('Vegan'),
            'halal': _('Halal'),
            'lactose_free': _('Lactose free'),
            'gluten_free': _('Gluten free'),
            'bio': _('Bio'),
            'expiration_date': _('Expiration date') + "*",
        }

        validators = {
            'expiration_date': [expiration_date_validator]
        }

        widgets = {
            'expiration_date': DateInput(),
            'description': forms.Textarea(
                attrs={'class': 'materialize-textarea'})
        }


class OpeningHourForm(forms.ModelForm):
    '''Opening hour form'''
    class Meta:
        model = OpeningHour
        fields = ('weekday', 'from_hour', 'to_hour')
        labels = {
            'weekday': _('Week day') + "*",
            'from_hour': _('From hour') + "*",
            'to_hour': _('To hour') + "*"
        }

        widgets = {
            'weekday': forms.Select(attrs={'class': 'browser-default'}),
            'from_hour': TimeInput(),
            'to_hour': TimeInput()
        }

    def clean(self):
        cleaned_data = super().clean()
        from_hour = to_hour = None
        from_hour = cleaned_data.get('from_hour')
        to_hour = cleaned_data.get('to_hour')

        if not (from_hour < to_hour):
            raise ValidationError(_("Invalid hour"))


class SpecialDayForm(forms.ModelForm):
    '''Special day form'''

    class Meta:
        model = SpecialDay
        fields = ('description', 'is_open', 'from_date',
                  'to_date', 'from_hour', 'to_hour')
        labels = {
            'description': _('Description') + "*",
            'is_open': _('Is the Free Go open?'),
            'from_date': _('From date') + "*",
            'to_date': _('To date'),
            'from_hour': _('From hour'),
            'to_hour': _('To hour')
        }

        widgets = {
            'is_open': forms.RadioSelect(),
            'from_date': DateInput(),
            'to_date': DateInput(),
            'from_hour': TimeInput(),
            'to_hour': TimeInput()
        }

        required = {
            'to_date': False,
            'from_hour': False,
            'to_hour': False
        }

    class Media:
        js = ('fridge/js/script.js')

    def clean(self):
        cleaned_data = super().clean()
        from_date = cleaned_data.get('from_date')
        from_hour = cleaned_data.get('from_hour')
        to_hour = cleaned_data.get('to_hour')
        to_date = cleaned_data.get('to_date')

        if to_date is not None:
            if to_hour is not None or from_hour is not None:
                raise ValidationError(
                    _("If two dates are selected, you can't select an hour."))
            elif to_date <= from_date:
                raise ValidationError(_("Invalid date"))
        elif (from_hour is not None and to_hour is not None
              and to_hour <= from_hour):
            raise ValidationError(_("Invalid hour"))


class RegisterForm(UserCreationForm):
    '''Register Form'''
    email = forms.EmailField(
        max_length=254, help_text=_('Required. Fill a valid email address.'))

    class Meta:
        model = User
        fields = ('username', 'email', 'password1', 'password2', )


class ContactForm(forms.Form):
    '''Contact Form'''
    subject = forms.CharField(max_length=45, label=_('Subject'))
    message = forms.CharField(max_length=500, label=_(
        'Message'), widget=forms.Textarea(
            attrs={'class': 'materialize-textarea'}))


class SponsorForm(forms.ModelForm):
    '''Sponsor Form'''
    class Meta:
        model = Sponsor
        fields = ('name', 'logo', 'website')
        labels = {
            'name': _('Name') + "*",
            'logo': _('Logo') + "*",
            'website': _('Website URL')
        }
        required = {
            'website': False
        }


class InventoryForm(forms.ModelForm):
    '''Inventory Sheet Form'''
    class Meta:
        model = Inventory
        fields = ("date", "product_name",
                  "product_number", "temperature", "visa")
        labels = {
            "date": _("Date") + "*",
            "product_name": _("Product name") + "*",
            "product_number": _("Product number") + "*",
            "temperature": _("Temperature") + "*",
            "visa": _("Visa") + "*"
        }
        widgets = {
            'date': DateInput()
        }


class TemperatureControlForm(forms.ModelForm):
    '''Temperature Control Form'''
    class Meta:
        model = TemperatureControl
        fields = ("date", "temperature", "visa")
        labels = {
            "date": _("Date") + "*",
            "temperature": _("Temperature") + "*",
            "visa": _("Visa") + "*"
        }
        widgets = {
            'date': DateInput()
        }


class FridgeContentImageForm(forms.ModelForm):
    '''FridgeContentImage form'''

    class Meta:
        model = FridgeContentImage
        fields = ("image",)
        labels = {
            "image": _("Image") + "*"
        }
