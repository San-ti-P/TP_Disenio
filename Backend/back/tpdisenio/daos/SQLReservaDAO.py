import datetime

from .ReservaDAO import ReservaDAO
from ..models import Reserva

class SQLReservaDAO(ReservaDAO):
    """Clase encargada de implementar el protocolo para persistir datos de la clase Reserva en una BDD SQL (PostgreSQL)"""

    def create_reserva(self, reserva, reservaciones):
        self.periodo_DAO.create_periodo(reserva.get_periodo())
        self.actividad_DAO.create_reserva(reserva.get_reserva())
        reserva.save()
        for reservacion in reservaciones:
            self.reservacion_DAO.create_reservacion(reservacion)

    def delete_reserva(self, id_reserva):
        reserva = Reserva.objects.filter(id_reserva=id_reserva)
        if len(reserva)==1:
            reserva = reserva[0]
            self.actividad_DAO.delete_actividad(reserva.get_actividad().get_id_actividad_historia())
            self.reservacion_DAO.delete_reservacion_by_reserva(reserva)
            reserva.set_activo(False)
            reserva.set_fecha_baja(datetime.date.today())
            reserva.save()

    def getAll_reserva(self):
        return Reserva.objects.all()

    def update_reserva(self, reserva):
        pass