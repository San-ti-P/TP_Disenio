
class AulaDTO():
    def __init__(self, nro_aula, piso, capacidad, caracteristicas):
        self.nro_aula = nro_aula
        self.piso = piso
        self.capacidad = capacidad
        self.caracteristicas = caracteristicas
    
    def get_nro_aula(self):
        return self.nro_aula
    def get_piso(self):
        return self.piso
    def get_capacidad(self):
        return self.capacidad
    def get_caracteristicas(self):
        return self.caracteristicas