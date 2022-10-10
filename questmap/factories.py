import factory

from decimal import *


class MapFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = "questmap.Map"

    name = "Customs"


class TraderFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = "questmap.Trader"

    name = "Therapist"


class QuestFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = "questmap.Quest"

    name = "Shortage"
    trader = factory.SubFactory(TraderFactory)
    x = Decimal("1000.50")
    y = Decimal("500.10")

    @factory.post_generation
    def maps(self, create, extracted, **kwargs):
        map = MapFactory().id

        self.maps.add(map)
