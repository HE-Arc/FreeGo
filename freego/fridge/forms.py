from django import forms

class FoodForm(forms.Form):
    '''Food form'''
    name = forms.CharField(max_length=45)
    vegetarian = forms.BooleanField(required=False)
    vegan = forms.BooleanField(required=False)
    expiration_date = forms.CharField(max_length=45)