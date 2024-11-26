from django.db import models
from django.utils.translation import gettext_lazy as _

class Periodo(models.Model):
    class Meta:
        db_table = "Periodo"

    class TipoPeriodo(models.TextChoices):
        ANUAL = "Anual"
        PRIMER_CUATRIMESTRE = "Primer Cuatrimestre"
        SEGUNDO_CUATRIMESTRE = "Segundo Cuatrimestre"
    
    #id_periodo = models.AutoField(primary_key=True)
    id_periodo = models.CharField(max_length=10, primary_key=True)
    tipo = models.CharField(max_length=25, choices=TipoPeriodo)
    anio = models.IntegerField()
    fecha_inicio = models.DateField()
    fecha_fin = models.DateField()