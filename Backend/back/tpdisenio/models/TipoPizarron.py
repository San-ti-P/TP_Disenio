from django.db import models
from django.utils.translation import gettext_lazy as _

class TipoPizarron(models.Model):
    class Meta:
        db_table = "TipoPizarron"

    #id_tipo_pizarron = models.AutoField(primary_key=True)
    id_tipo_pizarron = models.CharField(max_length=5, primary_key=True)
    nombre = models.CharField(max_length=20)
    descripcion = models.CharField(max_length=50)
