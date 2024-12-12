from ..models import Reservacion

class GestorReservacion():
    """Clase encargada de suministrar todo la lógica concerniente a la clase Reservacion"""
    def __init__(self, reservacion_DAO) -> None:

        self.reservacion_DAO = reservacion_DAO

    def listar_reservaciones_fecha(self, fecha, nro_aula):
        pass

    def get_reserva(self, id_reservacion):
        pass

    def get_datos_reservacion(self, id_reservacion):
        pass

    def alta_reservacion(self, horario, duracion, dia, date, reserva, aula):
            
        return Reservacion(hora_inicio = horario, duracion = duracion, dia = dia, fecha = date, reserva = reserva, aula = aula, activo=True, fecha_baja=None)

    def baja_reservacion(self, id_reservacion):
        pass

    def modificar_reservacion(self):
        pass
