from django.test import TestCase

from fridge.forms import FoodForm, OpeningHourForm, SpecialDayForm
from datetime import time, date

from fridge.tests.test_common import passed_date


class FoodFormTest(TestCase):
    def test_valid_date(self):
        form_data = {'name': 'a name', 'vegetarian': True,
                     'vegan': False, 'expiration_date': date.today()}
        form = FoodForm(data=form_data)
        self.assertTrue(form.is_valid())

    def test_invalid_date(self):
        form_data = {'name': 'a name', 'vegetarian': True,
                     'vegan': False, 'expiration_date': passed_date()}
        form = FoodForm(data=form_data)
        self.assertFalse(form.is_valid())


class OpeningHourFormTest(TestCase):
    def test_valid_hour(self):
        from_hour = time(5, 5, 5)
        to_hour = time(12, 8, 20)

        form_data = {'weekday': 1, 'from_hour': from_hour,
                     'to_hour': to_hour}
        form = OpeningHourForm(data=form_data)
        self.assertTrue(form.is_valid())

    def test_invalid_hour(self):
        to_hour = time(5, 5, 5)
        from_hour = time(12, 8, 20)

        form_data = {'weekday': 1, 'from_hour': from_hour,
                     'to_hour': to_hour}
        form = OpeningHourForm(data=form_data)
        self.assertFalse(form.is_valid())


class SpecialDayFormTest(TestCase):
    def test_valid_hour(self):
        from_hour = time(5, 5, 5)
        to_hour = time(12, 8, 20)

        from_date = passed_date()

        form_data = {'from_date': from_date,
                     'from_hour': from_hour, 'to_hour': to_hour}
        form = SpecialDayForm(data=form_data)
        self.assertTrue(form.is_valid())

    def test_valid_date(self):
        from_date = passed_date()
        to_date = date.today()

        form_data = {'from_date': from_date, 'to_date': to_date}
        form = SpecialDayForm(data=form_data)
        self.assertTrue(form.is_valid())

    def test_invalid_argument(self):
        from_hour = time(5, 5, 5)
        to_hour = time(12, 8, 20)

        from_date = passed_date()
        to_date = date.today()

        form_data = {'from_date': from_date, 'to_date': to_date,
                     'from_hour': from_hour, 'to_hour': to_hour}
        form = SpecialDayForm(data=form_data)
        self.assertFalse(form.is_valid())
