![Build](https://https://github.com/jordyvanvorselen/tarkov-guide/actions/workflows/ci.yml/badge.svg)
[![Python 3.6](https://img.shields.io/badge/python-3.10.5-blue.svg)](https://www.python.org/downloads/release/python-3105/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)

# tarkov-guide

https://www.tarkov.guide is a web application that helps players stacking quests in the online shooter Escape from Tarkov. The application enables players to select the quests they have to complete on a certain map, and then marks the points of interest for them on a map.

## General software architecture

This application is set up using the following frameworks:

* **React** for the frontend. The components can be found in [./static/src/js/components](./static/src/js/components).
* **Django** and **Django Rest Framework** for the backend.
* **TailwindCSS** and **PostCSS** are used to style the application.
* Unit and integration tests are written using **Pytest**. They can be found in [./tests](./tests).
* Feature tests are written in **Cypress**. They can be found in [./cypress/features](./cypress/features).
* Factories to create testdata are made using **factory boy**. They can be found in [./questmap/factories.py](./questmap/factories.py).
* The frontend is build using **parcel**. Parcel compiles the frontend assets. The assets are loaded by the [Django base template](./questmap/templates/base.html) to support live reloading.
* **Flake8** and **black** are used to guard the code style.
* **Mypy** is used to do static analysis of the Python type hints.
* **Github Actions** is used for continuous integration.

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

## Testing

To run the unittests, run:

```bash
$ poetry run pytest
```

To run the feature tests, run:

```bash
$ yarn cypress run
```

To check the type hints, run:

## Code quality

```bash
$ poetry run mypy --strict .
```

To check the code quality, run:

```bash
$ poetry run flake8
```

To check the code formatting, run:

```bash
$ poetry run black . --check
```
