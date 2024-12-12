from abc import ABC

class AulaMultimedioDAO(ABC):
    """Interfaz encargada de definir el protocolo para persistir datos de la clase AulaMultimedio"""

    def create_multimedio(self, aula_multimedio):
        pass

    def delete_multimedio(self, nro_aula):
        pass

    def get_aula(self, nro_aula):
        pass

    def get_all_multimedio(self):
        pass

    def update_multimedio(self, aula_multimedio):
        pass

    def get_available(self):
        pass

    def consultar_disponibilidad_aula(self, nro_aula, fecha, hora_inicio, duracion):
        pass

    def calcular_reservacion_menor_diferencia(self, capacidad, fecha, hora_inicio, duracion):
        pass