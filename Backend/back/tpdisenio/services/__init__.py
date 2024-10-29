from .logic import *


SQL_bedel_DAO = SQLBedelDAO()
SQL_administrador_DAO = SQLAdministradorDAO()
gestor_sesion = GestorSesion()
gestor_contrasenia = GestorContraseña()
gestor_usuario = GestorUsuario(SQL_bedel_DAO, SQL_administrador_DAO)
gestor_bedel = GestorBedel(gestor_sesion, gestor_usuario, gestor_contrasenia,
                           SQL_bedel_DAO, SQL_administrador_DAO)