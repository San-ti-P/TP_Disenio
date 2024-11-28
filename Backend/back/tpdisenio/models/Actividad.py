from django.db import models
from django.utils.translation import gettext_lazy as _
from .Docente import Docente
from .TipoActividad import TipoActividad

class Actividad(models.Model):
    class Meta:
        db_table = "Actividad"

    #id_actividad_historia = models.AutoField(primary_key=True)
    #id_actividad = models.IntegerField()
    id_actividad_historia = models.CharField(max_length=10, primary_key=True)
    id_actividad = models.CharField(max_length=10)
    nombre = models.CharField(max_length=40)
    descripcion = models.DateField(max_length=100)
    id_tipo_actividad = models.ForeignKey(TipoActividad, on_delete=models.CASCADE, db_column="id_tipo_actividad")
    id_docente = models.ForeignKey(Docente, on_delete=models.PROTECT, db_column="id_docente")