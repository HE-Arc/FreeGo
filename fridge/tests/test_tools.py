from fridge.models import Fridge, Food, Reservation, \
    OpeningHour, SpecialDay, FridgeFollowing
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


def create_fridge(user, name="test_fridge", address="5th Avenue",
                  NPA="175", phone_number="0790000000", city="NYC",
                  is_active=False):
    '''Create generic fridge with selectable name'''
    image = get_test_image()
    return Fridge.objects.create(name=name, address=address, NPA=NPA,
                                 phone_number=phone_number, image=image,
                                 user=user, city=city, is_active=is_active)


def get_test_image():
    pil_image = Image.open('fridge/static/fridge/test/test.png')
    f = BytesIO()
    pil_image.save(f, 'PNG')

    image = ImageFile(f)
    image.filename = "test_image"
    return image


def create_food(fridge, user, name="food_test",
                vegetarian=False, vegan=False, date=0):
    '''Create generic food with selectable name'''
    expiration_date = timezone.now() + timedelta(days=date)
    return Food.objects.create(name=name, vegetarian=vegetarian, vegan=vegan,
                               expiration_date=expiration_date, fridge=fridge,
                               user=user)


def create_reservation(food, user):
    return Reservation.objects.create(food=food, user=user)


def create_opening_hour(fridge, from_hour=0, to_hour=1, weekday=1):
    now = timezone.now()
    from_hour = now + timedelta(hours=from_hour)
    to_hour = now + timedelta(hours=to_hour)
    return OpeningHour.objects.create(
        weekday=weekday, from_hour=from_hour, to_hour=to_hour, fridge=fridge)


def create_special_day(fridge, from_date=0, to_date=None,
                       from_hour=None, to_hour=None):
    now = timezone.now()
    from_date = now + timedelta(days=from_date)
    sd = SpecialDay(from_date=from_date, fridge=fridge)

    if to_date is not None:
        sd.to_date = now + timedelta(days=to_date)
    if from_hour is not None:
        sd.from_hour = now + timedelta(hours=from_hour)
    if to_hour is not None:
        sd.to_hour = now + timedelta(hours=to_hour)

    sd.save()
    return sd


def create_user(username="test", email='test@test.test', password='test'):
    '''Create generic user with selectable username'''
    return User.objects.create_user(username=username, email=email,
                                    password=password)


def create_favorite(user, fridge):
    return FridgeFollowing.objects.create(user=user, fridge=fridge)
