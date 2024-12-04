from abc import ABC

class AulaSinAdicionalesDAO(ABC):
    """Interfaz encargada de definir el protocolo para persistir datos de la clase Aula Sin Adicionales"""

    def create_sinAdicionales(self, aula_sinAdicionales):
        pass

    def delete_sinAdicionales(self, nro_aula):
        pass

    def getAll_sinAdicionales(self):
        pass

    def update_sinAdicionales(self, aula_sinAdicionales):
        pass

    def get_avalible(self):
        pass