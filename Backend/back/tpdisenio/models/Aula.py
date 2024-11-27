from django.db import models
from django.utils.translation import gettext_lazy as _
from .TipoPizarron import TipoPizarron

class Aula(models.Model):
    class Meta:
        db_table = "Aula"

    class EstadoAula(models.TextChoices):
        HABILITADO = "Habilitado"
        DESHABILITADO = "Deshabilitado"
    
    nro_aula = models.CharField(max_length=25, primary_key=True)
    capacidad = models.PositiveSmallIntegerField()
    piso = models.CharField(max_length=20)
    aire_acondicionado = models.BooleanField()
    estado_aula = models.CharField(max_length=15, choices=EstadoAula)
    tiene_pizarrones = models.ManyToManyField(TipoPizarron, through="Tiene", related_name="aulas")

class Tiene(models.Model):
    class Meta:
        db_table = "Tiene"

    id = models.CharField(max_length=10, primary_key=True)
    nro_aula = models.ForeignKey(Aula, on_delete=models.CASCADE, db_column="nro_aula")
    id_tipo_pizarron = models.ForeignKey(TipoPizarron, on_delete=models.CASCADE, db_column="id_tipo_pizarron")

