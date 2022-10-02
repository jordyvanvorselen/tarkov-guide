# tarkov-guide

https://www.tarkov.guide is a web application that helps players stacking quests in the online shooter Escape from Tarkov.

## Development Setup

The dependencies in this project are managed by [Poetry](https://python-poetry.org/). You can install the dependencies by running:

```bash
$ poetry install
```

After this, you can run start the webserver using:

```bash
$ poetry run python manage.py runserver
```

To watch and automatically re-compile the frontend assets, run:

```bash
$ yarn watch
```
