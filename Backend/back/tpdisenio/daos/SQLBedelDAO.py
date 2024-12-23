import datetime
from django.core.exceptions import ObjectDoesNotExist

from .BedelDAO import BedelDAO
from ..models import Bedel

class SQLBedelDAO(BedelDAO):
    """Clase encargada de implementar el protocolo para persistir datos de la clase Bedel en una BDD SQL (PostgreSQL)"""

    def create_bedel(self, bedel):
        bedel.save()

    def delete_bedel(self, id_bedel):
        bedel = self.get_bedel(id_bedel)
        bedel.set_activo(False)
        bedel.set_fecha_baja(datetime.date.today())
        bedel.save()

    def get_all_bedel(self):
        return Bedel.objects.filter(activo=True)

    def update_bedel(self, bedel):
        bedel.save()
    
    def get_bedel(self, id_bedel):
        try:
            return Bedel.objects.get(id_usuario=id_bedel, activo=True)
        except ObjectDoesNotExist:
            return None

    def get_id_bedel(self):
        return Bedel.objects.values_list('id_usuario', flat=True)

    def get_bedel_criterio(self, apellido, turno):
        if len(apellido) == 0:
            if len(turno) == 0:
                return self.get_all_bedel()
            
            return Bedel.objects.filter(turno=turno, activo=True)
        
        if len(turno) == 0:
            return Bedel.objects.filter(apellido__iexact=apellido, activo=True)

        return Bedel.objects.filter(apellido__iexact=apellido, turno=turno, activo=True)
