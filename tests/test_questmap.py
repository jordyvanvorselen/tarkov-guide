import pytest

from decimal import *
from rest_framework.test import APIRequestFactory

from questmap.viewsets import QuestViewSet
from questmap.models import Quest, Trader, Map, Coordinates
from questmap.factories import MapFactory, TraderFactory, QuestFactory


@pytest.mark.django_db
def test_quest_properties() -> None:
    quest = QuestFactory()

    assert Quest.objects.count() == 1
    assert quest.name == "Shortage"
    assert type(quest.trader) == Trader
    assert type(quest.maps.all()[0]) == Map
    assert type(quest.coordinates.all()[0]) == Coordinates


@pytest.mark.django_db
def test_map_properties() -> None:
    map = MapFactory()

    assert Map.objects.count() == 1
    assert map.name == "Customs"


@pytest.mark.django_db
def test_trader_properties() -> None:
    trader = TraderFactory()

    assert Trader.objects.count() == 1
    assert trader.name == "Therapist"


@pytest.mark.django_db
def test_quests_api_endpoint() -> None:
    factory = APIRequestFactory()
    view = QuestViewSet.as_view({"get": "list"})

    QuestFactory()

    request = factory.get("/quests")
    response = view(request)

    quest = response.data[0]

    assert response.status_code == 200

    assert quest["id"] == 1
    assert quest["name"] == "Shortage"
    assert quest["trader"] == "Therapist"
    assert quest["maps"] == ["Customs"]
    assert quest["coordinates"] == [{"x": Decimal("1000.50"), "y": Decimal("500.10")}]
