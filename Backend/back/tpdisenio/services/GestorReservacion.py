from ..models import Reservacion

class GestorReservacion():
    """Clase encargada de suministrar todo la lógica concerniente a la clase reservacion"""
    def __init__(self, gestor_sesion, gestor_aula, reservacion_DAO,) -> None:
        
        self.gestor_sesion = gestor_sesion
        self.gestor_aula = gestor_aula
        self.reservacion_DAO = reservacion_DAO

    def listarReservaciones(self):
        pass

    def get_reserva(self, id_reservacion):
        pass

    def get_datos_reservacion(self, id_reservacion):
        pass

    def alta_reservacion(self, horario, duracion, dia, date, reserva, nro_aula):
            aula = self.gestor_aula.get_aula(nro_aula)
            reservacion = Reservacion(horario = horario, duracion = duracion, dia = dia, date = date, reserva = reserva, aula = aula, activo=True, fecha_baja=None)
            self.reservacion_DAO.create_reservacion(reservacion)
            self.gestor_aula.agregar_reservacion(reservacion, aula)
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

    def guardar_reservacion(self, reservacion):
        pass
    