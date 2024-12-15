
class DocenteDTO():
    def __init__(self, id_docente, apellido, nombre, correo_contacto):
        self.id_docente=id_docente
        self.apellido=apellido
        self.nombre=nombre
        self.correo_contacto=correo_contacto
    
    def get_id_docente(self):
        return self.id_docente
    def get_apellido(self):
        return self.apellido
    def get_nombre(self):
        return self.nombre
    def get_correo_contacto(self):
        return self.correo_contacto