from abc import ABC

class ActividadDAO(ABC):
    """Interfaz encargada de definir el protocolo para persistir datos de la clase Actividad"""

    def __init__(self, docente_DAO):
        self.docente_DAO = docente_DAO

    def create_actividad(self, actividad):
        pass

    def delete_actividad(self, id_actividad):
        pass

    def get_all_actividad(self):
        pass

    def update_actividad(self, actividad):
        pass