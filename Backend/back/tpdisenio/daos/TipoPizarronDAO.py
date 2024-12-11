from abc import ABC

class TipoPizarronDAO(ABC):
    """Interfaz encargada de definir el protocolo para persistir datos de la clase TipoPizarron"""

    def create_tipo_pizarron(self, tipo_pizarron):
        pass

    def delete_tipo_pizarron(self, id_tipo_pizarron):
        pass

    def get_all_tipo_pizarron(self):
        pass

    def update_tipo_pizarron(self, tipo_pizarron):
        pass