from .models import Bedel, Administrador
from django.core.exceptions import ObjectDoesNotExist

class BedelDAO:
    @staticmethod
    def create_bedel(bedel):
        bedel.save()

    @staticmethod
    def get_bedel(id_bedel):
        try:
            return Bedel.objects.get(id=id_bedel)
        except ObjectDoesNotExist:
            return None

    @staticmethod
    def get_id_bedel():
        return Bedel.objects.values_list('id_usuario', flat=True)

    @staticmethod
    def update_bedel(self, **kwargs):
        try:
            for key, value in kwargs.items():
                setattr(self.bedel, key, value)
            self.bedel.save()
        except ObjectDoesNotExist:
            return None

class AdministradorDAO:
    @staticmethod
    def create_administrador(administrador):
        administrador.save()

    @staticmethod
    def get_administrador(id_administrador):
        try:
            return Administrador.objects.get(id=id_administrador)
        except ObjectDoesNotExist:
            return None

    @staticmethod
    def get_id_administrador():
        return administrador.objects.values_list('id_usuario', flat=True)

    @staticmethod
    def update_administrador(self, **kwargs):
        try:
            for key, value in kwargs.items():
                setattr(self.administrador, key, value)
            self.administrador.save()
        except ObjectDoesNotExist:
            return None
