import datetime

from .TipoPizarronDAO import TipoPizarronDAO
from ..models import TipoPizarron

class SQLTipoPizarronDAO(TipoPizarronDAO):
    """Clase encargada de implementar el protocolo para persistir datos de la clase TipoPizarron en una BDD SQL (PostgreSQL)"""

    def create_tipo_pizarron(self, tipo_pizarron):
        tipo_pizarron.save()

    def delete_tipo_pizarron(self, id_tipo_pizarron):
        tipo_pizarron = TipoPizarron.objects.filter(id_tipo_pizarron=id_tipo_pizarron)
        if len(tipo_pizarron)==1:
            tipo_pizarron = tipo_pizarron[0]
            tipo_pizarron.set_activo(False)
            tipo_pizarron.set_fecha_baja(datetime.date.today())
            tipo_pizarron.save()

    def getAll_tipo_pizarron(self):
        return TipoPizarron.objects.all()

    def update_tipo_pizarron(self, tipo_pizarron):
        tipo_pizarron.save()