from abc import ABC

class AdministradorDAO(ABC):
    """Interfaz encargada de definir el protocolo para persistir datos de la clase Administrador"""

    def create_administrador(self, administrador):
        pass

    def delete_administrador(self, id_administrador):
        pass

    def get_all_administrador(self):
        pass

    def update_administrador(self, administrador):
        pass

    def get_administrador(self, id_administrador):
        pass

    def get_id_administrador(self):
        pass


