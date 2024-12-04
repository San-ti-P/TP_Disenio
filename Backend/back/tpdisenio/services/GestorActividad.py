
class ActividadDTO(object):
    def __init__(self, id, nombre, descripcion) -> None:
        self.id_actividad = id
        self.nombre = nombre
        self.descripcion = descripcion

class GestorActividad():

    def __init__(self, gestor_docente):
        self.gestor_docente = gestor_docente
    
    def alta_actividad(self, id_act, nombre_act, desc_act, id_doc, apellido_doc, nombre_doc, correo_doc, tipo_actividad): 
        actividad = Actividad(id_act=id_act, nombre_act=nombre_act, desc_act=desc_act, id_doc=id_doc, apellido_doc=apellido_doc, nombre_doc=nombre_doc, correo_doc=correo_doc, tipo_actividad=tipo_actividad, activo=True, fecha_baja=None)
        self.actividad_DAO.create_actividad(actividad)
        
    def guardar_actividad(self, actividad, docente):
        pass

    def obtener_actividades(self):
        actividades = [
            ActividadDTO(1, "Análisis Matemático I", 
            "Primera materia de cálculo. Se enseñan funciones, límites, derivadas, integrales y series."),
            ActividadDTO(2, "Álgebra y Geometría Analítica", 
            "Se enseñan sistemas de funciones, matrices, determinantes, rectas, planos, transformaciones, subespacios vectoriales y cónicas."),
            ActividadDTO(3, "Física I", 
            "Mecánica clásica. Se enseñan distintos tipos de movimientos, óptica, ondas, etc."),
            ActividadDTO(4, "Inglés I", 
            "Primera materia inglés."),
            ActividadDTO(5, "Lógica y Estructuras Discretas", 
            "Matemática Discreta. Se enseñan lógica, teoría de números, estructuras algebraicas, relaciones de recurrencia y grafos."),
            ActividadDTO(6, "Algoritmos y Estructuras de Datos", 
            "Introducción a la programación. Se enseñan el paradigma imperativo, tipos de datos y algoritmos varios."),
            ActividadDTO(7, "Arquitectura de Computadoras", 
            "Conocimientos básicos sobre circuitos y arquitecturas de computadoras. Se enseñan circuitos combinacionales y secuenciales y estructura de un procesador."),
            ActividadDTO(8, "Sistemas y Procesos de Negocio", 
            "Materia integradora de primer año de ISI. Se enseña todo lo concerniente a un sistema.")
        ]
        return actividades