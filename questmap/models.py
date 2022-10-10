from django.db import models


class Map(models.Model):
    name = models.CharField(max_length=64, unique=True)


class Trader(models.Model):
    name = models.CharField(max_length=64, unique=True)


class Quest(models.Model):
    name = models.CharField(max_length=64, unique=True)
    trader = models.ForeignKey(Trader, on_delete=models.CASCADE)
    maps = models.ManyToManyField(Map)
    x = models.DecimalField(max_digits=6, decimal_places=2)
    y = models.DecimalField(max_digits=6, decimal_places=2)
