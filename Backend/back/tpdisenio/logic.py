from abc import ABC, abstractclassmethod

class ValidacionRegistrarBedel(object):
    def __init__(self, resultado, campos_validos, contraseña_valida, id_valido):
        self.resultado=resultado
        self.campos_validos=campos_validos
        self.contraseña_valida=contraseña_valida
        self.id_valido=id_valido


class GestorBedel():
    def get_datos_bedel(self, id_usuario):
        pass
    def validar_datos(self, nombre, apellido, turno):
        pass
    def alta_bedel(self, nombre, apellido, turno, id_usuario, contraseña):
        campos_validos=False
        if self.validar_datos(nombre, apellido, turno):
            campos_validos=True
        '''Terminar'''

        pass
    def baja_bedel(self, id_usuario):
        pass
    def modificar_bedel(self, nombre, apellido, turno, id_usuario, contraseña, conf_contraseña):
        pass
    def buscar_por_apellido(self, apellido):
        pass
    def buscar_por_turno(self, turno):
        pass
    def buscar_por_turno_y_apellido(self, turno, apellido):
        pass

class GestorUsuario():
    pass

class GestorContraseña():
    def get_politicas(self):
        pass
    def validar_politicas(self, contraseña):
        return True
    '''Se usa true momentáneamente para pruebas'''

class AdministradorDAO(ABC):
    pass

class BedelDAO(ABC):
    pass
