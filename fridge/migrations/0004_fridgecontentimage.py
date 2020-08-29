# Generated by Django 3.1 on 2020-08-23 19:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('fridge', '0003_auto_20200818_0840'),
    ]

    operations = [
        migrations.CreateModel(
            name='FridgeContentImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='images/')),
                ('fridge', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='fridge.fridge')),
            ],
        ),
    ]