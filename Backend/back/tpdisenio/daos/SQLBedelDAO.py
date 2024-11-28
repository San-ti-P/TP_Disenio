from .BedelDAO import BedelDAO
from ..models import Bedel
from django.core.exceptions import ObjectDoesNotExist

class SQLBedelDAO(BedelDAO):
    """Clase encargada de implementar el protocolo para persistir datos de la clase Bedel en una BDD SQL (PostgreSQL)"""
    #@staticmethod
    def create_bedel(self, bedel):
        bedel.save()

    #@staticmethod
    def get_bedel(self, id_bedel):
        try:
            return Bedel.objects.get(id_usuario=id_bedel)
        except ObjectDoesNotExist:
            return None

    #@staticmethod
    def get_id_bedel(self):
        return Bedel.objects.values_list('id_usuario', flat=True)

    #@staticmethod
    def update_bedel(self, bedel):
        try:
            bedel.save()
        except ObjectDoesNotExist:
            return None

    def get_bedel_criterio(self, apellido, turno):
        if len(apellido) == 0:
            if len(turno) == 0:
                try:
                    return Bedel.objects.all()
                except ObjectDoesNotExist:
                    return None
                
            try:
                return Bedel.objects.filter(turno=turno)
            except ObjectDoesNotExist:
                return None
        
        if len(turno) == 0:
            try:
                return Bedel.objects.filter(apellido=apellido)
            except ObjectDoesNotExist:
                return None
        
        try:
            return Bedel.objects.filter(apellido=apellido, turno=turno)
        except ObjectDoesNotExist:
            return None