from django.test import TestCase

from fridge.models import Fridge, OpeningHour, SpecialDay
from django.core.exceptions import ValidationError

from fridge.tests.test_tools import create_user, create_fridge, create_food, create_opening_hour, create_special_day, create_reservation


class FridgeModelTest(TestCase):
    def setUp(self):
        self.user = create_user()
        self.fridge = create_fridge(self.user)

    def test_delete(self):
        """
        Test delete method
        """
        self.assertEqual(Fridge.objects.count(), 1)
        self.fridge.delete()
        self.assertEqual(Fridge.objects.count(), 0)
        # TODO check image is correctly delete in media/images

    def test_get_opening_hours(self):
        """
        Test get_opening_hours method
        """
        create_opening_hour(self.fridge)
        create_opening_hour(self.fridge, weekday=2)
        create_opening_hour(self.fridge, weekday=3)

        self.assertEqual(self.fridge.get_opening_hours().count(), 3)

    def test_get_special_days(self):
        """
        Test get_special_days method
        """
        create_special_day(self.fridge)
        create_special_day(self.fridge, from_date=5, to_date=10)

        self.assertEqual(self.fridge.get_special_days().count(), 2)

    def test_get_foods(self):
        """
        Test get_foods method
        """
        create_food(self.fridge, self.user)
        self.assertEqual(self.fridge.get_foods().count(), 1)

    def test_available_and_reserved_food(self):
        """
        Test get_available_food and get_reserved_food method
        """
        food = create_food(self.fridge, self.user)
        self.assertEqual(self.fridge.get_available_food().count(), 1)
        self.assertEqual(len(self.fridge.get_reserved_food(self.user)), 0)

        create_reservation(food, self.user)
        self.assertEqual(self.fridge.get_available_food().count(), 0)
        self.assertEqual(len(self.fridge.get_reserved_food(self.user)), 1)


class FoodModel(TestCase):
    def setUp(self):
        self.user = create_user("test1")
        self.another_user = create_user("test2")
        fridge = create_fridge(self.user)
        self.food = create_food(fridge, self.user)

    def test_is_reserved_by_me(self):
        """
        Test is_reserved_by_me method
        """
        create_reservation(food=self.food, user=self.user)

        self.assertEqual(self.food.is_reserved_by_me(self.user), True)
        self.assertEqual(self.food.is_reserved_by_me(self.another_user), False)

    def test_is_available(self):
        """
        Test is_available method
        """
        self.assertEqual(self.food.is_available(), True)
        create_reservation(food=self.food, user=self.user)
        self.assertEqual(self.food.is_available(), False)


class OpeningHourModelTests(TestCase):
    def setUp(self):
        user = create_user()
        self.fridge = create_fridge(user=user)

    def test_to_hour_before_from_hour(self):
        """
        to_hour < from_hour : raise ValidationError exception
        """

        with self.assertRaises(ValidationError):
            create_opening_hour(fridge=self.fridge, to_hour=0, from_hour=1)

    def test_from_hour_before_to_hour(self):
        """
        from_hour < to_hour : dont raise exception
        """
        oh = create_opening_hour(fridge=self.fridge, from_hour=0, to_hour=1)

        self.assertIsNotNone(oh)
        self.assertEqual(len(OpeningHour.objects.all()), 1)

    def test_to_hour_equal_from_hour(self):
        """
        to_hour == from_hour : raise ValidationError exception
        """
        with self.assertRaises(ValidationError):
            create_opening_hour(fridge=self.fridge, to_hour=0, from_hour=0)


class SpecialDayModelTests(TestCase):
    def setUp(self):
        user = create_user()
        self.fridge = create_fridge(user)

    def test_to_hour_before_from_hour(self):
        """
        to_hour < from_hour : raise ValidationError exception
        """
        with self.assertRaises(ValidationError):
            create_special_day(self.fridge, to_hour=0, from_hour=1)

    def test_to_hour_equal_from_hour(self):
        """
        to_hour = from_hour : raise ValidationError exception
        """
        with self.assertRaises(ValidationError):
            create_special_day(self.fridge, to_hour=0, from_hour=0)

    def test_to_date_before_from_date(self):
        """
        to_date < from_date : raise ValidationError exception
        """
        with self.assertRaises(ValidationError):
            create_special_day(self.fridge, to_date=0, from_date=1)

    def test_to_date_equal_from_date(self):
        """
        to_date == from_date : raise ValidationError exception
        """
        with self.assertRaises(ValidationError):
            create_special_day(self.fridge, to_date=0, from_date=0)

    def test_date_and_time(self):
        """
        if two date are selected, you can't select hour
        """
        with self.assertRaises(ValidationError):
            create_special_day(self.fridge, from_date=0,
                               to_date=1, from_hour=0)

    def test_invalid_argument(self):
        """
        missing from_date
        """
        with self.assertRaises(ValidationError):
            create_special_day(self.fridge, to_date=0, from_hour=0)

    def test_from_date(self):
        """
        Only from_date value
        """
        sd = create_special_day(self.fridge, from_date=0)

        self.assertIsNotNone(sd)
        self.assertEqual(len(SpecialDay.objects.all()), 1)

    def test_from_date_to_date(self):
        """
        Valide from_date and to_date values
        """
        sd = create_special_day(self.fridge, from_date=0, to_date=1)

        self.assertIsNotNone(sd)
        self.assertEqual(len(SpecialDay.objects.all()), 1)

    def test_from_date_from_hour(self):
        """
        Valide from_date and from_hour values
        """
        sd = create_special_day(self.fridge, from_date=0, from_hour=0)

        self.assertIsNotNone(sd)
        self.assertEqual(len(SpecialDay.objects.all()), 1)

    def test_from_date_to_hour(self):
        """
        Valid from_date and to_hour values
        """
        sd = create_special_day(self.fridge, from_date=0, to_hour=1)

        self.assertIsNotNone(sd)
        self.assertEqual(len(SpecialDay.objects.all()), 1)
