from django import forms
from datetime import datetime, date
from django.core.exceptions import ValidationError
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import Fridge, Food, OpeningHour, SpecialDay, User
from django.core.validators import RegexValidator
from .validators import expiration_date_validator

# Constant
DATE_FORMAT = '%b %d, %Y'


class FridgeForm(forms.ModelForm):
    '''Fridge form'''

    class Meta:
        model = Fridge
        fields = ('name', 'address', 'NPA', 'phone_number', 'image', 'user')
        labels = {
            'name': 'Nom',
            'address': 'Adresse',
            'NPA': 'NPA',
            'phone_number': 'Numéro de téléphones',
            'image': 'Image',
            'user': 'Utilisateur'
        }


class FoodForm(forms.ModelForm):
    '''Food form'''

    class Meta:
        model = Food
        fields = ('name', 'vegetarian', 'vegan', 'expiration_date')
        labels = {
            'name': 'Nom',
            'vegetarian': 'Végétarien',
            'vegan': 'Végan',
            'expiration_date': 'Date d\'expiration'
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
            'weekday': 'Jours de la semaine',
            'from_hour': 'De l\'heure',
            'to_hour': 'À l\'heure'
        }

        widgets = {
            'from_hour': forms.TimeInput(attrs={'class': 'timepicker'}),
            'to_hour': forms.TimeInput(attrs={'class': 'timepicker'})
        }

    def clean(self):
        cleaned_data = super().clean()
        from_hour = to_hour = None
        from_hour = cleaned_data.get('from_hour')
        to_hour = cleaned_data.get('to_hour')

        if not (from_hour < to_hour):
            raise ValidationError("Heure invalide")


class SpecialDayForm(forms.ModelForm):
    '''Special day form'''

    class Meta:
        model = SpecialDay
        fields = ('from_date', 'to_date', 'from_hour', 'to_hour')
        labels = {
            'from_date': 'De la date',
            'to_date': 'À la date',
            'from_hour': 'De l\'heure',
            'to_hour': 'À l\'heure'
        }

        widgets = {
            'from_date': forms.TimeInput(attrs={'class': 'datepicker'}),
            'to_date': forms.TimeInput(attrs={'class': 'datepicker'}),
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

        if to_date != None:
            if to_hour != None or from_hour != None:
                raise ValidationError(
                    "Si deux dates sont sélecionnées, vous ne pouvez pas sélectionner une heure.")
            elif to_date <= from_date:
                raise ValidationError("Date invalide")
        elif from_hour != None and to_hour != None and to_hour <= from_hour:
            raise ValidationError("Heure invalide")


class RegisterForm(UserCreationForm):
    email = forms.EmailField(
        max_length=254, help_text='Requis. Remplissez avec une adresse email valide.')

    class Meta:
        model = User
        fields = ('username', 'email', 'password1', 'password2', )
