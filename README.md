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
docker compose build
```

Use one of the options below to start the container

**Note:** Untill the package rebuild has been released, you will need to use option 2 to run the demo locally.

### Option 1

#### Running the demo locally, using the published PyPi package (option 1)

Start the docker container and expose port 8000

```bash
docker compose up -d
```

### Option 2

#### Running the demo locally, using the longclaw package in editable mode (option 2)

The package should be available somewhere in your filesystem.

```bash
export LONGCLAW_PACKAGE_PATH=/path/to/longclaw
```

Start the docker container and expose port 8000

```bash
docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d
```

```bash
docker compose exec web bash -c "pip install -e /longclaw"
```

### After starting the container

Run the migrations

```bash
docker compose exec web python manage.py migrate
```

Load the contries data

```bash
docker compose exec web python manage.py loadcountries
```

Create a superuser

```bash
docker compose exec web python manage.py createsuperuser
```

Load the initial data

```bash
make loaddata
```

Run the server

```bash
docker compose exec web python manage.py runserver 0.0.0.0:8000
```

Navigate to localhost:8000/admin and sign in with the superuser you created above.
