from rest_framework import viewsets

from questmap.models import Quest
from questmap.serializers import QuestSerializer


class QuestViewSet(viewsets.ModelViewSet):  # type: ignore
    queryset = Quest.objects.all()
    serializer_class = QuestSerializer
