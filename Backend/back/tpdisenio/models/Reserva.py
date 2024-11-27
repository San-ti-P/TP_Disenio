from django.db import models
from django.utils.translation import gettext_lazy as _
from .Actividad import Actividad
from .Periodo import Periodo
from .Usuario import Usuario

class Reserva(models.Model):
    class Meta:
        db_table = "Reserva"

    class TipoReserva(models.TextChoices):
        ESPORADICA = "Esporadica"
        PERIODICA = "Periodica"

    id_reserva = models.CharField(max_length=10, primary_key=True)
    cantidad_alumnos = models.PositiveSmallIntegerField()
    fecha_solicitud = models.DateField()
    tipo = models.CharField(max_length=15, choices=TipoReserva)
    id_periodo = models.ForeignKey(Periodo, on_delete=models.PROTECT, blank=True, null=True, db_column="id_periodo")
    id_actividad = models.ForeignKey(Actividad, on_delete=models.PROTECT, db_column="id_actividad")
    id_usuario = models.ForeignKey(Usuario, on_delete=models.PROTECT, db_column="id_usuario")
