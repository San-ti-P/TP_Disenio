# Generated by Django 5.1.2 on 2024-12-09 19:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tpdisenio', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='actividad',
            name='descripcion',
            field=models.CharField(max_length=250),
        ),
    ]
