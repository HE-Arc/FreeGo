from django.test import TestCase

from fridge.models import Fridge, OpeningHour, SpecialDay
from django.core.exceptions import ValidationError

from fridge.tests.test_tools import create_user, create_fridge, create_food, \
    create_opening_hour, create_special_day, create_reservation


class FridgeModelTest(TestCase):
    def setUp(self):
        self.user = create_user()
        self.user2 = create_user(username="test2", email="test2@test.ch")
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

    def test_available_and_reserved_food(self):
        """
        Test get_available_food and get_reserved_food method
        """
        food = create_food(self.fridge, self.user)
        self.assertEqual(self.fridge.get_available_food().count(), 1)
        self.assertEqual(len(self.fridge.get_reserved_food()), 0)

        reservation = create_reservation(food, self.user2, 2)
        self.assertEqual(self.fridge.get_available_food().count(), 1)
        self.assertEqual(len(self.fridge.get_reserved_food()), 1)

        reservation.delete()

        create_reservation(food, self.user2, 4)
        self.assertEqual(self.fridge.get_available_food().count(), 0)
        self.assertEqual(len(self.fridge.get_reserved_food()), 1)

    def test_latitude_longitude(self):
        """
        Test latitude and longitude.
        For address : 175 5th Avenue NYC
        longitude = -73.98964162240998
        latitude = 40.741059199999995
        """
        longitude = -73.98964162240998
        latitude = 40.741059199999995

        self.assertAlmostEqual(self.fridge.longitude, longitude)
        self.assertAlmostEqual(self.fridge.latitude, latitude)


class FoodModel(TestCase):
    def setUp(self):
        self.user = create_user("test1", email="test1@test.tests")
        self.another_user = create_user("test2", email="test2@test.tests")
        fridge = create_fridge(self.user)
        self.food = create_food(fridge, self.user)

    def test_is_reserved_by_me(self):
        """
        Test is_reserved_by_me method
        """
        create_reservation(food=self.food, user=self.user, quantity=3)

        self.assertEqual(self.food.is_reserved_by_me(self.user), True)
        self.assertEqual(self.food.is_reserved_by_me(self.another_user), False)

    def test_has_reservation(self):
        """
        Test has_reservation method
        """
        self.assertEqual(self.food.has_reservation(), False)
        create_reservation(food=self.food, user=self.user, quantity=3)
        self.assertEqual(self.food.has_reservation(), True)

    def test_quantity_available(self):
        """
        Test quantity_available method
        """
        self.assertEqual(self.food.quantity_available(), range(1, 5))
        create_reservation(food=self.food, user=self.another_user, quantity=2)
        self.assertEqual(self.food.quantity_available(), range(1, 3))
        create_reservation(food=self.food, user=self.another_user, quantity=1)
        self.assertEqual(self.food.quantity_available(), range(1, 2))


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
