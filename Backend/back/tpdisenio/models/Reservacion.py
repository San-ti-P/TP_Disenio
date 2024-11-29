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
    
    id_reservacion = models.AutoField(primary_key=True)
    fecha = models.DateField()
    duracion = models.PositiveSmallIntegerField()
    dia = models.CharField(max_length=12, choices=DiaSemana)
    hora_inicio = models.TimeField()
    activo = models.BooleanField(default=True)
    fecha_baja = models.DateField(blank=True, default=None, null=True)
    nro_aula = models.ForeignKey(Aula, on_delete=models.PROTECT, db_column="nro_aula")
    id_reserva = models.ForeignKey(Reserva, on_delete=models.PROTECT, db_column="id_reserva")
    
    def get_id_reservacion(self):
        return self.id_reservacion
    def get_fecha(self):
        return self.fecha
    def get_duracion(self):
        return self.duracion
    def get_dia(self):
        return self.dia
    def get_hora_inicio(self):
        return self.hora_inicio
    def get_activo(self):
        return self.activo
    def get_fecha_baja(self):
        return self.fecha_baja
    def get_aula(self):
        return self.nro_aula
    def get_reserva(self):
        return self.id_reserva
    
    def set_id_reservacion(self, id):
        self.id_reservacion = id
    def set_fecha(self, fecha):
        self.fecha = fecha
    def set_duracion(self, duracion):
        self.duracion = duracion
    def set_dia(self, dia):
        self.dia = dia
    def set_hora_inicio(self, hora_inicio):
        self.hora_inicio = hora_inicio
    def set_activo(self, activo):
        self.activo = activo
    def set_fecha_baja(self, fecha_baja):
        self.fecha_baja = fecha_baja
    def set_aula(self, aula):
        self.nro_aula = aula
    def set_reserva(self, reserva):
        self.id_reserva = reserva
    
