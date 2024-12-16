from django.db import models
from django.utils.translation import gettext_lazy as _

class Periodo(models.Model):
    class Meta:
        db_table = "Periodo"

    class TipoPeriodo(models.TextChoices):
        ANUAL = "Anual"
        PRIMER_CUATRIMESTRE = "Primer Cuatrimestre"
        SEGUNDO_CUATRIMESTRE = "Segundo Cuatrimestre"
        
    id_periodo = models.AutoField(primary_key=True)
    tipo = models.CharField(max_length=25, choices=TipoPeriodo)
    anio = models.IntegerField()
    fecha_inicio = models.DateField()
    fecha_fin = models.DateField()
    activo = models.BooleanField(default=True)
    fecha_baja = models.DateField(blank=True, default=None, null=True)

    def get_id_periodo(self):
        return self.id_periodo
    def get_tipo(self):
        return self.tipo
    def get_anio(self):
        return self.anio
    def get_fecha_inicio(self):
        return self.fecha_inicio
    def get_fecha_fin(self):
        return self.fecha_fin
    def get_activo(self):
        return self.activo
    def get_fecha_baja(self):
        return self.fecha_baja
    
    def set_id_periodo(self, id):
        self.id_periodo = id
    def set_tipo(self, tipo):
        self.tipo = tipo
    def set_anio(self, anio):
        self.anio = anio
    def set_fecha_inicio(self, fecha_inicio):
        self.fecha_inicio = fecha_inicio
    def set_fecha_fin(self, fecha_fin):
        self.fecha_fin = fecha_fin
    def set_activo(self, activo):
        self.activo = activo
    def set_fecha_baja(self, fecha_baja):
        self.fecha_baja = fecha_baja