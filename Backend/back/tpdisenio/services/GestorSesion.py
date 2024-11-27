from datetime import date
#import bcrypt

from .Sesion import Sesion

class RespuestaLogin(object):

    def __init__(self, rango, nombre, cookie):
        self.rango = rango
        self.nombre = nombre
        self.cookie = cookie

class GestorSesion():
    """Clase encargada de suministrar todo la lógica concerniente a la clase Sesion"""
    def __init__(self, bedel_DAO, administrador_DAO):
        self.bedel_DAO = bedel_DAO
        self.administrador_DAO = administrador_DAO
        self.sesiones = []

    def inicio_sesion(self, id_usuario, contrasenia):
        #hash_contrasenia = bcrypt.hashpw(contrasenia.encode('utf-8'), bcrypt.gensalt())
        administrador = self.administrador_DAO.get_administrador(id_usuario)
        if administrador != None:
            #if hash_contrasenia == administrador.get_contrasena():
            if contrasenia == administrador.get_contrasena():
                if len(self.sesiones) != 0:
                    id_sesion = str(int(self.sesiones[len(self.sesiones)-1].get_id_sesion())+1)
                else: id_sesion = "1"
                sesion = Sesion(id_sesion, date.today(), True, id_usuario)
                self.sesiones.append(sesion)
                return RespuestaLogin("admin", administrador.get_nombre(), sesion.get_cookie())
            #else: return "acceso denegado"
        else:
            bedel = self.bedel_DAO.get_bedel(id_usuario)
            if bedel != None:
                #if hash_contrasenia == bedel.get_contrasena():
                if contrasenia == bedel.get_contrasena():
                    if len(self.sesiones) != 0:
                        id_sesion = str(int(self.sesiones[len(self.sesiones)-1].get_id_sesion())+1)
                    else: id_sesion = "1"
                    sesion = Sesion(id_sesion, date.today(), True, id_usuario)
                    self.sesiones.append(sesion)
                    return RespuestaLogin("bedel", bedel.get_nombre(), sesion.get_cookie())
                #else: return "acceso denegado"
            #else: return "acceso denegado"
        return RespuestaLogin("acceso denegado", None, None)
    
    def cerrar_sesion(self, id_sesion):
        pass

    def consultar_sesion(self, id_sesion):
        pass

