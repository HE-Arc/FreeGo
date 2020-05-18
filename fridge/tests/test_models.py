from django.test import TestCase

from fridge.models import Fridge, OpeningHour, SpecialDay, Reservation
from datetime import time, date
from django.core.exceptions import ValidationError

from fridge.tests.test_common import create_user, create_fridge, create_food


class FridgeModelTest(TestCase):
    def setUp(self):
        self.user = create_user("gael")
        self.fridge = create_fridge("MonFreeGo", self.user)

    def test_delete(self):
        self.assertEqual(Fridge.objects.count(), 1)
        self.fridge.delete()
        self.assertEqual(Fridge.objects.count(), 0)
        # TODO check image is correctly delete in media/images

    def test_get_opening_hours(self):
        from_hour = time(12, 0, 0)
        to_hour = time(16, 0, 0)
        oh1 = OpeningHour(weekday=1, from_hour=from_hour,
                          to_hour=to_hour, fridge=self.fridge)
        oh1.save()
        oh2 = OpeningHour(weekday=2, from_hour=from_hour,
                          to_hour=to_hour, fridge=self.fridge)
        oh2.save()
        oh3 = OpeningHour(weekday=3, from_hour=from_hour,
                          to_hour=to_hour, fridge=self.fridge)
        oh3.save()

        self.assertEqual(self.fridge.get_opening_hours().count(), 3)

    def test_get_special_day(self):
        from_date1 = date(2020, 5, 10)
        sd1 = SpecialDay(from_date=from_date1, fridge=self.fridge)
        sd1.save()
        from_date2 = date(2020, 6, 15)
        sd2 = SpecialDay(from_date=from_date2, fridge=self.fridge)
        sd2.save()

        self.assertEqual(self.fridge.get_special_days().count(), 2)

    def test_get_foods(self):
        create_food("Banane", self.fridge, self.user)
        self.assertEqual(self.fridge.get_foods().count(), 1)

    def test_available_and_reserved_food(self):
        food = create_food("Banane", self.fridge, self.user)
        self.assertEqual(self.fridge.get_available_food().count(), 1)

        reservation = Reservation(food=food, user=self.user)
        reservation.save()

        self.assertEqual(self.fridge.get_available_food().count(), 0)
        self.assertEqual(len(self.fridge.get_reserved_food(self.user)), 1)


class FoodModel(TestCase):
    def setUp(self):
        self.user = create_user("gael")
        self.another_user = create_user("test")
        fridge = create_fridge("MonFreeGo", self.user)
        self.food = create_food("Banane", fridge, self.user)

    def test_is_reserved_by_me(self):
        reservation = Reservation(food=self.food, user=self.user)
        reservation.save()

        self.assertEqual(self.food.is_reserved_by_me(self.user), True)
        self.assertEqual(self.food.is_reserved_by_me(self.another_user), False)

    def test_is_available(self):
        self.assertEqual(self.food.is_available(), True)
        reservation = Reservation(food=self.food, user=self.user)
        reservation.save()
        self.assertEqual(self.food.is_available(), False)


class OpeningHourModelTests(TestCase):
    def setUp(self):
        user = create_user("gael")
        self.fridge = create_fridge("MonFreeGo", user)

    def test_to_hour_before_from_hour(self):
        """
        to_hour < from_hour : raise ValidationError exception
        """

        to_hour = time(12, 0, 0)
        from_hour = time(16, 0, 0)
        oh = OpeningHour(weekday=1, from_hour=from_hour,
                         to_hour=to_hour, fridge=self.fridge)

        with self.assertRaises(ValidationError):
            oh.save()

    def test_from_hour_before_to_hour(self):
        """
        from_hour < to_hour : dont raise exception
        """

        from_hour = time(12, 0, 0)
        to_hour = time(16, 0, 0)
        oh = OpeningHour(weekday=1, from_hour=from_hour,
                         to_hour=to_hour, fridge=self.fridge)

        oh.save()
        self.assertIsNotNone(oh)
        self.assertEqual(len(OpeningHour.objects.all()), 1)

    def test_to_hour_equal_from_hour(self):
        """
        to_hour == from_hour : raise ValidationError exception
        """
        from_hour = time(12, 0, 0)
        to_hour = time(12, 0, 0)
        oh = OpeningHour(weekday=1, from_hour=from_hour,
                         to_hour=to_hour, fridge=self.fridge)

        with self.assertRaises(ValidationError):
            oh.save()


class SpecialDayModelTests(TestCase):
    def setUp(self):
        user = create_user("gael")
        self.fridge = create_fridge("MonFreeGo", user)

    def test_to_hour_before_from_hour(self):
        """
        to_hour < from_hour : raise ValidationError exception
        """
        from_hour = time(16, 0, 0)
        to_hour = time(12, 0, 0)
        sd = SpecialDay(from_hour=from_hour,
                        to_hour=to_hour, fridge=self.fridge)

        with self.assertRaises(ValidationError):
            sd.save()

    def test_to_hour_equal_from_hour(self):
        """
        to_hour = from_hour : raise ValidationError exception
        """
        from_hour = time(12, 0, 0)
        to_hour = time(12, 0, 0)
        sd = SpecialDay(from_hour=from_hour,
                        to_hour=to_hour, fridge=self.fridge)

        with self.assertRaises(ValidationError):
            sd.save()

    def test_to_date_before_from_date(self):
        """
        to_date < from_date : raise ValidationError exception
        """
        from_date = date(2020, 5, 10)
        to_date = date(2020, 5, 5)
        sd = SpecialDay(from_date=from_date,
                        to_date=to_date, fridge=self.fridge)

        with self.assertRaises(ValidationError):
            sd.save()

    def test_to_date_equal_from_date(self):
        """
        to_date < from_date : raise ValidationError exception
        """
        from_date = date(2020, 5, 10)
        to_date = date(2020, 5, 10)
        sd = SpecialDay(from_date=from_date,
                        to_date=to_date, fridge=self.fridge)

        with self.assertRaises(ValidationError):
            sd.save()

    def test_date_and_time(self):
        """
        if two date are selected, you can't select hour
        """
        from_date = date(2020, 5, 10)
        to_date = date(2020, 5, 15)
        from_hour = time(5, 5, 5)
        sd = SpecialDay(from_date=from_date,
                        to_date=to_date, fridge=self.fridge, from_hour=from_hour)

        with self.assertRaises(ValidationError):
            sd.save()

    def test_invalid_argument(self):
        """
        missing from_date
        """
        to_date = date(2020, 5, 15)
        from_hour = time(5, 5, 5)
        sd = SpecialDay(to_date=to_date, fridge=self.fridge,
                        from_hour=from_hour)

        with self.assertRaises(ValidationError):
            sd.save()

    def test_from_date(self):
        from_date = date(2020, 5, 10)
        sd = SpecialDay(from_date=from_date, fridge=self.fridge)
        sd.save()

        self.assertIsNotNone(sd)
        self.assertEqual(len(SpecialDay.objects.all()), 1)

    def test_from_date_to_date(self):
        from_date = date(2020, 5, 10)
        to_date = date(2020, 6, 8)
        sd = SpecialDay(from_date=from_date,
                        to_date=to_date, fridge=self.fridge)
        sd.save()

        self.assertIsNotNone(sd)
        self.assertEqual(len(SpecialDay.objects.all()), 1)

    def test_from_date_from_hour(self):
        from_date = date(2020, 5, 10)
        from_hour = time(5, 5, 5)
        sd = SpecialDay(from_date=from_date,
                        from_hour=from_hour, fridge=self.fridge)
        sd.save()

        self.assertIsNotNone(sd)
        self.assertEqual(len(SpecialDay.objects.all()), 1)

    def test_from_date_to_hour(self):
        from_date = date(2020, 5, 10)
        to_hour = time(5, 5, 5)
        sd = SpecialDay(from_date=from_date,
                        to_hour=to_hour, fridge=self.fridge)
        sd.save()

        self.assertIsNotNone(sd)
        self.assertEqual(len(SpecialDay.objects.all()), 1)
