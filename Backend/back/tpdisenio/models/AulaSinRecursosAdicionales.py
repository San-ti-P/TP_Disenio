from django.db import models
from django.utils.translation import gettext_lazy as _
from .Aula import Aula

class AulaSinRecursosAdicionales(Aula):
    class Meta:
        db_table = "AulaSinRecursosAdicionales"

    aula_ptr = models.OneToOneField(Aula, on_delete=models.CASCADE, primary_key=True, db_column="nro_aula", parent_link=True)
    ventilador = models.BooleanField()
