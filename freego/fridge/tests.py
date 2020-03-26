from django.test import TestCase

from .models import Fridge, Food, OpeningHour, SpecialDay, WEEKDAYS
from django.contrib.auth.models import User
from datetime import time, date
from django.core.exceptions import ValidationError


class OpeningHourModelTests(TestCase):
    def setUp(self):
        user = User.objects.create_user('gael', 'gael@gael.com', 'gael')
        Fridge.objects.create(name="monfridge", address="address",
                              NPA="2504", phone_number="0790000000", user=user)

    def test_to_hour_before_from_hour(self):
        """
        to_hour < from_hour : raise ValidationError exception
        """

        fridge = Fridge.objects.get(name='monfridge')

        to_hour = time(12, 0, 0)
        from_hour = time(16, 0, 0)
        oh = OpeningHour(weekday=1, from_hour=from_hour,
                         to_hour=to_hour, fridge=fridge)

        with self.assertRaises(ValidationError):
            oh.save()

    def test_from_hour_before_to_hour(self):
        """
        from_hour < to_hour : dont raise exception
        """
        fridge = Fridge.objects.get(name='monfridge')

        from_hour = time(12, 0, 0)
        to_hour = time(16, 0, 0)
        oh = OpeningHour(weekday=1, from_hour=from_hour,
                         to_hour=to_hour, fridge=fridge)

        oh.save()
        self.assertIsNotNone(oh)

    def test_to_hour_equal_from_hour(self):
        """
        to_hour == from_hour : raise ValidationError exception
        """
        fridge = Fridge.objects.get(name='monfridge')

        from_hour = time(12, 0, 0)
        to_hour = time(12, 0, 0)
        oh = OpeningHour(weekday=1, from_hour=from_hour,
                         to_hour=to_hour, fridge=fridge)

        with self.assertRaises(ValidationError):
            oh.save()


class SpecialDayModelTests(TestCase):
    def setUp(self):
        user = User.objects.create_user('gael', 'gael@gael.com', 'gael')
        Fridge.objects.create(name="monfridge", address="address",
                              NPA="2504", phone_number="0790000000", user=user)

    def test_to_hour_before_from_hour(self):
        """
        to_hour < from_hour : raise ValidationError exception
        """
        fridge = Fridge.objects.get(name='monfridge')

        from_hour = time(16, 0, 0)
        to_hour = time(12, 0, 0)
        sd = SpecialDay(from_hour=from_hour,
                        to_hour=to_hour, fridge=fridge)

        with self.assertRaises(ValidationError):
            sd.save()

    def test_to_hour_equal_from_hour(self):
        """
        to_hour = from_hour : raise ValidationError exception
        """
        fridge = Fridge.objects.get(name='monfridge')

        from_hour = time(12, 0, 0)
        to_hour = time(12, 0, 0)
        sd = SpecialDay(from_hour=from_hour,
                        to_hour=to_hour, fridge=fridge)

        with self.assertRaises(ValidationError):
            sd.save()

    def test_to_date_before_from_date(self):
        """
        to_date < from_date : raise ValidationError exception
        """
        fridge = Fridge.objects.get(name='monfridge')

        from_date = date(2020, 5, 10)
        to_date = date(2020, 5, 5)
        sd = SpecialDay(from_date=from_date,
                        to_date=to_date, fridge=fridge)

        with self.assertRaises(ValidationError):
            sd.save()

    def test_to_date_equal_from_date(self):
        """
        to_date < from_date : raise ValidationError exception
        """
        fridge = Fridge.objects.get(name='monfridge')

        from_date = date(2020, 5, 10)
        to_date = date(2020, 5, 10)
        sd = SpecialDay(from_date=from_date,
                        to_date=to_date, fridge=fridge)

        with self.assertRaises(ValidationError):
            sd.save()

    def test_date_and_time(self):
        """
        if two date are selected, you can't select hour
        """

        fridge = Fridge.objects.get(name='monfridge')

        from_date = date(2020, 5, 10)
        to_date = date(2020, 5, 15)
        from_hour = time(5, 5, 5)
        sd = SpecialDay(from_date=from_date,
                        to_date=to_date, fridge=fridge, from_hour=from_hour)

        with self.assertRaises(ValidationError):
            sd.save()

    def test_invalid_argument(self):
        """
        if two date are selected, you can't select an hour
        """

        fridge = Fridge.objects.get(name='monfridge')

        to_date = date(2020, 5, 15)
        from_hour = time(5, 5, 5)
        sd = SpecialDay(to_date=to_date, fridge=fridge, from_hour=from_hour)

        with self.assertRaises(ValidationError):
            sd.save()