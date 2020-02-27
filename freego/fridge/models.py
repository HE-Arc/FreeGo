from django.db import models

class Fridge(models.Model):
    name = models.CharField(max_length=200)
    adresse = models.CharField(max_length=200)
    NPA = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=200)
    user_id = models.IntegerField() #FIXME faire référence seulement à l'ID ou a toute la table
