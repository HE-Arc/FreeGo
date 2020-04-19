from django import forms
from datetime import datetime, date
from django.core.exceptions import ValidationError

# Constant
DATE_FORMAT = '%b %d, %Y'


class FoodForm(forms.Form):
    '''Food form'''
    name = forms.CharField(max_length=45)
    vegetarian = forms.BooleanField(required=False)
    vegan = forms.BooleanField(required=False)
    expiration_date = forms.CharField(max_length=45)

    def clean(self):
        cleaned_data = super().clean()
        expiration_date = cleaned_data.get('expiration_date')
        expiration_date = datetime.strptime(
            expiration_date, DATE_FORMAT)

        if expiration_date.date() < datetime.now().date():
            raise ValidationError("You're expiration date is already passed")


class OpeningHourForm(forms.Form):
    '''Opening hour form'''
    weekday = forms.IntegerField()
    from_hour = forms.TimeField()
    to_hour = forms.TimeField()

    def clean(self):
        cleaned_data = super().clean()
        from_hour = to_hour = None
        from_hour = self.cleaned_data.get('from_hour')
        to_hour = self.cleaned_data.get('to_hour')

        if not (from_hour < to_hour):
            raise ValidationError("You're date arn't correct")


class SpecialDayForm(forms.Form):
    '''Special day form'''
    from_date = forms.CharField(max_length=45)
    to_date = forms.CharField(max_length=45, required=False)
    from_hour = forms.TimeField(required=False)
    to_hour = forms.TimeField(required=False)

    def clean(self):
        cleaned_data = super().clean()
        from_date = datetime.strptime(
            cleaned_data.get('from_date'), DATE_FORMAT)

        from_hour = cleaned_data.get('from_hour')
        to_hour = cleaned_data.get('to_hour')
        to_date = None
        if cleaned_data.get('to_date'):
            to_date = datetime.strptime(
                cleaned_data.get('to_date'), DATE_FORMAT)

        if to_date != None:
            if to_hour != None or from_hour != None:
                raise ValidationError(
                    "If two date are selected, you can't select an hour")
            elif to_date <= from_date:
                raise ValidationError("Invalid date")
        elif from_hour != None and to_hour != None:
            if to_hour <= from_hour:
                raise ValidationError("Invalid hour")