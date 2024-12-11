from abc import ABC

class AulaSinAdicionalesDAO(ABC):
    """Interfaz encargada de definir el protocolo para persistir datos de la clase Aula Sin Adicionales"""

    def create_sin_adicionales(self, aula_sinAdicionales):
        pass

    def delete_sin_adicionales(self, nro_aula):
        pass

    def get_aula(self, nro_aula):
        pass

    def get_all_sin_adicionales(self):
        pass

    def update_sin_adicionales(self, aula_sinAdicionales):
        pass

    def get_available(self):
        pass

    def calcular_reservacion_menor_diferencia(self, capacidad, fecha, hora_inicio, duracion):
        pass