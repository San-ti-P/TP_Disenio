from django.db import models
from django.utils.translation import gettext_lazy as _
from .Aula import Aula

class AulaInformatica(models.Model):
    class Meta:
        db_table = "AulaInformatica"

    aula_ptr = models.OneToOneField(Aula, on_delete=models.CASCADE, primary_key=True, db_column="nro_aula", parent_link=True)
    cant_PCs = models.PositiveSmallIntegerField()
    canion = models.BooleanField()
