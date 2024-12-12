import hashlib
import random
import string

class Sesion(object):
    def __init__(self, id_sesion, fecha_entrada, es_admin, id_usuario):
        self.id_sesion = id_sesion
        self.fecha_entrada = fecha_entrada
        self.es_admin = es_admin
        self.cookie = hashlib.md5(''.join(random.SystemRandom().choice(string.ascii_uppercase + string.digits) for _ in range(32)).encode('utf-8')).hexdigest()
        self.id_usuario = id_usuario
    
    def get_id_sesion(self):
        return self.id_sesion
    def get_fecha_entrada(self):
        return self.fecha_entrada
    def get_es_admin(self):
        return self.es_admin
    def get_cookie(self):
        return self.cookie
    def get_id_usuario(self):
        return self.id_usuario

    def set_id_sesion(self, id):
        self.id_sesion = id
    def set_fecha_entrada(self, fecha):
        self.fecha_entrada = fecha
    def set_es_admin(self, es_admin):
        self.es_admin = es_admin
    def set_cookie(self, cookie):
        self.cookie = cookie
    def set_id_usuario(self, id_usuario):
        self.id_usuario = id_usuario
