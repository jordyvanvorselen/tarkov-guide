from django.db import models


class Map(models.Model):
    name = models.CharField(max_length=64, unique=True)

    def __str__(self):
        return self.name


class Trader(models.Model):
    name = models.CharField(max_length=64, unique=True)

    def __str__(self):
        return self.name


class Quest(models.Model):
    name = models.CharField(max_length=64, unique=True)
    trader = models.ForeignKey(Trader, on_delete=models.CASCADE)
    maps = models.ManyToManyField(Map)

    def __str__(self):
        return self.name

    def get_trader(self):
        return self.trader.name

    def get_maps(self):
        return list(map(lambda m: m.name, self.maps.all()))

    def get_coordinates(self):
        coordinates = self.coordinates_set.all()
        return list(map(lambda c: {"x": c.x, "y": c.y}, coordinates))


class Coordinates(models.Model):
    x = models.DecimalField(max_digits=6, decimal_places=2)
    y = models.DecimalField(max_digits=6, decimal_places=2)
    quest = models.ForeignKey(Quest, on_delete=models.CASCADE)

    def __str__(self):
        return f"X: {self.x}, Y: {self.y}"
