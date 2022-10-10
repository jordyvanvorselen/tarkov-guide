from django.urls import path, include
from rest_framework import routers

from . import views
from questmap.viewsets import QuestViewSet

router = routers.DefaultRouter()
router.register(r"quests", QuestViewSet)

urlpatterns = [path("", views.index, name="index"), path("", include(router.urls))]
