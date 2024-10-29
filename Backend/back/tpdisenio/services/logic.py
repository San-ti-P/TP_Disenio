from abc import ABC, abstractclassmethod
#from .serializers import RespuestaRegistrarBedelSerializer
from ..models import Bedel

class RespuestaRegistrarBedel(object):
    def __init__(self, campos_validos, contrasenia_valida, id_valido):
        self.errors = []
        if not campos_validos:
            self.errors.append("campos_invalidos")
        if not contrasenia_valida:
            self.errors.append("contrasenia_invalida")
        if not id_valido:
            self.errors.append("id_existente")

class GestorBedel():
    def __init__(self, gestor_sesion, gestor_usuario, gestor_contrasenia,
                           bedelDAO, administradorDAO) -> None:
        self.gestor_sesion = gestor_sesion
        self.gestor_usuario = gestor_usuario
        self.gestor_contrasenia = gestor_contrasenia
        self.bedelDAO = bedelDAO
        self.administradorDAO = administradorDAO

    def get_datos_bedel(self, id_usuario):
        pass

    def validar_datos(self, nombre, apellido, turno):
        valido = True
        if not (len(nombre)>0 and len(nombre)<30):
            valido = False
        if not (len(apellido)>0 and len(apellido)<30):
            valido = False
        
        tipos_turno = []
        for tupla in Bedel.TipoTurno.choices:
            tipos_turno.append(tupla[1])
        print(tipos_turno)
        
        if turno not in tipos_turno:
            valido = False
        return valido
    '''Se usa true momentáneamente para pruebas'''
    
    def alta_bedel(self, nombre, apellido, turno, id_usuario, contrasenia):
        campos_validos = False
        contrasenia_valida = False
        id_unico = False
        if self.validar_datos(nombre, apellido, turno):
            campos_validos = True
        if self.gestor_usuario.validacion_id_unico(id_usuario):
            id_unico = True
        if self.gestor_contrasenia.validar_politicas(contrasenia):
            contrasenia_valida = True

        if campos_validos and contrasenia_valida and id_unico:

            # Registrar Bedel en BDD
            pass
        
        response = RespuestaRegistrarBedel(campos_validos, contrasenia_valida, id_unico)
        return response
        '''Serializar!!!'''

        #{
        #   errors = []
        #}
        #
        #
        '''Terminar'''

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
    def __init__(self, bedelDAO, administradorDAO) -> None:
        self.bedelDAO = bedelDAO
        self.administradorDAO = administradorDAO
    
    def validacion_id_unico(self, id_usuario):
        return True
    '''Se usa true momentáneamente para pruebas'''

class GestorContraseña():
    def __init__(self) -> None:
        pass
    
    def get_politicas(self):
        longitud_maxima = 50
        contiene_signos_esp = True
        contiene_mayus = True
        contiene_dig = True
        repite_anterior = True
        politicas = []
        politicas.append(longitud_maxima)
        politicas.append(contiene_signos_esp)
        politicas.append(contiene_mayus)
        politicas.append(contiene_dig)
        politicas.append(repite_anterior)
        return politicas

    def validar_politicas(self, contrasenia):
        politicas = self.get_politicas()
        if len(contrasenia)>politicas[0]:
            return False
        return True
    '''Se usa true momentáneamente para pruebas'''

class GestorSesion():
    pass

class AdministradorDAO(ABC):
    pass

class BedelDAO(ABC):
    pass

class SQLAdministradorDAO(AdministradorDAO):
    pass

class SQLBedelDAO(BedelDAO):
    pass