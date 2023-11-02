from django.db import models


class Menu(models.Model):
    menu = models.CharField(max_length=20, null=False, blank=False)
    route = models.CharField(max_length=100, null=False, blank=False)


class Content(models.Model):
    firstLine = models.CharField(max_length=15, null=False, blank=False)
    number = models.CharField(max_length=5, null=False, blank=False)
    addMeaningToNumber = models.CharField(max_length=3, null=False, blank=True)
    lastLine = models.CharField(max_length=15, null=False, blank=False)
