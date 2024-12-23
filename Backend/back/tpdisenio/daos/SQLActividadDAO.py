import datetime

from .ActividadDAO import ActividadDAO
from ..models import Actividad

class SQLActividadDAO(ActividadDAO):
    """Clase encargada de implementar el protocolo para persistir datos de la clase Actividad en una BDD SQL (PostgreSQL)"""

    def create_actividad(self, actividad):
        self.docente_DAO.create_docente(actividad.get_docente())
        actividad.save()

    def delete_actividad(self, id_actividad_historia):
        actividad = Actividad.objects.filter(id_actividad_historia=id_actividad_historia, activo=True)
        if len(actividad)==1:
            actividad = actividad[0]
            self.docente_DAO.delete_docente(actividad.get_docente().get_id_docente_historia())
            actividad.set_activo(False)
            actividad.set_fecha_baja(datetime.date.today())
            actividad.save()

    def get_all_actividad(self):
        return Actividad.objects.filter(activo=True)

    def update_actividad(self, actividad):
        self.docente_DAO.update_docente(actividad.get_docente())
        actividad.save()