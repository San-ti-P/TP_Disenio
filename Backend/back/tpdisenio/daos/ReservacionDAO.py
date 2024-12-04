from abc import ABC

class ReservacionDAO(ABC):
    """Interfaz encargada de definir el protocolo para persistir datos de la clase Reservacion"""
    
    def __init__(self, aula_sin_adicionales_DAO, aula_multimedios_DAO, aula_informatica_DAO):
        self.aula_sin_adicionales_DAO = aula_sin_adicionales_DAO
        self.aula_multimedios_DAO = aula_multimedios_DAO
        self.aula_informatica_DAO = aula_informatica_DAO

    def create_reservacion(self, reservacion):
        pass

    def delete_reservacion(self, id_reservacion):
        pass

    def getAll_reservacion(self):
        pass

    def update_reservacion(self, reservacion):
        pass