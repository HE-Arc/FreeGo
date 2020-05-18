from django.test import TestCase

from .models import Fridge, Food, OpeningHour, SpecialDay, Reservation
from .forms import FoodForm, OpeningHourForm, SpecialDayForm, User
from datetime import time, date, timedelta
from django.core.exceptions import ValidationError
import random
from django.core.files.uploadedfile import SimpleUploadedFile

from django.core.files.images import ImageFile
from PIL import Image
from io import BytesIO


def passed_date():
    d = random.randint(1, 1000)
    return date.today() - timedelta(days=d)


def create_fridge(name, user):
    address = "Un adresse"
    NPA = "2000"
    phone_number = "0790000000"

    pil_image = Image.new('RGB', (100, 100))
    f = BytesIO()
    pil_image.save(f, 'PNG')

    image = ImageFile(f)
    image.filename = "test.png"
    return Fridge.objects.create(name=name, address=address, NPA=NPA,
                                 phone_number=phone_number, image=image, user=user)


def create_food(name, fridge, user):
    vegetarian = True
    vegan = True
    expiration_date = date(2021, 5, 10)
    return Food.objects.create(name=name, vegetarian=vegetarian, vegan=vegan,
                               expiration_date=expiration_date, fridge=fridge, user=user)


def create_user(name):
    return User.objects.create_user(name, 'gael@gael.com', 'gael')


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
