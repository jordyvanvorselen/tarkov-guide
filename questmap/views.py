from django.http import HttpRequest, HttpResponse
from django.shortcuts import render


def index(request: HttpRequest) -> HttpResponse:
    response = render(request, "base.html")
    response.set_cookie(key="api-base-url", value=request.build_absolute_uri())
    return response
