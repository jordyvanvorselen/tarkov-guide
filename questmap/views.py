from django.http import HttpRequest, HttpResponse
from django.shortcuts import render


def index(request) -> HttpResponse:
    return render(request, "base.html")
