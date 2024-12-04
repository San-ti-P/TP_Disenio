from abc import ABC

class AulaInformaticaDAO(ABC):
    """Interfaz encargada de definir el protocolo para persistir datos de la clase Aula Informatica"""

    def create_informatica(self, aula_informatica):
        pass

    def delete_informatica(self, nro_aula):
        pass

    def getAll_informatica(self):
        pass

    def update_informatica(self, aula_informatica):
        pass

    def get_avalible(self):
        pass