# Generated by Django 3.0.8 on 2020-07-19 12:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fridge', '0019_remove_sponsor_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.EmailField(max_length=254, unique=True),
        ),
    ]