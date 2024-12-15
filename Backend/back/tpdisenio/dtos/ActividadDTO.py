
class ActividadDTO():
    def __init__(self, id_actividad, nombre, descripcion):
        self.id_actividad=id_actividad
        self.nombre=nombre
        self.descripcion=descripcion
    
    def get_id_actividad(self):
        return self.id_actividad
    def get_nombre(self):
        return self.nombre
    def get_descripcion(self):
        return self.descripcion