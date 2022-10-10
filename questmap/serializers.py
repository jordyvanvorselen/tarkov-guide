from rest_framework import serializers

from questmap.models import Quest


class QuestSerializer(serializers.HyperlinkedModelSerializer):
    trader = serializers.CharField(source="get_trader")
    maps = serializers.ListField(source="get_maps")

    class Meta:
        model = Quest
        fields = ["name", "x", "y", "trader", "maps"]
