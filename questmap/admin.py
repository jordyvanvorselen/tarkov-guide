from django.contrib import admin
from questmap.models import Map, Trader, Quest, Coordinates


class CoordinatesInline(admin.TabularInline):  # type: ignore
    model = Coordinates


class QuestAdmin(admin.ModelAdmin):  # type: ignore
    model = Quest
    inlines = [CoordinatesInline]


admin.site.register(Map)
admin.site.register(Trader)
admin.site.register(Quest, QuestAdmin)
