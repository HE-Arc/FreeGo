# Generated by Django 3.0.4 on 2020-04-27 08:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fridge', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fridge',
            name='image',
            field=models.ImageField(upload_to='images/'),
        ),
        migrations.AlterField(
            model_name='specialday',
            name='from_date',
            field=models.DateField(blank=True, null=True),
        ),
    ]