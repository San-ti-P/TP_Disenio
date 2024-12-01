from abc import ABC

class ReservaDAO(ABC):
    """Interfaz encargada de definir el protocolo para persistir datos de la clase Reserva"""

    def __init__(self, bedel_DAO, periodo_DAO, actividad_DAO, reservacion_DAO):
        self.bedel_DAO = bedel_DAO
        self.periodo_DAO = periodo_DAO
        self.actividad_DAO = actividad_DAO
        self.reservacion_DAO = reservacion_DAO

    def create_reserva(self, reserva):
        pass

    def delete_reserva(self, id_reserva):
        pass

    def getAll_reserva(self):
        pass

    def update_reserva(self, reserva):
        pass