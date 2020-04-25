# Generated by Django 3.0.4 on 2020-04-25 10:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fridge', '0015_auto_20200425_1055'),
    ]

    operations = [
        migrations.AlterField(
            model_name='openinghour',
            name='weekday',
            field=models.PositiveSmallIntegerField(choices=[(1, 'Lundi'), (2, 'Mardi'), (3, 'Mercredi'), (4, 'Jeudi'), (5, 'Vendredi'), (6, 'Samedi'), (7, 'Dimanche')], default=1),
        ),
    ]