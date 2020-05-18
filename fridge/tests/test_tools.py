
from fridge.models import Fridge, Food, Reservation, OpeningHour, SpecialDay
from fridge.forms import User
from datetime import timedelta, date
from django.utils import timezone
from random import randint

from django.core.files.images import ImageFile
from PIL import Image
from io import BytesIO


def passed_date():
    d = randint(1, 1000)
    return date.today() - timedelta(days=d)


def create_fridge(user, name="test_fridge", address="test_address", NPA="2000", phone_number="0790000000"):
    '''Create generic fridge with selectable name'''
    # TODO add generic image

    pil_image = Image.new('RGB', (100, 100))
    f = BytesIO()
    pil_image.save(f, 'PNG')

    image = ImageFile(f)
    image.filename = name
    return Fridge.objects.create(name=name, address=address, NPA=NPA,
                                 phone_number=phone_number, image=image, user=user)


def create_food(fridge, user, name="food_test", vegetarian=False, vegan=False, date=0):
    '''Create generic food with selectable name'''
    expiration_date = timezone.now() + timedelta(days=date)
    return Food.objects.create(name=name, vegetarian=vegetarian, vegan=vegan,
                               expiration_date=expiration_date, fridge=fridge, user=user)


def create_reservation(food, user):
    return Reservation.objects.create(food=food, user=user)


def create_opening_hour(fridge, from_hour=0, to_hour=1, weekday=1):
    from_hour = timezone.now() + timedelta(hours=from_hour)
    to_hour = timezone.now() + timedelta(hours=to_hour)
    return OpeningHour.objects.create(
        weekday=weekday, from_hour=from_hour, to_hour=to_hour, fridge=fridge)


def create_special_day(fridge, from_date=0, to_date=None, from_hour=None, to_hour=None):
    from_date = timezone.now() + timedelta(days=from_date)
    sd = SpecialDay(from_date=from_date, fridge=fridge)

    if to_date is not None:
        sd.to_date = timezone.now() + timedelta(days=to_date)
    if from_hour is not None:
        sd.from_hour = timezone.now() + timedelta(hours=from_hour)
    if to_hour is not None:
        sd.to_hour = timezone.now() + timedelta(hours=to_hour)

    sd.save()
    return sd


def create_user(username="test", email='test@test.test', password='test'):
    '''Create generic user with selectable username'''
    return User.objects.create_user(username=username, email=email, password=password)
