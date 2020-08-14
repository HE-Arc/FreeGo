from django import template
from fridge.models import Reservation

register = template.Library()


@register.simple_tag
def is_reserved_by_user(my_list, user):
    return Reservation.objects.filter(
        food=my_list, user=user).count() != 0
