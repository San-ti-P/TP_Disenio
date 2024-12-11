import datetime
from django.core.exceptions import ObjectDoesNotExist

from .AdministradorDAO import AdministradorDAO
from ..models import Administrador

class SQLAdministradorDAO(AdministradorDAO):
    """Clase encargada de implementar el protocolo para persistir datos de la clase Administrador en una BDD SQL (PostgreSQL)"""

    def create_administrador(self, administrador):
        administrador.save()

    def delete_administrador(self, id_administrador):
        administrador = self.get_administrador(id_administrador)
        administrador.set_activo(False)
        administrador.set_fecha_baja(datetime.date.today())
        administrador.save()

    def get_all_administrador(self):
        return Administrador.objects.all()

    def update_administrador(self, administrador):
        administrador.save()
    
    def get_administrador(self, id_administrador):
        try:
            return Administrador.objects.get(id_usuario=id_administrador)
        except ObjectDoesNotExist:
            return None

    def get_id_administrador(self):
        return Administrador.objects.values_list('id_usuario', flat=True)
