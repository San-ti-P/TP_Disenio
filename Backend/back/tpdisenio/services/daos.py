from ..models import Bedel, Administrador
from abc import ABC
from django.core.exceptions import ObjectDoesNotExist

class AdministradorDAO(ABC):
    """Interfaz encargada de definir el protocolo para persistir datos de la clase Administrador"""
    #@staticmethod
    def create_administrador(self, bedel):
        pass

    #@staticmethod
    def get_administrador(self, id_bedel):
        pass

    #@staticmethod
    def get_id_administrador(self):
        pass

    #@staticmethod
    def update_administrador(self, **kwargs):
       pass

class BedelDAO(ABC):
    """Interfaz encargada de definir el protocolo para persistir datos de la clase Bedel"""
    #@staticmethod
    def create_bedel(self, bedel):
        pass

    #@staticmethod
    def get_bedel(self, id_bedel):
        pass

    #@staticmethod
    def get_id_bedel(self):
        pass

    #@staticmethod
    def update_bedel(self, **kwargs):
       pass

class SQLAdministradorDAO(AdministradorDAO):
    """Clase encargada de implementar el protocolo para persistir datos de la clase Administrador en una BDD SQL (PostgreSQL)"""
    #@staticmethod
    def create_administrador(self, administrador):
        administrador.save()

    #@staticmethod
    def get_administrador(self, id_administrador):
        try:
            return Administrador.objects.get(id=id_administrador)
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

class SQLBedelDAO(BedelDAO):
    """Clase encargada de implementar el protocolo para persistir datos de la clase Bedel en una BDD SQL (PostgreSQL)"""
    #@staticmethod
    def create_bedel(self, bedel):
        bedel.save()

    #@staticmethod
    def get_bedel(self, id_bedel):
        try:
            return Bedel.objects.get(id=id_bedel)
        except ObjectDoesNotExist:
            return None

    #@staticmethod
    def get_id_bedel(self):
        return Bedel.objects.values_list('id_usuario', flat=True)

    #@staticmethod
    def update_bedel(self, **kwargs):
        try:
            for key, value in kwargs.items():
                setattr(self.bedel, key, value)
            self.bedel.save()
        except ObjectDoesNotExist:
            return None