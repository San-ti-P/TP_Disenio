from ..models import Reservacion

class GestorReservacion():
    """Clase encargada de suministrar todo la lógica concerniente a la clase reservacion"""
    def __init__(self, gestor_sesion, reservacion_DAO,) -> None:
        
        self.gestor_sesion = gestor_sesion
        self.reservacion_DAO = reservacion_DAO

    def listarReservaciones(self):
        pass

    def get_reserva(self, id_reservacion):
        pass

    def get_datos_reservacion(self, id_reservacion):
        pass

    def alta_reservacion(self, horario, duracion, date, reserva, aula):
            reservacion = Reservacion(horario = horario, duracion = duracion, date = date, reserva = reserva, aula = aula, activo=True, fecha_baja=None)
            self.reservacion_DAO.create_reservacion(reservacion)

    def baja_reservacion(self, id_reservacion):

        id_existente = False
        if not self.gestor_reservacion.validacion_id_unico(id_reservacion):
            id_existente = True

        if id_existente:
            self.reservacion_DAO.delete_reservacion(id_reservacion)

        return id_existente


    def modificar_reservacion(self):
        pass

    def guardar_reservacion(self, reservacion):
        pass
    