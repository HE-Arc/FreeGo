from django import forms
from datetime import datetime, date


class FoodForm(forms.Form):
    '''Food form'''
    name = forms.CharField(max_length=45)
    vegetarian = forms.BooleanField(required=False)
    vegan = forms.BooleanField(required=False)
    expiration_date = forms.CharField(max_length=45)

    def date_validation(self):
        expiration_date = datetime.strptime(
            self.cleaned_data['expiration_date'], '%b %d, %Y')
        if expiration_date < datetime.now():
            return False
        else:
            return True


class OpeningHourForm(forms.Form):
    '''Opening hour form'''
    weekday = forms.IntegerField()
    from_hour = forms.TimeField()
    to_hour = forms.TimeField()

    def date_validation(self):
        from_hour = self.cleaned_data['from_hour']
        to_hour = self.cleaned_data['to_hour']
        if from_hour < to_hour:
            return True
        else:
            return False


class SpecialDayForm(forms.Form):
    '''Special day form'''
    from_date = forms.CharField(max_length=45)
    to_date = forms.CharField(max_length=45, required=False)
    from_hour = forms.TimeField(required=False)
    to_hour = forms.TimeField(required=False)

    def date_validation(self):
        from_date = datetime.strptime(
            self.cleaned_data['from_date'], '%b %d, %Y')
        to_date = datetime.strptime(
            self.cleaned_data['to_date'], '%b %d, %Y')
        from_hour = self.cleaned_data['from_hour']
        to_hour = self.cleaned_data['to_hour']

        if to_date != None and (to_hour != None or from_hour != None):
            return False
        if to_date != None and from_date >= to_date:
            return False
        elif from_hour != None and to_hour != None and from_hour >= to_hour:
            return False
        return True
