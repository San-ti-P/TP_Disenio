from abc import ABC

class ActividadDAO(ABC):
    """Interfaz encargada de definir el protocolo para persistir datos de la clase Actividad"""

    def __init__(self, tipo_actividad_DAO, docente_DAO):
        self.tipo_actividad_DAO = tipo_actividad_DAO
        self.docente_DAO = docente_DAO

    def create_actividad(self, actividad):
        pass

    def delete_actividad(self, id_actividad):
        pass

    def getAll_actividad(self):
        pass

    def update_actividad(self, actividad):
        pass