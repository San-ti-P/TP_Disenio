from abc import ABC

class BedelDAO(ABC):
    """Interfaz encargada de definir el protocolo para persistir datos de la clase Bedel"""

    def create_bedel(self, bedel):
        pass

    def delete_bedel(self, id_bedel):
        pass

    def getAll_bedel(self):
        pass

    def update_bedel(self, bedel):
        pass

    def get_bedel(self, id_bedel):
        pass

    def get_id_bedel(self):
        pass

    def get_bedel_criterio(self, apellido, turno):
        pass