
class DocenteDTO(object):
    def __init__(self, id, apellido, nombre, correo) -> None:
        self.id_docente = id
        self.apellido = apellido
        self.nombre = nombre
        self.correo = correo

class GestorDocente():

    def alta_docente(self, id_docente):
        pass
    def guardar_docente(self, docente):
        pass

    def obtener_docentes(self):
        docentes = [
            DocenteDTO(1, "Scagnetti", "Olga", "oscagnetti@frsf.utn.edu.ar"),
            DocenteDTO(2, "Ramirez", "Sandra", "scramirez@frsf.utn.edu.ar"),
            DocenteDTO(3, "Dlugovitzky", "Fabio", "fduglovi@frsf.utn.edu.ar"),
            DocenteDTO(4, "Budini", "Francisco", "fgbudini@frsf.utn.edu.ar"),
            DocenteDTO(5, "Enrique", "Claudio", "cenrique@frsf.utn.edu.ar"),
            DocenteDTO(6, "Kowalkoski", "Maria Lorena", "lkowalkoski@frsf.utn.edu.ar"),
            DocenteDTO(7, "Puppo", "Juan Pablo Damian", "jpuppo@frsf.utn.edu.ar"),
            DocenteDTO(8, "Cordero Gonzalez", "Penelope", "pcorderogonzalez@frsf.utn.edu.ar"),
        ]
        return docentes