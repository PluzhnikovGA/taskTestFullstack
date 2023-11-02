# Generated by Django 4.2.7 on 2023-11-01 12:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Content',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstLine', models.CharField(max_length=15)),
                ('number', models.CharField(max_length=5)),
                ('addMeaningToNumber', models.CharField(blank=True, max_length=3)),
                ('lastLine', models.CharField(max_length=15)),
            ],
        ),
        migrations.CreateModel(
            name='Menu',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('menu', models.CharField(max_length=20)),
                ('route', models.CharField(max_length=100)),
            ],
        ),
    ]
