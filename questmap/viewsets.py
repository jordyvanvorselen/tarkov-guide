from rest_framework import viewsets

from questmap.models import Quest
from questmap.serializers import QuestSerializer


class QuestViewSet(viewsets.ModelViewSet):
    queryset = Quest.objects.all()
    serializer_class = QuestSerializer
