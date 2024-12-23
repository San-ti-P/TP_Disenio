import datetime

from .ReservacionDAO import ReservacionDAO
from ..models import Reservacion
#from django.db import IntegrityError

class SQLReservacionDAO(ReservacionDAO):
    """Clase encargada de implementar el protocolo para persistir datos de la clase Reservacion en una BDD SQL (PostgreSQL)"""

    def create_reservacion(self, reservacion):
        reservacion.save()

    def delete_reservacion(self, id_reservacion):
        reservacion = Reservacion.objects.filter(id_reservacion=id_reservacion, activo=True)
        if len(reservacion)==1:
            reservacion = reservacion[0]
            reservacion.set_activo(False)
            reservacion.set_fecha_baja(datetime.date.today())
            reservacion.save()

    def get_all_reservacion(self):
        Reservacion.objects.filter(activo=True)

    def update_reservacion(self, reservacion):
        reservacion.save()