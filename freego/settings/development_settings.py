from freego.settings.common_settings import *

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '$g+b++)$rxeitv#3h7+e0k%=a)4)w3*ba(a-8vu(jy*_77irgs'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True


# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'freego_db',
        'USER': 'root',
        'PASSWORD': '',
        'HOST': '127.0.0.1',
        'PORT': '3306',
    },
}
