from datetime import timedelta, datetime 
from django.core.exceptions import ObjectDoesNotExist
from .AulaInformaricaDAO import AulaInformaricaDAO
from ..models import AulaInformatica
from ..models import Reservacion

class SQLAulaInformaricaDAO(AulaInformaricaDAO):
    """Clase encargada de implementar el protocolo para persistir datos de la clase Aula Informatica en una BDD SQL (PostgreSQL)"""
    def create_informatica(self, aula_informatica):
        aula_informatica.save()

    def delete_informatica(self, nro_aula):
        aula = self.get_aula(nro_aula)
        aula.set_activo(False)
        aula.set_fecha_baja(datetime.date.today())
        aula.save()

    def get_aula(self, nro_aula):
        try:
            return AulaInformatica.objects.get(nro_aula=nro_aula)
        except ObjectDoesNotExist:
            return None
        
    def getAll_informatica(self):
        return AulaInformatica.objects.all()

    def update_informatica(self, aula_informatica):
        aula_informatica.save()

    from datetime import timedelta, datetime

    def get_available(self, capacidad, fecha, hora_inicio, duracion):

        # Convertir la duración de minutos a timedelta
        duracion_timedelta = timedelta(minutes=duracion)

        # Calcular hora de fin de la reserva solicitada
        hora_fin = (datetime.combine(fecha, hora_inicio) + duracion_timedelta).time()

        # Filtrar reservaciones ocupadas que se solapan en el horario
        reservaciones_ocupadas = Reservacion.objects.select_related('aula').filter(
            fecha=fecha,
            # Filtrar solapamientos de horarios
            hora_inicio__lt=hora_fin,  # Comienza antes de que termine la nueva reserva
            hora_inicio__gte=(datetime.combine(fecha, hora_inicio) - duracion_timedelta).time()
        ).values('aula__nro_aula')

        # Obtener los números de aulas ocupadas
        aulas_ocupadas = {res['aula__nro_aula'] for res in reservaciones_ocupadas}

        # Filtrar aulas disponibles
        aulas_disponibles = Aula.objects.filter(
            capacidad__gte=capacidad,  # Verificar que la capacidad mínima se cumpla
            activo=True,               # Asegurarse de que el aula esté activa
        ).exclude(nro_aula__in=aulas_ocupadas)  # Excluir aulas ocupadas

        # Devolver solo los números de aula
        return list(aulas_disponibles.values_list('nro_aula', flat=True))
    
    def calcular_reservacion_menor_diferencia(self, capacidad, fecha, hora_inicio, duracion):
        # Convertir duración de minutos a timedelta
        duracion_timedelta = timedelta(minutes=duracion)

        # Calcular hora de fin de la reserva solicitada
        hora_inicio_dt = datetime.combine(fecha, hora_inicio)
        hora_fin_dt = hora_inicio_dt + duracion_timedelta

        # Filtrar reservaciones conflictivas
        reservaciones_conflictivas = Reservacion.objects.select_related('aula').filter(
            fecha=fecha,
            # Filtrar solapamientos de horarios
            hora_inicio__lt=hora_fin_dt.time(),  # Comienza antes de que termine la nueva reserva
            hora_inicio__gte=(hora_inicio_dt - duracion_timedelta).time()  # Termina después de que comience
        ).values(
            'id_reservacion',  # ID de la reservación
            'horario_inicio',  # Hora de inicio
            'duracion',        # Duración en minutos
            'aula__nro_aula',  # Número del aula
            'aula__capacidad', # Capacidad del aula
        )

        # Determinar el menor tiempo de solapamiento
        menor_solapamiento = None
        mejor_reservacion = None

        for reservacion in reservaciones_conflictivas:
            # Convertir los datos de la reservación en horarios
            reservacion_inicio = datetime.combine(fecha, reservacion['horario_inicio'])
            reservacion_fin = reservacion_inicio + timedelta(minutes=reservacion['duracion'])

            # Calcular el tiempo de solapamiento
            solapamiento_inicio = max(hora_inicio_dt, reservacion_inicio)
            solapamiento_fin = min(hora_fin_dt, reservacion_fin)
            tiempo_solapamiento = max((solapamiento_fin - solapamiento_inicio).total_seconds(), 0)

            # Comparar para encontrar el menor solapamiento
            if menor_solapamiento is None or tiempo_solapamiento < menor_solapamiento:
                menor_solapamiento = tiempo_solapamiento
                mejor_reservacion = reservacion

        # Retornar la reservación con el menor solapamiento, o None si no hay conflictos
        return mejor_reservacion
