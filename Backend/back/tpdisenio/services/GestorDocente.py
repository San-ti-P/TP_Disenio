from ..models import Docente
# class DocenteDTO(object):
#     def __init__(self, id, apellido, nombre, correo) -> None:
#         self.id_docente = id
#         self.apellido = apellido
#         self.nombre = nombre
#         self.correo = correo
    
#     def get_id(self):
#         return self.id_docente
#     def get_nombre(self):
#         return self.nombre
#     def get_apellido(self):
#         return self.apellido
#     def get_correo(self):
#         return self.correo


class GestorDocente():

    def alta_docente(self, docente_DTO): 
        docente = Docente(id_docente=docente_DTO.get_id_docente(), apellido=docente_DTO.get_apellido(), nombre=docente_DTO.get_nombre(), correo_contacto=docente_DTO.get_correo_contacto(), activo=True, fecha_baja=None)
        #self.docente_DAO.create_docente(docente)
        return docente

    def obtener_docentes(self):
        docentes = [
            Docente(id_docente=1, apellido="Scagnetti", nombre="Olga", correo_contacto="oscagnetti@frsf.utn.edu.ar"),
            Docente(id_docente=2, apellido="Ramirez", nombre="Sandra", correo_contacto="scramirez@frsf.utn.edu.ar"),
            Docente(id_docente=3, apellido="Dlugovitzky", nombre="Fabio", correo_contacto="fduglovi@frsf.utn.edu.ar"),
            Docente(id_docente=4, apellido="Budini", nombre="Francisco", correo_contacto="fgbudini@frsf.utn.edu.ar"),
            Docente(id_docente=5, apellido="Enrique", nombre="Claudio", correo_contacto="cenrique@frsf.utn.edu.ar"),
            Docente(id_docente=6, apellido="Kowalkoski", nombre="Maria Lorena", correo_contacto="lkowalkoski@frsf.utn.edu.ar"),
            Docente(id_docente=7, apellido="Puppo", nombre="Juan Pablo Damian", correo_contacto="jpuppo@frsf.utn.edu.ar"),
            Docente(id_docente=8, apellido="Cordero Gonzalez", nombre="Penelope", correo_contacto="pcorderogonzalez@frsf.utn.edu.ar"),
        ]
        return docentes