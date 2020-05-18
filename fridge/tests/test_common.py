
from fridge.models import Fridge, Food
from fridge.forms import User
from datetime import date, timedelta
import random

from django.core.files.images import ImageFile
from PIL import Image
from io import BytesIO


def passed_date():
    d = random.randint(1, 1000)
    return date.today() - timedelta(days=d)


def create_fridge(name, user):
    '''Create generic fridge with selectable name'''
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
    '''Create generic food with selectable name'''
    vegetarian = True
    vegan = True
    expiration_date = date(2021, 5, 10)
    return Food.objects.create(name=name, vegetarian=vegetarian, vegan=vegan,
                               expiration_date=expiration_date, fridge=fridge, user=user)


def create_user(username):
    '''Create generic user with selectable username'''
    return User.objects.create_user(username, 'test@test.test', 'test')
