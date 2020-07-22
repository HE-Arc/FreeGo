# Generated by Django 3.0.5 on 2020-06-02 08:20

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fridge', '0002_auto_20200427_1016'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fridge',
            name='NPA',
            field=models.CharField(max_length=45, validators=[
                                   django.core.validators.RegexValidator(
                                       '^\\d{4}$', 'This NPA is not valid')]),
        ),
        migrations.AlterField(
            model_name='fridge',
            name='phone_number',
            field=models.CharField(max_length=12, validators=[
                django.core.validators.RegexValidator(
                    '^(\\+41|0)\\d{9}$', 'This phone number is not valid.')]),
        ),
        migrations.AlterField(
            model_name='openinghour',
            name='weekday',
            field=models.PositiveSmallIntegerField(
                choices=[(1, 'Monday'), (2, 'Tuesday'), (3, 'Wednesday'),
                         (4, 'Thursday'), (5, 'Friday'), (6, 'Saturday'),
                         (7, 'Sunday')], default=1),
        ),
    ]
