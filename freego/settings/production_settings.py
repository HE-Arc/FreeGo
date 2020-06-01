from freego.settings.common_settings import *

# SECURITY WARNING: keep the secret key used in production secret!
# SET environment variable SECRET_KEY on server


# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = ['0.0.0.0', 'localhost',
                 '127.0.0.1', 'freego.srvz-webapp.he-arc.ch']

SECURE_REFERRER_POLICY = 'no-referrer'

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
