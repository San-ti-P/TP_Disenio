from django.db import models
from django.utils.translation import gettext_lazy as _

class TipoActividad(models.Model):
    class Meta:
        db_table = "TipoActividad"

    #id_tipo_actividad = models.AutoField(primary_key=True)
    id_tipo_actividad = models.CharField(max_length=5, primary_key=True)
    nombre = models.CharField(max_length=20)
    descripcion = models.CharField(max_length=25)