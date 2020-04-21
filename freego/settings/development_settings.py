from freego.settings.common_settings import *

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '$g+b++)$rxeitv#3h7+e0k%=a)4)w3*ba(a-8vu(jy*_77irgs'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['0.0.0.0', 'localhost', '127.0.0.1']

# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': os.environ['DATABASE_NAME'],
        'USER': os.environ['DATABASE_USER'],
        'PASSWORD': os.environ['DATABASE_PASSWORD'],
        'HOST': '127.0.0.1',
        'PORT': '3306',
    },
}
