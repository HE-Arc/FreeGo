from django.db import models

#####################################
#              Fridge               #
#####################################


class Fridge(models.Model):
    '''Fridge model'''
    name = models.CharField(max_length=45)
    address = models.CharField(max_length=45)
    NPA = models.CharField(max_length=45)
    phone_number = models.CharField(max_length=12)
    user = models.ForeignKey(
        'User', on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return str(self.name)


class User(models.Model):
    '''User model'''
    name = models.CharField(max_length=45)
    first_name = models.CharField(max_length=255)
    status = models.IntegerField()
    email = models.CharField(max_length=45)
    password = models.CharField(max_length=255)

    def __str__(self):
        return str(self.name)


class Food(models.Model):
    '''Food model'''
    name = models.CharField(max_length=45)
    vegetarian = models.BooleanField()
    vegan = models.BooleanField()
    expiration_date = models.DateField()
    fridge = models.ForeignKey(
        'Fridge', on_delete=models.CASCADE, null=True, blank=True)
    user = models.ForeignKey(
        'User', on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return str(self.name)


class Reporting(models.Model):
    '''Reporting model'''
    title = models.CharField(max_length=45)
    description = models.CharField(max_length=500)
    fridge = models.ForeignKey(
        'Fridge', on_delete=models.CASCADE, null=True, blank=True)
    user = models.ForeignKey(
        'User', on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return str(self.title)


#####################################
#           Opening Hours           #
#####################################

WEEKDAYS = [
    (1, "Monday"),
    (2, "Tuesday"),
    (3, "Wednesday"),
    (4, "Thursday"),
    (5, "Friday"),
    (6, "Saturday"),
    (7, "Sunday"),
]


class OpeningHour(models.Model):
    '''OpeningHour model'''
    weekday = models.PositiveSmallIntegerField(
        choices=WEEKDAYS)
    from_hour = models.TimeField()
    to_hour = models.TimeField()
    fridge = models.ForeignKey(
        'Fridge', on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return str(WEEKDAYS[self.weekday][1])


class SpecialDay(models.Model):
    '''SpecialDay model'''
    holiday_date = models.DateField()
    closed = models.BooleanField(default=True)
    from_hour = models.TimeField()
    to_hour = models.TimeField()
    fridge = models.ForeignKey(
        'Fridge', on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return str(self.holiday_date)
