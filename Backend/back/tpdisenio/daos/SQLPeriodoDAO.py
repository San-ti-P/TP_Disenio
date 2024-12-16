import datetime

from .PeriodoDAO import PeriodoDAO
from ..models import Periodo

class SQLPeriodoDAO(PeriodoDAO):
    """Clase encargada de implementar el protocolo para persistir datos de la clase Periodo en una BDD SQL (PostgreSQL)"""

    def create_periodo(self, periodo):
        periodo.save()

    def delete_periodo(self, id_periodo):
        periodo = Periodo.objects.filter(id_periodo=id_periodo, activo=True)
        if len(periodo)==1:
            periodo = periodo[0]
            periodo.set_activo(False)
            periodo.set_fecha_baja(datetime.date.today())
            periodo.save()

    def get_all_periodo(self):
        return Periodo.objects.filter(activo=True)

    def update_periodo(self, periodo):
        periodo.save()

    def get_periodo_by_year(self, tipo_periodo, anio):
        periodos = Periodo.objects.filter(tipo=tipo_periodo, anio=anio, activo=True)
        if len(periodos) > 0:
            return periodos[0]
        return None