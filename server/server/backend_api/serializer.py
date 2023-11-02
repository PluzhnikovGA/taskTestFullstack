from rest_framework import serializers
from .models import Content, Menu


class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = ['menu', 'route']

class ContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Content
        fields = [
            'firstLine', 
            'number', 
            'addMeaningToNumber', 
            'lastLine'
        ]