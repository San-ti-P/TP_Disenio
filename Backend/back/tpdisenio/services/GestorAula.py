from ..models import Aula
from ..daos import SQLAulaInformaticaDAO, SQLAulaMultimedioDAO, SQLAulaSinAdicionalesDAO

class AulaReservaDTO():
    def __init__(self, aula, reservacion, docente):
        self.aula = aula
        self.reservacion = reservacion
        self.docente = docente

class GestorAula():
    """Clase encargada de suministrar todo la lógica concerniente a la clase aula"""
    def __init__(self, gestor_sesion, AulaSinAdicionales_DAO, AulaMultimedio_DAO, AulaInformatica_DAO) -> None:
        
        self.gestor_sesion = gestor_sesion
        self.AulaSinAdicionales_DAO = AulaSinAdicionales_DAO
        self.AulaMultimedio_DAO = AulaMultimedio_DAO
        self.AulaInformatica_DAO = AulaInformatica_DAO

    def agregar_reservacion(self, reservacion, aula):
        aula.add_reservacion(reservacion)

    def listar_reservaciones(self,nro_aula):
        pass

    def get_aula(self, nro_aula):
        aula = self.AulaInformatica_DAO.get_aula(nro_aula)
        if (aula==None):
            aula = self.AulaMultimedio_DAO.get_aula(nro_aula)
            if(aula==None):
                aula = self.AulaSinAdicionales_DAO.get_aula(nro_aula)
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

    def obtener_aulas_disponibles(self, capacidad, dia, horario_inicio, duracion, tipo):
        aulas = []
        if tipo == "AulaSinAdicionales":
            aulas = self.AulaSinAdicionales_DAO.get_available(capacidad, dia, horario_inicio, duracion)
        
        aulas_reserva = []
        if len(aulas) == 0:
            if tipo == "AulaSinAdicionales":
                aulas = self.AulaSinAdicionales_DAO.calcular_reservacion_menor_diferencia(capacidad, dia, horario_inicio, duracion)
        else:
            for aula in aulas:
                aulas_reserva.append(AulaReservaDTO(Aula(nro_aula=aula['nro_aula'], piso=aula['piso'], capacidad=aula['capacidad']), None, None))
                print("AulaReserva: ", aula)
        
        return aulas_reserva

    def obtener_aulas_menor_solapamiento(self, capacidad, dia,
    horario_inicio, duracion, tipo):
        pass
    
