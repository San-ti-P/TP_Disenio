import datetime

from .ReservacionDAO import ReservacionDAO
from ..models import Reservacion
#from django.db import IntegrityError

class SQLReservacionDAO(ReservacionDAO):
    """Clase encargada de implementar el protocolo para persistir datos de la clase Reservacion en una BDD SQL (PostgreSQL)"""

    def create_reservacion(self, reservacion):
        #try:
        reservacion.save()
        #except IntegrityError as e:
            #Encargarse de que se guarden las cosas
        #    pass
        
    def delete_reservacion(self, id_reservacion):
        reservacion = Reservacion.objects.filter(id_reservacion=id_reservacion)
        if len(reservacion)==1:
            reservacion = reservacion[0]
            reservacion.set_activo(False)
            reservacion.set_fecha_baja(datetime.date.today())
            reservacion.save()

    def getAll_reservacion(self):
        Reservacion.objects.all()

    def update_reservacion(self, reservacion):
        reservacion.save()