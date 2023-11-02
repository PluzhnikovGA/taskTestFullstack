from django.contrib import admin
from .models import *


class MenuAdmin(admin.ModelAdmin):
    list_display = 'pk', 'menu', 'route'


class ContentAdmin(admin.ModelAdmin):
    list_display = 'pk', 'firstLine', 'number', 'addMeaningToNumber', 'lastLine'


admin.site.register(Menu, MenuAdmin)
admin.site.register(Content, ContentAdmin)
