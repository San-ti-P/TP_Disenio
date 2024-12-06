from django.db import models
from django.utils.translation import gettext_lazy as _
from .Aula import Aula

class AulaMultimedio(Aula):
    class Meta:
        db_table = "AulaMultimedio"

    aula_ptr = models.OneToOneField(Aula, on_delete=models.CASCADE, primary_key=True, db_column="nro_aula", parent_link=True)
    televisor = models.BooleanField()
    canion = models.BooleanField()
    ventilador = models.BooleanField()
    computadora = models.BooleanField()

    def get_televisor(self):
        return self.televisor
    def get_canion(self):
        return self.canion
    def get_ventilador(self):
        return self.ventilador
    def get_computadora(self):
        return self.computadora
    
    def set_televisor(self, televisor):
        self.televisor = televisor
    def set_canion(self, canion):
        self.canion = canion
    def set_ventilador(self, ventilador):
        self.ventilador = ventilador
    def set_computadora(self, computadora):
        self.computadora = computadora