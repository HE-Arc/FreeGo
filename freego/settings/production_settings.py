from freego.settings.common_settings import *

# SECURITY WARNING: keep the secret key used in production secret!
# SET environment variable SECRET_KEY on server


# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = ['0.0.0.0', 'localhost',
                 '127.0.0.1', 'freego.srvz-webapp.he-arc.ch']

CSRF_COOKIE_SECURE = True

SESSION_COOKIE_SECURE = True

SECURE_SSL_REDIRECT = True

SECURE_HSTS_SECONDS = 3600

SECURE_HSTS_INCLUDE_SUBDOMAINS = True

SECURE_HSTS_PRELOAD = True

SECURE_REFERRER_POLICY = 'no-referrer'


# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases
#Use the following live settings to build on Travis CI
if os.getenv('TRAVIS', None):
    SECRET_KEY = "n&g)n(y(rm3&k9e^2_=+70twpknh^(z&la1v)&8)dokmmiv1%q"
    DEBUG = False
    TEMPLATE_DEBUG = True

    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql',
            'NAME': 'travis_ci_db',
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