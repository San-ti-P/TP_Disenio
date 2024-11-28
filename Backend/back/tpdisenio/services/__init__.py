from .GestorBedel import GestorBedel
from .GestorContrasenia import GestorContrasenia
from .GestorSesion import GestorSesion
from .GestorUsuario import GestorUsuario
from ..daos import *


SQL_bedel_DAO = SQLBedelDAO()
SQL_administrador_DAO = SQLAdministradorDAO()
gestor_sesion = GestorSesion(SQL_bedel_DAO, SQL_administrador_DAO)
gestor_contrasenia = GestorContrasenia()
gestor_usuario = GestorUsuario(SQL_bedel_DAO, SQL_administrador_DAO)
gestor_bedel = GestorBedel(gestor_sesion, gestor_usuario, gestor_contrasenia,
                           SQL_bedel_DAO, SQL_administrador_DAO)
