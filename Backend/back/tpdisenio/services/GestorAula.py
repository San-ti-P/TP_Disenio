from ..models import Aula

class GestorAula():
    """Clase encargada de suministrar todo la lógica concerniente a la clase aula"""
    def __init__(self, gestor_sesion, AulaSinAdicionales_DAO, AulaMultimedio_DAO, AulaInformatica_DAO) -> None:
        
        self.gestor_sesion = gestor_sesion
        self.AulaSinAdicionales_DAO = AulaSinAdicionales_DAO
        self.AulaMultimedio_DAO = AulaMultimedio_DAO
        self.AulaInformatica_DAO = AulaInformatica_DAO

    def agregar_reservacion(self, nro_aula, aula):
        pass

    def listar_reservaciones(self,nro_aula):
        pass

    def get_aula(self, nro_aula):
        pass

    def buscar_aula(self, nro_aula, capacidad):
        pass

    def alta_sin_recursos(self):
        pass

    def baja_sin_recursos(self):
        pass

    def modificar_sin_recursos(self):
        pass

    def alta_multimedio(self):
        pass

    def baja_multimedio(self):
        pass

    def modificar_multimedio(self):
        pass

    def alta_informatica(self): 
        pass

    def baja_informatica(self):
        pass

    def modificar_informatica(self):
        pass

    def obtener_aulas_disponibles(self, capacidad, dia,
    horario_inicio, duracion, tipo):
        pass

    def obtener_aulas_menor_solapamiento(self, capacidad, dia,
    horario_inicio, duracion, tipo):
        pass
    
