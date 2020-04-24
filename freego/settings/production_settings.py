from freego.settings.common_settings import *

# SECURITY WARNING: keep the secret key used in production secret!
# SET environment variable SECRET_KEY on server
SECRET_KEY = os.environ['SECRET_KEY']

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = ['0.0.0.0', 'localhost',
                 '127.0.0.1', 'freego.srvz-webapp.he-arc.ch']

CSRF_COOKIE_SECURE = True

SESSION_COOKIE_SECURE = True

SECURE_SSL_REDIRECT = True

SECURE_HSTS_SECONDS = 3800

SECURE_HSTS_INCLUDE_SUBDOMAINS = True

SECURE_HSTS_PRELOAD = True

SECURE_REFERRER_POLICY = 'no-referrer'


# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'freego_db', # os.environ.get('GROUPNAME'),
        'USER': 'root',# os.environ.get('GROUPNAME', 'root'),
        'PASSWORD': 'root',# os.environ.get('PASSWORD', ''),
        'HOST': '127.0.0.1',# os.environ.get('MYSQL_HOST', '127.0.0.1'),
        'PORT': '3800',# os.environ.get('MYSQL_PORT', '3800'),
        'OPTIONS': {
            'charset': 'utf8mb4'
        }
    }
}
