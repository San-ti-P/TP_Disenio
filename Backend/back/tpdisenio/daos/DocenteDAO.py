from abc import ABC

class DocenteDAO(ABC):
    """Interfaz encargada de definir el protocolo para persistir datos de la clase Docente"""

    def create_docente(self, docente):
        pass

    def delete_docente(self, id_docente):
        pass

    def get_all_docente(self):
        pass

    def update_docente(self, docente):
        pass