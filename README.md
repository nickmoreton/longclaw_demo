# Longclaw Demo

Demo shop for Longclaw

This example shop is intended to show the capabilities of longclaw. 

When creating your own shop, I recommend starting afresh using the `longclaw start` command, rather than forking this project.

## Quickstart

Clone this repository
```bash
git clone https://github.com/JamesRamm/longclaw_demo.git
cd longclaw_demo
```

Build the docker image

```bash
docker-compose build
```

Start the docker container and expose port 8000

```bash
docker-compose up -d
```

Run the migrations

```bash
docker-compose exec web python manage.py migrate
```

Load the contries data

```bash
docker-compose exec web python manage.py loadcountries
```

Create a superuser

```bash
docker-compose exec web python manage.py createsuperuser
```

Load the initial data

```bash
docker-compose exec web python manage.py loaddata longclaw_initial_data
```

Run the server

```bash
docker-compose exec web python manage.py runserver 0.0.0.0:8000
```

Navigate to localhost:8000/admin and sign in with the superuser you created above.
