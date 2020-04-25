from django.core.validators import RegexValidator
from django.core.exceptions import ValidationError

from datetime import datetime

DATE_FORMAT = '%b %d, %Y'

phone_number_validator = RegexValidator(
    r'^(\+41|0)\d{9}$', 'Ce numéro de téléphone n\'est pas valide')
NPA_validator = RegexValidator(r'^\d{4}$', 'Ce NPA n\'est pas valide')


def expiration_date_validator(expiration_date):
    if expiration_date < datetime.now().date():
        raise ValidationError("La date d'expiration est déjà passée.")
