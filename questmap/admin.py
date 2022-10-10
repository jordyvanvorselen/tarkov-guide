# from django.contrib import admin

# Register your models here.

from django.contrib import admin
from questmap.models import Map, Trader, Quest

admin.site.register(Map)
admin.site.register(Trader)
admin.site.register(Quest)
