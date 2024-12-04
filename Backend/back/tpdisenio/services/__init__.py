from .GestorActividad import GestorActividad, ActividadDTO
from .GestorAula import GestorAula
from .GestorBedel import GestorBedel
from .GestorContrasenia import GestorContrasenia
from .GestorDocente import GestorDocente, DocenteDTO
from .GestorPeriodo import GestorPeriodo
from. GestorReserva import GestorReserva
from .GestorReservacion import GestorReservacion
from .GestorSesion import GestorSesion
from .GestorUsuario import GestorUsuario
from ..daos import *

SQL_tipo_actividad_DAO = SQLTipoActividadDAO()
SQL_docente_DAO = SQLDocenteDAO()
SQL_actividad_DAO = SQLActividadDAO(SQL_tipo_actividad_DAO, SQL_docente_DAO)
SQL_administrador_DAO = SQLAdministradorDAO()
SQL_bedel_DAO = SQLBedelDAO()
SQL_aula_sin_adicionales_DAO = SQLAulaSinAdicionalesDAO()
SQL_aula_informatica_DAO = SQLAulaInformaticaDAO()
SQL_aula_multimedios_DAO = SQLAulaMultimedioDAO()
SQL_periodo_DAO = SQLPeriodoDAO()
SQL_reservacion_DAO = SQLReservacionDAO(SQL_aula_sin_adicionales_DAO, SQL_aula_multimedios_DAO, SQL_aula_informatica_DAO)
SQL_reserva_DAO = SQLReservaDAO(SQL_bedel_DAO, SQL_periodo_DAO, SQL_actividad_DAO, SQL_reservacion_DAO)

gestor_sesion = GestorSesion(SQL_bedel_DAO, SQL_administrador_DAO)
gestor_contrasenia = GestorContrasenia()
gestor_usuario = GestorUsuario(SQL_bedel_DAO, SQL_administrador_DAO)
gestor_bedel = GestorBedel(gestor_sesion, gestor_usuario, gestor_contrasenia,
                           SQL_bedel_DAO, SQL_administrador_DAO)
gestor_docente = GestorDocente()
gestor_actividad = GestorActividad(gestor_docente)
gestor_periodo = GestorPeriodo(SQL_periodo_DAO)
gestor_aula = GestorAula(gestor_sesion, SQL_aula_sin_adicionales_DAO, SQL_aula_multimedios_DAO, SQL_aula_informatica_DAO)
gestor_reservacion = GestorReservacion(gestor_sesion, SQL_reservacion_DAO)
gestor_reserva = GestorReserva(gestor_sesion, gestor_reservacion, gestor_actividad, gestor_periodo, gestor_aula, SQL_reserva_DAO, SQL_administrador_DAO)
