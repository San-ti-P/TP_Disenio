from django.db import models
from django.utils.translation import gettext_lazy as _
from .Aula import Aula
from .Reserva import Reserva

class Reservacion(models.Model):
    class Meta:
        db_table = "Reservacion"

    class DiaSemana(models.TextChoices):
        LUNES = "Lunes"
        MARTES = "Martes"
        MIERCOLES = "Miercoles"
        JUEVES = "Jueves"
        VIERNES = "Viernes"
        SABADO = "Sabado"
        DOMINGO = "Domingo"
    
    id_reservacion = models.CharField(max_length=10, primary_key=True)
    fecha = models.DateField()
    duracion = models.PositiveSmallIntegerField()
    dia = models.CharField(max_length=12, choices=DiaSemana)
    hora_inicio = models.TimeField()
    nro_aula = models.ForeignKey(Aula, on_delete=models.PROTECT, db_column="nro_aula")
    id_reserva = models.ForeignKey(Reserva, on_delete=models.PROTECT, db_column="id_reserva")

