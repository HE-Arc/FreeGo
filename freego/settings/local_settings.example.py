from freego.settings.common_settings import *

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '<SECRET_KEY >'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['0.0.0.0', 'localhost', '127.0.0.1']


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

EMAIL_HOST = '<EMAIL_HOST >'
EMAIL_HOST_USER = '<EMAIL_HOST_USER >'
EMAIL_HOST_PASSWORD = '<EMAIL_HOST_PASSWORD >'
EMAIL_PORT = '<EMAIL_PORT >'
