import pytest

from decimal import *

from questmap.models import Quest, Trader, Map
from questmap.factories import MapFactory, TraderFactory, QuestFactory


@pytest.mark.django_db
def test_quest_properties() -> None:
    quest = QuestFactory()

    assert Quest.objects.count() == 1
    assert quest.name == "Shortage"
    assert type(quest.trader) == Trader
    assert type(quest.maps.all()[0]) == Map
    assert quest.x == Decimal("1000.50")
    assert quest.y == Decimal("500.10")


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
