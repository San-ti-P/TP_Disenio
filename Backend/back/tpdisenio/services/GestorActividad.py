from ..models import Actividad#, TipoActividad

#class TipoActividadDTO(object):
#    def __init__(self, id, nombre, descripcion):
#        self.id_tipo_actividad = id
#        self.nombre = nombre
#        self.descripcion = descripcion

# class ActividadDTO(object):
#     def __init__(self, id, nombre, descripcion) -> None:
#         self.id_actividad = id
#         self.nombre = nombre
#         self.descripcion = descripcion
#         #self.tipo_actividad = tipo_actividad

#     def get_id(self):
#         return self.id_actividad
#     def get_nombre(self):
#         return self.nombre
#     def get_descripcion(self):
#         return self.descripcion

class GestorActividad():

    def __init__(self, gestor_docente, actividad_DAO):
        self.gestor_docente = gestor_docente
        self.actividad_DAO = actividad_DAO
    
    def alta_actividad(self, actividad_DTO, docente_DTO):
        docente = self.gestor_docente.alta_docente(docente_DTO)
        #tipo_actividad_DTO = actividad_DTO.get_tipo()
        #tipo_actividad = TipoActividad()
        actividad = Actividad(id_actividad=actividad_DTO.get_id_actividad(), nombre=actividad_DTO.get_nombre(), descripcion=actividad_DTO.get_descripcion(), docente=docente, activo=True, fecha_baja=None)
        #self.actividad_DAO.create_actividad(actividad)
        return actividad

    def obtener_actividades(self):
        #materia = TipoActividadDTO(1, "Cátedra", "Materia de algún curso de grado, pregrado o posgrado")
        actividades = [
            Actividad(id_actividad=1, nombre="Análisis Matemático I", 
            descripcion="Primera materia de cálculo. Se enseñan funciones, límites, derivadas, integrales y series."),
            Actividad(id_actividad=2, nombre="Álgebra y Geometría Analítica", 
            descripcion="Se enseñan sistemas de funciones, matrices, determinantes, rectas, planos, transformaciones, subespacios vectoriales y cónicas."),
            Actividad(id_actividad=3, nombre="Física I", 
            descripcion="Mecánica clásica. Se enseñan distintos tipos de movimientos, óptica, ondas, etc."),
            Actividad(id_actividad=4, nombre="Inglés I", 
            descripcion="Primera materia inglés."),
            Actividad(id_actividad=5, nombre="Lógica y Estructuras Discretas", 
            descripcion="Matemática Discreta. Se enseñan lógica, teoría de números, estructuras algebraicas, relaciones de recurrencia y grafos."),
            Actividad(id_actividad=6, nombre="Algoritmos y Estructuras de Datos", 
            descripcion="Introducción a la programación. Se enseñan el paradigma imperativo, tipos de datos y algoritmos varios."),
            Actividad(id_actividad=7, nombre="Arquitectura de Computadoras", 
            descripcion="Conocimientos básicos sobre circuitos y arquitecturas de computadoras. Se enseñan circuitos combinacionales y secuenciales y estructura de un procesador."),
            Actividad(id_actividad=8, nombre="Sistemas y Procesos de Negocio", 
            descripcion="Materia integradora de primer año de ISI. Se enseña todo lo concerniente a un sistema.")
        ]
        return actividades