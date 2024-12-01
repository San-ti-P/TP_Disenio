import datetime

from .ActividadDAO import ActividadDAO
from ..models import Actividad

class SQLActividadDAO(ActividadDAO):
    """Clase encargada de implementar el protocolo para persistir datos de la clase Actividad en una BDD SQL (PostgreSQL)"""

    def create_actividad(self, actividad):
        self.tipo_actividad_DAO.create_tipo_actividad(actividad.get_tipo_actividad())
        self.docente_DAO.create_docente(actividad.get_docente())
        actividad.save()

    def delete_actividad(self, id_actividad_historia):
        actividad = Actividad.objects.filter(id_actividad_historia=id_actividad_historia)
        if len(actividad)==1:
            actividad = actividad[0]
            self.docente_DAO.delete_docente(actividad.get_docente().get_id_docente_historia())
            actividad.set_activo(False)
            actividad.set_fecha_baja(datetime.date.today())
            actividad.save()

    def getAll_actividad(self):
        return Actividad.objects.all()

    def update_actividad(self, actividad):
        self.tipo_actividad_DAO.update_tipo_actividad(actividad.get_tipo_actividad())
        self.docente_DAO.update_docente(actividad.get_docente())
        actividad.save()