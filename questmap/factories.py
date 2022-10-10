# type: ignore

import factory

from decimal import Decimal


class MapFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = "questmap.Map"

    name = "Customs"


class TraderFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = "questmap.Trader"

    name = "Therapist"


class CoordinatesFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = "questmap.Coordinates"

    x = Decimal("1000.50")
    y = Decimal("500.10")


class QuestFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = "questmap.Quest"

    name = "Shortage"
    trader = factory.SubFactory(TraderFactory)

    @factory.post_generation
    def post_gen(self, create, extracted, **kwargs):
        self.maps.add(MapFactory().id)
        self.coordinates_set.add(CoordinatesFactory(quest_id=self.id))
