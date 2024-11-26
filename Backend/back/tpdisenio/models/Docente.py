from django.db import models
from django.utils.translation import gettext_lazy as _

class Docente(models.Model):
    class Meta:
        db_table = "Docente"

    #id_docente_historia = models.AutoField(primary_key=True)
    #id_docente = models.IntegerField()
    id_docente = models.CharField(max_length=10, primary_key=True)
    nombre = models.CharField(max_length=30)
    apellido = models.CharField(max_length=30)
    correo_contacto = models.EmailField(max_length=50)