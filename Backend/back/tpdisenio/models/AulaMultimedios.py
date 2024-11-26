from django.db import models
from django.utils.translation import gettext_lazy as _
from .Aula import Aula

class AulaMultimedios(Aula):
    class Meta:
        db_table = "AulaMultimedios"

    aula_ptr = models.OneToOneField(Aula, on_delete=models.CASCADE, primary_key=True, db_column="nro_aula", parent_link=True)
    televisor = models.BooleanField()
    canion = models.BooleanField()
    ventilador = models.BooleanField()
    computadora = models.BooleanField()