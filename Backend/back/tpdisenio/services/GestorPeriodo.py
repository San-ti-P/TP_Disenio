from ..models import Periodo

class GestorPeriodo():
    def __init__(self, periodo_DAO) -> None:
        
        self.periodo_DAO = periodo_DAO

    def alta_periodo(self, tipo, anio): 
        pass

    def get_periodo(self, tipo, anio): 
        return self.periodo_DAO.get_periodo_by_year(tipo, anio)
