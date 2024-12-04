from ..models import Actividad

class TipoActividadDTO(object):
    def __init__(self, id, nombre, descripcion):
        self.id_tipo_actividad = id
        self.nombre = nombre
        self.descripcion = descripcion

class ActividadDTO(object):
    def __init__(self, id, nombre, descripcion, tipo_actividad) -> None:
        self.id_actividad = id
        self.nombre = nombre
        self.descripcion = descripcion
        self.tipo_actividad = tipo_actividad

class GestorActividad():

    def __init__(self, gestor_docente, actividad_DAO):
        self.gestor_docente = gestor_docente
        self.actividad_DAO = actividad_DAO
    
    def alta_actividad(self, id_act, nombre_act, desc_act, id_doc, apellido_doc, nombre_doc, correo_doc, tipo_actividad): 
        actividad = Actividad(id_act=id_act, nombre_act=nombre_act, desc_act=desc_act, id_doc=id_doc, apellido_doc=apellido_doc, nombre_doc=nombre_doc, correo_doc=correo_doc, tipo_actividad=tipo_actividad, activo=True, fecha_baja=None)
        self.actividad_DAO.create_actividad(actividad)
        
    def guardar_actividad(self, actividad, docente):
        pass

    def obtener_actividades(self):
        materia = TipoActividadDTO(1, "Cátedra", "Materia de algún curso de grado, pregrado o posgrado")
        actividades = [
            ActividadDTO(1, "Análisis Matemático I", 
            "Primera materia de cálculo. Se enseñan funciones, límites, derivadas, integrales y series.", materia),
            ActividadDTO(2, "Álgebra y Geometría Analítica", 
            "Se enseñan sistemas de funciones, matrices, determinantes, rectas, planos, transformaciones, subespacios vectoriales y cónicas.", materia),
            ActividadDTO(3, "Física I", 
            "Mecánica clásica. Se enseñan distintos tipos de movimientos, óptica, ondas, etc.", materia),
            ActividadDTO(4, "Inglés I", 
            "Primera materia inglés.", materia),
            ActividadDTO(5, "Lógica y Estructuras Discretas", 
            "Matemática Discreta. Se enseñan lógica, teoría de números, estructuras algebraicas, relaciones de recurrencia y grafos.", materia),
            ActividadDTO(6, "Algoritmos y Estructuras de Datos", 
            "Introducción a la programación. Se enseñan el paradigma imperativo, tipos de datos y algoritmos varios.", materia),
            ActividadDTO(7, "Arquitectura de Computadoras", 
            "Conocimientos básicos sobre circuitos y arquitecturas de computadoras. Se enseñan circuitos combinacionales y secuenciales y estructura de un procesador.", materia),
            ActividadDTO(8, "Sistemas y Procesos de Negocio", 
            "Materia integradora de primer año de ISI. Se enseña todo lo concerniente a un sistema.", materia)
        ]
        return actividades