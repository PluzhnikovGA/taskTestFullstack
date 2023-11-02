from django.shortcuts import render
from rest_framework.views import APIView
from .models import Menu, Content
from .serializer import MenuSerializer, ContentSerializer
from rest_framework.response import Response


class MenuView(APIView):
    def get(self, request):
        output = [
            {
                "menu": data.menu,
                "route": data.route
            } for data in Menu.objects.all()
        ]
        return Response(output)
    
    def post(self, request):
        serializer = MenuSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
        
class ContentView(APIView):
    def get(self, request):
        output = [
            {
                "firstLine": data.firstLine,
                "number": data.number,
                "addMeaningToNumber": data.addMeaningToNumber,
                "lastLine": data.lastLine
            } for data in Content.objects.all()
        ]
        return Response(output)
    
    def post(self, request):
        serializer = ContentSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)