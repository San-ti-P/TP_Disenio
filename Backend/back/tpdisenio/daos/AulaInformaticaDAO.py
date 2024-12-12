from abc import ABC

class AulaInformaticaDAO(ABC):
    """Interfaz encargada de definir el protocolo para persistir datos de la clase AulaInformatica"""

    def create_informatica(self, aula_informatica):
        pass

    def delete_informatica(self, nro_aula):
        pass

    def get_aula(self, nro_aula):
        pass

    def get_all_informatica(self):
        pass

    def update_informatica(self, aula_informatica):
        pass

    def get_available(self):
        pass

    def consultar_disponibilidad_aula(self, nro_aula, fecha, hora_inicio, duracion):
        pass

    def calcular_reservacion_menor_diferencia(self, capacidad, fecha, hora_inicio, duracion):
        pass