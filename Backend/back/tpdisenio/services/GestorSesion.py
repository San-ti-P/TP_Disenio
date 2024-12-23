import bcrypt
from datetime import datetime, timedelta
from ..dtos import RespuestaLogin
from .Sesion import Sesion

class GestorSesion():
    """Clase encargada de suministrar todo la lógica concerniente a la clase Sesion"""
    def __init__(self, bedel_DAO, administrador_DAO):
        self.bedel_DAO = bedel_DAO
        self.administrador_DAO = administrador_DAO
        self.sesiones = {}

    def inicio_sesion(self, id_usuario, contrasenia):
        for c, s in self.sesiones.items():
            if s.get_id_usuario()==id_usuario:
                self.cerrar_sesion(c)
                break

        administrador = self.administrador_DAO.get_administrador(id_usuario)
        if administrador != None:
            if administrador.get_activo():
                if bcrypt.checkpw(contrasenia.encode('utf-8'), administrador.get_contrasenia()):
                    if len(self.sesiones) != 0:
                        id_sesion = max([s.id_sesion for s in self.sesiones.values()])+1
                    else: id_sesion = 1
                    sesion = Sesion(id_sesion, datetime.today(), True, id_usuario)
                    self.sesiones[sesion.get_cookie()] = sesion
                    return RespuestaLogin("admin", administrador.get_nombre()), sesion.get_cookie()
        else:
            bedel = self.bedel_DAO.get_bedel(id_usuario)
            if bedel != None:
                if bedel.get_activo():
                    if bcrypt.checkpw(contrasenia.encode('utf-8'), bedel.get_contrasenia()):
                        if len(self.sesiones) != 0:
                            id_sesion = max([s.id_sesion for s in self.sesiones.values()])+1
                        else: id_sesion = 1
                        sesion = Sesion(id_sesion, datetime.today(), False, id_usuario)
                        self.sesiones[sesion.get_cookie()] = sesion
                        return RespuestaLogin("bedel", bedel.get_nombre()), sesion.get_cookie()
        return RespuestaLogin("acceso denegado", None), None
    
    def cerrar_sesion(self, cookie):
        if cookie in self.sesiones:
            self.sesiones.pop(cookie)

    def consultar_sesion(self, cookie):
        if cookie in self.sesiones:
            sesion = self.sesiones[cookie]
            if (sesion.get_fecha_entrada()+timedelta(hours=12))>datetime.today():
                return True, sesion
            else:
                self.cerrar_sesion(cookie)
        return False, None