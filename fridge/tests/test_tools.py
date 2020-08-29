from fridge.models import Fridge, Food, Reservation, \
    OpeningHour, SpecialDay, FridgeFollowing, Inventory, \
    TemperatureControl, FridgeContentImage
from fridge.forms import User
from datetime import timedelta, date
from django.utils import timezone
from random import randint

from django.core.files.uploadedfile import SimpleUploadedFile
from django.conf import settings


def passed_date():
    d = randint(1, 1000)
    return date.today() - timedelta(days=d)


def create_fridge(user, name="test_fridge", address="5th Avenue",
                  zip_code="175", phone_number="0790000000", city="NYC",
                  is_active=False):
    '''Create generic fridge with selectable name'''

    image_path = settings.MEDIA_ROOT + '/default.JPG'
    image = SimpleUploadedFile(name='default.JPG', content=open(
        image_path, 'rb').read(), content_type='image/jpeg')

    return Fridge.objects.create(name=name, address=address, zip_code=zip_code,
                                 phone_number=phone_number, image=image,
                                 user=user, city=city, is_active=is_active)


def create_food(fridge, user, name="food_test", counter=4,
                vegetarian=False, vegan=False, halal=False, lactose_free=False,
                gluten_free=False, bio=False, date=0):
    '''Create generic food with selectable name'''

    expiration_date = timezone.now() + timedelta(days=date)
    return Food.objects.create(name=name, counter=counter,
                               vegetarian=vegetarian, vegan=vegan,
                               halal=halal, lactose_free=lactose_free,
                               gluten_free=gluten_free, bio=bio,
                               expiration_date=expiration_date,
                               fridge=fridge, user=user)


def create_reservation(food, user, quantity):
    return Reservation.objects.create(food=food, user=user, quantity=quantity)


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


def create_inventory(fridge, date=0, product_name="Product", product_number=5,
                     temperature=22, visa="2000"):
    date = timezone.now() + timedelta(days=date)
    return Inventory.objects.create(date=date, temperature=temperature,
                                    visa=visa, fridge=fridge)


def create_temperature_control(fridge, date=0, temperature=22, visa="2000"):
    date = timezone.now() + timedelta(days=date)
    return TemperatureControl.objects.create(
        date=date, temperature=temperature, visa=visa, fridge=fridge)


def create_fridge_content_image(fridge):
    '''Create generic fridgeContentImage'''

    image_path = settings.MEDIA_ROOT + '/default.JPG'
    image = SimpleUploadedFile(name='default.JPG', content=open(
        image_path, 'rb').read(), content_type='image/jpeg')

    return FridgeContentImage.objects.create(image=image, fridge=fridge)
