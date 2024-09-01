FROM python:3.9

RUN useradd longclaw_bakery --create-home && mkdir /app && chown -R longclaw_bakery /app

WORKDIR /app

ENV PYTHONUNBUFFERED=1 \
    DJANGO_SETTINGS_MODULE=longclaw_bakery.settings.production \
    PORT=8000

EXPOSE 8000

RUN apt-get update --yes --quiet && apt-get install --yes --quiet --no-install-recommends \
    build-essential \
    libpq-dev \
    curl \
    git \
    && apt-get autoremove && rm -rf /var/lib/apt/lists/*

    
COPY requirements.txt .

RUN pip install -U pip
RUN pip install -r requirements.txt

USER longclaw_bakery
ADD . .

CMD tail -f /dev/null
