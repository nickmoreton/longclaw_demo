destroy:
	@echo "Destroying the environment..."
	docker compose down -v

build:
	@echo "Building the environment..."
	docker compose build

up:
	@echo "Starting the environment..."
	docker compose up -d

exec:
	@echo "Accessing the container..."
	docker compose exec web bash

destroy:
	@echo "Destroying the environment..."
	docker compose down -v

dev:
	@echo "Starting the development environment..."
	docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d
	docker compose exec web bash -c "pip install -e /longclaw"
	docker compose exec web python manage.py migrate
	docker compose exec web python manage.py loadcountries

run-dev:
	@echo "Running the development environment..."
	docker compose exec web python manage.py runserver 0.0.0.0:8000

loaddata:
	@echo "Loading data..."
	docker compose exec web python manage.py loaddata fixtures.json
	docker compose exec web bash -c "mkdir -p media/original_images"
	docker compose exec web bash -c "cp -r media_fixtures/* media/original_images"

dumpdata:
	@echo "Dumping data..."
	docker compose exec web python manage.py dumpdata --natural-foreign --indent 2 \
    -e contenttypes -e auth.permission \
    -e wagtailcore.groupcollectionpermission \
    -e wagtailcore.grouppagepermission -e wagtailimages.rendition \
    -e sessions -e basket.basketitem -e shipping.country > fixtures.json
