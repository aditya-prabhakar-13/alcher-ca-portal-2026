#!/bin/sh

# Collect static files and upload to MinIO
python manage.py collectstatic --no-input --clear

# Remove local static files and staticfiles directory to optimize container size
rm -rf static/ */static/ staticfiles/

# Make and apply migrations
python manage.py makemigrations
python manage.py migrate

# Create superuser non-interactively (make sure your custom command supports these flags)
python manage.py createsuperuser --noinput --firstname admin --email webops@alcheringa.in --password admin@admin

# Start Gunicorn server
gunicorn caportal.wsgi:application --bind 0.0.0.0:80 --log-level=debug --timeout 180 --workers 4
