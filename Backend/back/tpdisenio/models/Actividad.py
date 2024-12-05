from django.db import models
from django.utils.translation import gettext_lazy as _
from .Docente import Docente
#from .TipoActividad import TipoActividad

class Actividad(models.Model):
    class Meta:
        db_table = "Actividad"

    id_actividad_historia = models.AutoField(primary_key=True)
    id_actividad = models.IntegerField()
    nombre = models.CharField(max_length=40)
    descripcion = models.DateField(max_length=100)
    #tipo_actividad = models.ForeignKey(TipoActividad, on_delete=models.CASCADE, db_column="id_tipo_actividad")
    docente = models.ForeignKey(Docente, on_delete=models.PROTECT, db_column="id_docente")
    activo = models.BooleanField(default=True)
    fecha_baja = models.DateField(blank=True, default=None, null=True)

    def get_id_actividad_historia(self):
        return self.id_actividad_historia
    def get_id_actividad(self):
        return self.id_actividad
    def get_nombre(self):
        return self.nombre
    def get_descripcion(self):
        return self.descripcion
    #def get_tipo_actividad(self):
    #    return self.tipo_actividad
    def get_docente(self):
        return self.docente
    def get_activo(self):
        return self.activo
    def get_fecha_baja(self):
        return self.fecha_baja
    
    def set_id_actividad_historia(self, id):
        self.id_actividad_historia = id
    def set_id_actividad(self, id):
        self.id_actividad = id
    def set_nombre(self, nombre):
        self.nombre = nombre
    def set_descripcion(self, descripcion):
        self.descripcion = descripcion
    #def set_tipo_actividad(self, tipo_actividad):
    #    self.tipo_actividad = tipo_actividad
    def set_docente(self, docente):
        self.docente = docente
    def set_activo(self, activo):
        self.activo = activo
    def set_fecha_baja(self, fecha_baja):
        self.fecha_baja = fecha_baja