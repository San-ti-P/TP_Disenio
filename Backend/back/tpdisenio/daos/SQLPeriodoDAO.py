import datetime

from .PeriodoDAO import PeriodoDAO
from ..models import Periodo

class SQLPeriodoDAO(PeriodoDAO):
    """Clase encargada de implementar el protocolo para persistir datos de la clase Periodo en una BDD SQL (PostgreSQL)"""

    def create_periodo(self, periodo):
        periodo.save()

    def delete_periodo(self, id_periodo):
        periodo = Periodo.objects.filter(id_periodo=id_periodo)
        if len(periodo)==1:
            periodo = periodo[0]
            periodo.set_activo(False)
            periodo.set_fecha_baja(datetime.date.today())
            periodo.save()

    def getAll_periodo(self):
        return Periodo.objects.all()

    def update_periodo(self, periodo):
        periodo.save()