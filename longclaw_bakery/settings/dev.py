from .base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'q%ng_7whu^xd-mqf#%xh*s!-5!=pqhk-vc0-2n*l4ixh4z7qe#'


EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

# Required is using broswer-sync for development
CSRF_TRUSTED_ORIGINS = ['http://localhost:3000', 'http://localhost:8000']

try:
    from .local import *
except ImportError:
    pass
