from ..models import Aula
from ..daos import SQLAulaInformaticaDAO, SQLAulaMultimedioDAO, SQLAulaSinAdicionalesDAO


class GestorAula():
    """Clase encargada de suministrar todo la lógica concerniente a la clase Aula"""
    def __init__(self, aula_sin_adicionales_DAO, aula_multimedio_DAO, aula_informatica_DAO) -> None:
        
        self.aula_sin_adicionales_DAO = aula_sin_adicionales_DAO
        self.aula_multimedio_DAO = aula_multimedio_DAO
        self.aula_informatica_DAO = aula_informatica_DAO

    def listar_reservaciones(self, nro_aula):
        pass

    def get_aula(self, nro_aula):
        aula = self.aula_informatica_DAO.get_aula(nro_aula)
        if aula is None:
            aula = self.aula_multimedio_DAO.get_aula(nro_aula)
            if aula is None:
                aula = self.aula_sin_adicionales_DAO.get_aula(nro_aula)
        return aula

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

    def obtener_aulas_disponibles(self, capacidad, fecha, hora_inicio, duracion, tipo):
        
        match tipo:
            case "Sin recursos adicionales":
                aulas_reserva = self.aula_sin_adicionales_DAO.get_available(capacidad, fecha, hora_inicio, duracion)
                if len(aulas_reserva) == 0:
                    aulas_reserva = self.aula_sin_adicionales_DAO.calcular_reservacion_menor_diferencia(capacidad, fecha, hora_inicio, duracion)
            case "Multimedio":
                aulas_reserva = self.aula_multimedio_DAO.get_available(capacidad, fecha, hora_inicio, duracion)
                if len(aulas_reserva) == 0:
                    aulas_reserva = self.aula_multimedio_DAO.calcular_reservacion_menor_diferencia(capacidad, fecha, hora_inicio, duracion)
            case "Informatica":
                aulas_reserva = self.aula_informatica_DAO.get_available(capacidad, fecha, hora_inicio, duracion)
                if len(aulas_reserva) == 0:
                    aulas_reserva = self.aula_informatica_DAO.calcular_reservacion_menor_diferencia(capacidad, fecha, hora_inicio, duracion)
        
        return aulas_reserva

    
