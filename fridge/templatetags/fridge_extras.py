from django import template
from fridge.models import Reservation

register = template.Library()


@register.simple_tag
def is_reserved_by_user(food, user):
    return Reservation.objects.filter(
        food=food, user=user).count() != 0


@register.simple_tag
def nb_reservation_by_user(food, user):
    return Reservation.objects.filter(
        food=food, user=user).count()
