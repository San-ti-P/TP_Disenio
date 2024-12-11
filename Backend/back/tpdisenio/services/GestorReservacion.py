from ..models import Reservacion

class GestorReservacion():
    """Clase encargada de suministrar todo la lógica concerniente a la clase reservacion"""
    def __init__(self, gestor_aula, reservacion_DAO) -> None:
        
        self.gestor_aula = gestor_aula
        self.reservacion_DAO = reservacion_DAO

    def listar_reservaciones_fecha(self, fecha, nro_aula):
        pass

    def get_reserva(self, id_reservacion):
        pass

    def get_datos_reservacion(self, id_reservacion):
        pass

    def alta_reservacion(self, horario, duracion, dia, date, reserva, nro_aula):
            aula = self.gestor_aula.get_aula(nro_aula)
            reservacion = Reservacion(hora_inicio = horario, duracion = duracion, dia = dia, fecha = date, reserva = reserva, aula = aula, activo=True, fecha_baja=None)

            return reservacion


    def baja_reservacion(self, id_reservacion):

        id_existente = False
        if not self.gestor_reservacion.validacion_id_unico(id_reservacion):
            id_existente = True

        if id_existente:
            self.reservacion_DAO.delete_reservacion(id_reservacion)

        return id_existente


    def modificar_reservacion(self):
        pass
