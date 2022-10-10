# from django.contrib import admin

# Register your models here.

from django.contrib import admin
from questmap.models import Map, Trader, Quest, Coordinates


class CoordinatesInline(admin.TabularInline):
    model = Coordinates


class QuestAdmin(admin.ModelAdmin):
    model = Quest
    inlines = [CoordinatesInline]


admin.site.register(Map)
admin.site.register(Trader)
admin.site.register(Quest, QuestAdmin)
