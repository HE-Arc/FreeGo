from django.db import models


class Fridge(models.Model):
    '''Fridge model'''
    name = models.CharField(max_length=45)
    adresse = models.CharField(max_length=45)
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
    expiration_date = models.DateTimeField()
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
