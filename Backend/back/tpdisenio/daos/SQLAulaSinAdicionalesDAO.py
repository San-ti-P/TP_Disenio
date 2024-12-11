from datetime import timedelta, datetime 
from django.core.exceptions import ObjectDoesNotExist
from .AulaSinAdicionalesDAO import AulaSinAdicionalesDAO
from ..models import AulaSinRecursosAdicionales, Docente, Reservacion
from ..serializers import AulaDTO, AulaReservaDTO

class SQLAulaSinAdicionalesDAO(AulaSinAdicionalesDAO):
    """Clase encargada de implementar el protocolo para persistir datos de la clase AulaSinRecursosAdicionales en una BDD SQL (PostgreSQL)"""
    def create_sin_adicionales(self, aula_sin_adicionales):
        aula_sin_adicionales.save()

    def delete_sin_adicionales(self, nro_aula):
        aula = self.get_aula(nro_aula)
        aula.set_activo(False)
        aula.set_fecha_baja(datetime.date.today())
        aula.save()

    def get_aula(self, nro_aula):
        try:
            return AulaSinRecursosAdicionales.objects.get(nro_aula=nro_aula)
        except ObjectDoesNotExist:
            return None
        
    def get_all_sin_adicionales(self):
        return AulaSinRecursosAdicionales.objects.all()

    def update_sin_adicionales(self, aula_sin_adicionales):
        aula_sin_adicionales.save()

    def get_caracteristicas(self, ac, ventilador):
        cars = "Posee "
        if ac:
            cars = cars + "aire acondicionado"
            if ventilador:
                cars = cars + " y ventilador"
            cars = cars + "."
        else:
            if ventilador:
                cars = cars + "ventilador."
            else:
                cars = ""
        return cars

    def get_available(self, capacidad, fecha, hora_inicio, duracion):

        duracion_timedelta = timedelta(minutes=duracion)

        hora_fin = (datetime.combine(fecha, hora_inicio) + duracion_timedelta).time()
        
        reservaciones_ocupadas = Reservacion.objects.select_related('Aula').select_related('AulaSinRecursosAdicionales').filter(
            fecha=fecha,
            hora_inicio__lt=hora_fin,
            hora_inicio__gte=(datetime.combine(fecha, hora_inicio) - duracion_timedelta).time()
        ).values('aula__nro_aula')

        aulas_ocupadas = {res['aula__nro_aula'] for res in reservaciones_ocupadas}

        aulas_disponibles = AulaSinRecursosAdicionales.objects.filter(
            capacidad__gte=capacidad,
            activo=True,
        ).exclude(nro_aula__in=aulas_ocupadas).select_related('AulaSinAdicionales')

        return [AulaReservaDTO(AulaDTO(aula['nro_aula'], aula['piso'], aula['capacidad'], 
                                self.get_caracteristicas(aula['aire_acondicionado'], aula['ventilador'])), None, None, None)
                for aula in list(aulas_disponibles.values('nro_aula', 'piso', 'capacidad', 'aire_acondicionado', 'ventilador'))]
    
    def calcular_reservacion_menor_diferencia(self, capacidad, fecha, hora_inicio, duracion):

        duracion_timedelta = timedelta(minutes=duracion)

        hora_inicio_dt = datetime.combine(fecha, hora_inicio)
        hora_fin_dt = hora_inicio_dt + duracion_timedelta

        reservaciones_conflictivas = Reservacion.objects.select_related('Aula').select_related('AulaSinRecursosAdicionales').select_related('Reserva').select_related('Actividad').select_related('Docente').filter(
            fecha=fecha,
            aula__capacidad__gte=capacidad,
            hora_inicio__lt=hora_fin_dt.time(),
            hora_inicio__gte=(hora_inicio_dt - duracion_timedelta).time()
        ).values(
            'id_reservacion',
            'hora_inicio',
            'duracion',
            'dia',
            'fecha',
            'aula__nro_aula',
            'aula__piso',
            'aula__capacidad',
            'reserva__actividad__nombre',
            'reserva__actividad__docente__id_docente',
            'reserva__actividad__docente__nombre',
            'reserva__actividad__docente__apellido',
            'reserva__actividad__docente__correo_contacto'
        )

        menor_solapamiento = None
        mejor_reservacion = []

        for reservacion in reservaciones_conflictivas:

            reservacion_inicio = datetime.combine(fecha, reservacion['hora_inicio'])
            reservacion_fin = reservacion_inicio + timedelta(minutes=reservacion['duracion'])

            solapamiento_inicio = max(hora_inicio_dt, reservacion_inicio)
            solapamiento_fin = min(hora_fin_dt, reservacion_fin)
            tiempo_solapamiento = max((solapamiento_fin - solapamiento_inicio).total_seconds(), 0)

            if menor_solapamiento is None or tiempo_solapamiento < menor_solapamiento:
                menor_solapamiento = tiempo_solapamiento
                mejor_reservacion = [reservacion]
            else:
                if tiempo_solapamiento == menor_solapamiento:
                    mejor_reservacion.append(reservacion)

        return [AulaReservaDTO(
                    AulaDTO(nro_aula=reservacion['aula__nro_aula'], piso=reservacion['aula__piso'], capacidad=reservacion['aula__capacidad'], caracteristicas=""), 
                    Reservacion(dia=reservacion['dia'], fecha=reservacion['fecha'], duracion=reservacion['duracion'], hora_inicio=reservacion['hora_inicio']), 
                    Docente(id_docente=reservacion['reserva__actividad__docente__id_docente'], apellido=reservacion['reserva__actividad__docente__apellido'], 
                            nombre=reservacion['reserva__actividad__docente__nombre'], correo_contacto=reservacion['reserva__actividad__docente__correo_contacto']),
                    reservacion['reserva__actividad__nombre'])
                for reservacion in mejor_reservacion]
        