from .GestorActividad import GestorActividad
from .GestorAula import GestorAula
from .GestorBedel import GestorBedel
from .GestorContrasenia import GestorContrasenia
from .GestorDocente import GestorDocente
from .GestorPeriodo import GestorPeriodo
from. GestorReserva import GestorReserva
from .GestorReservacion import GestorReservacion
from .GestorSesion import GestorSesion
from .GestorUsuario import GestorUsuario
from ..daos import *

SQL_bedel_DAO = SQLBedelDAO()
SQL_administrador_DAO = SQLAdministradorDAO()
SQL_periodo_DAO = SQLPeriodoDAO()
gestor_sesion = GestorSesion(SQL_bedel_DAO, SQL_administrador_DAO)
gestor_contrasenia = GestorContrasenia()
gestor_usuario = GestorUsuario(SQL_bedel_DAO, SQL_administrador_DAO)
gestor_bedel = GestorBedel(gestor_sesion, gestor_usuario, gestor_contrasenia,
                           SQL_bedel_DAO, SQL_administrador_DAO)
gestor_docente = GestorDocente()
gestor_actividad = GestorActividad(gestor_docente)
gestor_periodo = GestorPeriodo(SQL_periodo_DAO)
