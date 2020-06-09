# Generated by Django 3.0.5 on 2020-06-02 08:20

from django.db import migrations
from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType
from fridge.models import User


def create_permission(apps, schema_editor):
    content_type = ContentType.objects.get_for_model(User)
    Permission.objects.create(
        codename='admin',
        name='Administrator',
        content_type=content_type,
    )
    Permission.objects.create(
        codename='store',
        name='Store manager',
        content_type=content_type,
    )


def create_admin_user(apps, schema_editor):
    user = User.objects.create_user(username='admin', password='admin')
    permission_admin = Permission.objects.get(codename='admin')
    user.user_permissions.add(permission_admin)
    permission_store = Permission.objects.get(codename='store')
    user.user_permissions.add(permission_store)


class Migration(migrations.Migration):

    dependencies = [
        ('fridge', '0003_auto_20200602_1020'),
    ]

    operations = [
        migrations.RunPython(create_permission),
        migrations.RunPython(create_admin_user),
    ]
