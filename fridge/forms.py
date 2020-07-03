from django import forms
from django.core.exceptions import ValidationError
from django.contrib.auth.forms import UserCreationForm
from .models import Fridge, Food, OpeningHour, SpecialDay, User
from .validators import expiration_date_validator

from django.utils.translation import gettext_lazy as _
from geopy.geocoders import Nominatim

# Constant
DATE_FORMAT = '%b %d, %Y'


class FridgeForm(forms.ModelForm):
    '''Fridge form'''

    class Meta:
        model = Fridge
        fields = ('name', 'address', 'NPA', 'city',
                  'phone_number', 'image', 'user')
        labels = {
            'name': _('Name'),
            'address': _('Address'),
            'NPA': _('NPA'),
            'city': _('City'),
            'phone_number': _('Phone number'),
            'image': _('Image'),
            'user': _('User')
        }

    def clean(self):
        cleaned_data = super().clean()
        name = cleaned_data.get('name')
        address = cleaned_data.get('address')
        NPA = cleaned_data.get('NPA')
        city = cleaned_data.get('city')
        address = "{}, {} {}".format(address, NPA, city)
        geolocator = Nominatim(user_agent=name)
        location = geolocator.geocode(address)
        if not location:
            raise ValidationError(_("Invalid address"))


class FoodForm(forms.ModelForm):
    '''Food form'''

    class Meta:
        model = Food
        fields = ('name', 'vegetarian', 'vegan', 'expiration_date', 'image')
        labels = {
            'name': _('Name'),
            'vegetarian': _('Vegetarian'),
            'vegan': _('Vegan'),
            'expiration_date': _('Expiration date'),
            'image': _('Image'),
        }

        validators = {
            'expiration_date': [expiration_date_validator]
        }

        widgets = {
            'expiration_date': forms.DateInput(attrs={'class': 'datepicker'})
        }


class OpeningHourForm(forms.ModelForm):
    '''Opening hour form'''
    class Meta:
        model = OpeningHour
        fields = ('weekday', 'from_hour', 'to_hour')
        labels = {
            'weekday': _('Week day'),
            'from_hour': _('From hour'),
            'to_hour': _('To hour')
        }

        widgets = {
            'from_hour': forms.TimeInput(attrs={'class': 'timepicker'}),
            'to_hour': forms.TimeInput(attrs={'class': 'timepicker'})
        }

    def clean(self):
        cleaned_data = super().clean()
        print("TEEEEESSSSSSSSSTTTTTTTTTTT")
        print(cleaned_data)
        from_hour = to_hour = None
        from_hour = cleaned_data.get('from_hour')
        to_hour = cleaned_data.get('to_hour')

        if not (from_hour < to_hour):
            raise ValidationError(_("Invalid hour"))


class SpecialDayForm(forms.ModelForm):
    '''Special day form'''

    class Meta:
        model = SpecialDay
        fields = ('from_date', 'to_date', 'from_hour', 'to_hour')
        labels = {
            'from_date': _('From date'),
            'to_date': _('To date'),
            'from_hour': _('From hour'),
            'to_hour': _('To hour')
        }

        widgets = {
            'from_date': forms.DateInput(attrs={'class': 'datepicker'}),
            'to_date': forms.DateInput(attrs={'class': 'datepicker'}),
            'from_hour': forms.TimeInput(attrs={'class': 'timepicker'}),
            'to_hour': forms.TimeInput(attrs={'class': 'timepicker'})
        }

        required = {
            'to_date': False,
            'from_hour': False,
            'to_hour': False
        }

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
    email = forms.EmailField(
        max_length=254, help_text=_('Required. Fill an valid email address.'))

    class Meta:
        model = User
        fields = ('username', 'email', 'password1', 'password2', )
