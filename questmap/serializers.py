from rest_framework import serializers

from questmap.models import Quest


class QuestSerializer(serializers.HyperlinkedModelSerializer):
    trader = serializers.CharField(source="get_trader")
    maps = serializers.ListField(source="get_maps")
    coordinates = serializers.ListField(source="get_coordinates")

    class Meta:
        model = Quest
        fields = ["id", "name", "coordinates", "trader", "maps"]
