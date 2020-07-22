from freego.settings.common_settings import *

# SECURITY WARNING: keep the secret key used in production secret!
# SET environment variable SECRET_KEY on server


# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['0.0.0.0', 'localhost',
                 '127.0.0.1', 'freego.srvz-webapp.he-arc.ch']


# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases
# Use the following live settings to build on Travis CI
if os.getenv('TRAVIS', None):
    SECRET_KEY = "n&g)n(y(rm3&k9e^2_=+70twpknh^(z&la1v)&8)dokmmiv1%q"
    DEBUG = False
    TEMPLATE_DEBUG = True

    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql',
            'NAME': 'myapp_test',
            'USER': 'travis',
            'PASSWORD': '',
            'HOST': '127.0.0.1',
        }
    }
else:
    SECRET_KEY = os.environ['SECRET_KEY']
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql',
            'NAME': os.environ.get('GROUPNAME', 'freego_db'),
            'USER': os.environ.get('GROUPNAME', 'root'),
            'PASSWORD': os.environ.get('PASSWORD', 'root'),
            'HOST': os.environ.get('MYSQL_HOST', '127.0.0.1'),
            'PORT': os.environ.get('MYSQL_PORT', '3306'),
            'OPTIONS': {
                'charset': 'utf8mb4'
            }
        }
    }


EMAIL_USE_TLS = True
EMAIL_PORT = 587
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_HOST_USER = 'freego.tb@gmail.com'
EMAIL_HOST_PASSWORD = os.environ.get('EMAIL_HOST_PASSWORD', 'test')
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
