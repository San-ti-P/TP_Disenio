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
    activo = models.BooleanField(default=True)
    fecha_baja = models.DateField(blank=True, default=None, null=True)

    def get_nro_aula(self):
        return self.nro_aula
    def get_capacidad(self):
        return self.capacidad
    def get_piso(self):
        return self.piso
    def get_aire_acondicionado(self):
        return self.aire_acondicionado
    def get_estado_aula(self):
        return self.estado_aula
    def get_pizarrones(self):
        return self.tiene_pizarrones
    def get_activo(self):
        return self.activo
    def get_fecha_baja(self):
        return self.fecha_baja
    
    def set_nro_aula(self, nro_aula):
        self.nro_aula = nro_aula
    def set_capacidad(self, capacidad):
        self.capacidad = capacidad
    def set_piso(self, piso):
        self.piso = piso
    def set_aire_acondicionado(self, aire_acondicionado):
        self.aire_acondicionado = aire_acondicionado
    def set_estado_aula(self, estado_aula):
        self.estado_aula = estado_aula
    def set_pizarrones(self, pizarrones):
        self.tiene_pizarrones = pizarrones
    def set_activo(self, activo):
        self.activo = activo
    def set_fecha_baja(self, fecha_baja):
        self.fecha_baja = fecha_baja

class Tiene(models.Model):
    class Meta:
        db_table = "Tiene"

    id = models.CharField(max_length=10, primary_key=True)
    nro_aula = models.ForeignKey(Aula, on_delete=models.CASCADE, db_column="nro_aula")
    id_tipo_pizarron = models.ForeignKey(TipoPizarron, on_delete=models.CASCADE, db_column="id_tipo_pizarron")

