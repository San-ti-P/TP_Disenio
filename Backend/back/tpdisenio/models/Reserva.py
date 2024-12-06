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

    id_reserva = models.AutoField(primary_key=True)
    cantidad_alumnos = models.PositiveSmallIntegerField()
    fecha_solicitud = models.DateField()
    tipo = models.CharField(max_length=15, choices=TipoReserva)
    activo = models.BooleanField(default=True)
    fecha_baja = models.DateField(blank=True, default=None, null=True)
    periodo = models.ForeignKey(Periodo, on_delete=models.PROTECT, blank=True, null=True, db_column="id_periodo")
    actividad = models.ForeignKey(Actividad, on_delete=models.PROTECT, db_column="id_actividad")
    usuario = models.ForeignKey(Usuario, on_delete=models.PROTECT, db_column="id_usuario")
    
    reservaciones = []
    
    def add_reservacion(self, reservacion):
        self.reservaciones.append(reservacion)

    def get_id_reserva(self):
        return self.id_reserva
    def get_cantidad_alumnos(self):
        return self.cantidad_alumnos
    def get_fecha_solicitud(self):
        return self.fecha_solicitud
    def get_tipo(self):
        return self.tipo
    def get_activo(self):
        return self.activo
    def get_fecha_baja(self):
        return self.fecha_baja
    def get_periodo(self):
        return self.periodo
    def get_actividad(self):
        return self.actividad
    def get_usuario(self):
        return self.usuario
    def get_reservaciones(self):
        return self.reservaciones
    
    def set_id_reserva(self, id):
        self.id_reserva = id
    def set_cantidad_alumnos(self, id):
        self.cantidad_alumnos = id
    def set_fecha_solicitud(self, fecha_solicitud):
        self.fecha_solicitud = fecha_solicitud
    def set_tipo(self, tipo):
        self.tipo = tipo
    def set_activo(self, activo):
        self.activo = activo
    def set_fecha_baja(self, fecha_baja):
        self.fecha_baja = fecha_baja
    def set_periodo(self, periodo):
        self.periodo= periodo
    def set_actividad(self, actividad):
        self.actividad = actividad
    def set_usuario(self, usuario):
        self.usuario = usuario
    def add_reservacion(self, reservacion):
        self.reservaciones.append(reservacion)  
    def set_autor_reserva(self, usuario):
        self.set_usuario(usuario)
