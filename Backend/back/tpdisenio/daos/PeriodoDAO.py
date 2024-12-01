from abc import ABC

class PeriodoDAO(ABC):
    """Interfaz encargada de definir el protocolo para persistir datos de la clase Periodo"""

    def create_periodo(self, periodo):
        pass

    def delete_periodo(self, id_periodo):
        pass

    def getAll_periodo(self):
        pass

    def update_periodo(self, periodo):
        pass