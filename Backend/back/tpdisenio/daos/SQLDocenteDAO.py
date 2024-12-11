import datetime

from .DocenteDAO import DocenteDAO
from ..models import Docente

class SQLDocenteDAO(DocenteDAO):
    """Clase encargada de implementar el protocolo para persistir datos de la clase Docente en una BDD SQL (PostgreSQL)"""

    def create_docente(self, docente):
        docente.save()

    def delete_docente(self, id_docente_historia):
        docente = Docente.objects.filter(id_docente_historia=id_docente_historia)
        if len(docente)==1:
            docente = docente[0]
            docente.set_activo(False)
            docente.set_fecha_baja(datetime.date.today())
            docente.save()

    def get_all_docente(self):
        return Docente.objects.all()

    def update_docente(self, docente):
        docente.save()