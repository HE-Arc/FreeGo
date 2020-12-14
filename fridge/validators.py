from django.core.validators import RegexValidator
from django.core.exceptions import ValidationError

from datetime import datetime
from django.utils.translation import gettext_lazy as _

DATE_FORMAT = '%b %d, %Y'

phone_number_validator = RegexValidator(
    r'^(\+41|0)\d{9}$', _('This phone number is not valid.'))
NPA_validator = RegexValidator(r'^\d{4}$', _('This NPA is not valid'))


def expiration_date_validator(expiration_date):
    """
    Raise error if the date is already passed.
    """
    if expiration_date < datetime.now().date():
        raise ValidationError(_("The expiration date is already passed."))


def latitude_longitude_validators(value):
    """
    Value must be between -90 and 90
    """
    if value > 90.0 or value < -90.0:
        raise ValidationError(
            _("Latitude and longitude must be between -90 and 90."))
