"""
WSGI config for freego project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'freego.settings.development_settings')

os.environ.setdefault('DATABASE_NAME', 'freego_db')

os.environ.setdefault('DATABASE_USER', 'root')

os.environ.setdefault('DATABASE_PASSWORD', 'root')


application = get_wsgi_application()
