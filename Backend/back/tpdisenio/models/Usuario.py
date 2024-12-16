from django.db import models
from django.utils.translation import gettext_lazy as _

class Usuario(models.Model):
    class Meta:
        db_table = "Usuario"

    id_usuario = models.CharField(max_length=10, primary_key=True)
    contrasenia = models.BinaryField(max_length=60)
    nombre = models.CharField(max_length=30)
    apellido = models.CharField(max_length=30)
    activo = models.BooleanField(default=True)
    fecha_baja = models.DateField(blank=True, default=None, null=True)

    def get_id_usuario(self):
        return self.id_usuario
    def get_contrasenia(self):
        return self.contrasenia
    def get_apellido(self):
        return self.apellido
    def get_nombre(self):
        return self.nombre
    def get_activo(self):
        return self.activo
    def get_fecha_baja(self):
        return self.fecha_baja
    
    def set_id_usuario(self, id):
        self.id_usuario = id
    def set_contrasenia(self, contrasena):
        self.contrasenia = contrasena
    def set_apellido(self, apellido):
        self.apellido = apellido
    def set_nombre(self, nombre):
        self.nombre = nombre
    def set_activo(self, activo):
        self.activo = activo
    def set_fecha_baja(self, fecha_baja):
        self.fecha_baja = fecha_baja
