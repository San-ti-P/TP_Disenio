from django.db import models
from django.utils.translation import gettext_lazy as _
from .Aula import Aula

class AulaInformatica(Aula):
    class Meta:
        db_table = "AulaInformatica"

    aula_ptr = models.OneToOneField(Aula, on_delete=models.CASCADE, primary_key=True, db_column="nro_aula", parent_link=True)
    cant_PCs = models.PositiveSmallIntegerField()
    canion = models.BooleanField()

    def get_cant_PCs(self):
        return self.cant_PCs
    def get_canion(self):
        return self.canion
    
    def set_cant_PCs(self, cant):
        self.cant_PCs = cant
    def set_canion(self, canion):
        self.canion = canion