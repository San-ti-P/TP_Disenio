from django.db import models
from django.utils.translation import gettext_lazy as _

class TipoPizarron(models.Model):
    class Meta:
        db_table = "TipoPizarron"

    #id_tipo_pizarron = models.CharField(max_length=5, primary_key=True)
    
    id_tipo_pizarron = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=20)
    descripcion = models.CharField(max_length=50)
    activo = models.BooleanField(default=True)
    fecha_baja = models.DateField(blank=True, default=None, null=True)

    def get_id_tipo_pizarron(self):
        return self.id_tipo_pizarron
    def get_nombre(self):
        return self.nombre
    def get_descripcion(self):
        return self.descripcion
    def get_activo(self):
        return self.activo
    def get_fecha_baja(self):
        return self.fecha_baja
    
    def set_id_tipo_pizarron(self, id):
        self.id_tipo_pizarron = id
    def set_nombre(self, nombre):
        self.nombre = nombre
    def set_descripcion(self, descripcion):
        self.descripcion = descripcion
    def set_activo(self, activo):
        self.activo = activo
    def set_fecha_baja(self, fecha_baja):
        self.fecha_baja = fecha_baja
