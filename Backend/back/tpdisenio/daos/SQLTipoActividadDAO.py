import datetime

from .TipoActividadDAO import TipoActividadDAO
from ..models import TipoActividad

class SQLTipoActividadDAO(TipoActividadDAO):
    """Clase encargada de implementar el protocolo para persistir datos de la clase TipoActividad en una BDD SQL (PostgreSQL)"""

    def create_tipo_actividad(self, tipo_actividad):
        tipo_actividad.save()

    def delete_tipo_actividad(self, id_tipo_actividad):
        tipo_actividad = TipoActividad.objects.filter(id_tipo_actividad=id_tipo_actividad)
        if len(tipo_actividad)==1:
            tipo_actividad = tipo_actividad[0]
            tipo_actividad.set_activo(False)
            tipo_actividad.set_fecha_baja(datetime.date.today())
            tipo_actividad.save()

    def getAll_tipo_actividad(self):
        return TipoActividad.objects.all()

    def update_tipo_actividad(self, tipo_actividad):
        tipo_actividad.save()