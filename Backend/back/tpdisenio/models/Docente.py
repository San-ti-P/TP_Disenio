from django.db import models
from django.utils.translation import gettext_lazy as _

class Docente(models.Model):
    class Meta:
        db_table = "Docente"

    #id_docente = models.CharField(max_length=10, primary_key=True)

    id_docente_historia = models.AutoField(primary_key=True)
    id_docente = models.IntegerField()
    nombre = models.CharField(max_length=30)
    apellido = models.CharField(max_length=30)
    correo_contacto = models.EmailField(max_length=50)
    activo = models.BooleanField(default=True)
    fecha_baja = models.DateField(blank=True, default=None, null=True)

    def get_id_docente_historia(self):
        return self.id_docente_historia
    def get_id_docente(self):
        return self.id_docente
    def get_nombre(self):
        return self.nombre
    def get_apellido(self):
        return self.apellido
    def get_correo_contacto(self):
        return self.correo_contacto
    def get_activo(self):
        return self.activo
    def get_fecha_baja(self):
        return self.fecha_baja
    
    def set_id_docente_historia(self, id):
        self.id_docente_historia = id
    def set_id_docente(self, id_docente):
        self.id_docente = id_docente
    def set_nombre(self, nombre):
        self.nombre = nombre
    def set_apellido(self, apellido):
        self.apellido = apellido
    def set_correo_contacto(self, correo_contacto):
        self.correo_contacto = correo_contacto
    def set_activo(self, activo):
        self.activo = activo
    def set_fecha_baja(self, fecha_baja):
        self.fecha_baja = fecha_baja
