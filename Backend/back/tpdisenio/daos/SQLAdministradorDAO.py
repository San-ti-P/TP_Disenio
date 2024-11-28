from .AdministradorDAO import AdministradorDAO
from ..models import Administrador
from django.core.exceptions import ObjectDoesNotExist

class SQLAdministradorDAO(AdministradorDAO):
    """Clase encargada de implementar el protocolo para persistir datos de la clase Administrador en una BDD SQL (PostgreSQL)"""
    #@staticmethod
    def create_administrador(self, administrador):
        administrador.save()

    #@staticmethod
    def get_administrador(self, id_administrador):
        try:
            return Administrador.objects.get(id_usuario=id_administrador)
        except ObjectDoesNotExist:
            return None

    #@staticmethod
    def get_id_administrador(self):
        return Administrador.objects.values_list('id_usuario', flat=True)

    #@staticmethod
    def update_administrador(self, **kwargs):
        try:
            for key, value in kwargs.items():
                setattr(self.administrador, key, value)
            self.administrador.save()
        except ObjectDoesNotExist:
            return None
