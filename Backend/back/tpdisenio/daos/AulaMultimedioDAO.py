from abc import ABC

class AulaMultimedioDAO(ABC):
    """Interfaz encargada de definir el protocolo para persistir datos de la clase Aula Multimedio"""

    def create_multimedio(self, aula_multimedio):
        pass

    def delete_multimedio(self, nro_aula):
        pass

    def getAll_multimedio(self):
        pass

    def update_multimedio(self, aula_multimedio):
        pass

    def get_avalible(self):
        pass