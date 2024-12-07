from datetime import timedelta, datetime 
from django.core.exceptions import ObjectDoesNotExist
from .AulaMultimedioDAO import AulaMultimedioDAO
from ..models import AulaMultimedio, Docente, Reservacion
from ..serializers import AulaDTO, AulaReservaDTO

class SQLAulaMultimedioDAO(AulaMultimedioDAO):
    """Clase encargada de implementar el protocolo para persistir datos de la clase Aula multimedio en una BDD SQL (PostgreSQL)"""
    def create_multimedio(self, aula_multimedio):
        aula_multimedio.save()

    def delete_multimedio(self, nro_aula):
        aula = self.get_aula(nro_aula)
        aula.set_activo(False)
        aula.set_fecha_baja(datetime.date.today())
        aula.save()

    def get_aula(self, nro_aula):
        try:
            return AulaMultimedio.objects.get(nro_aula=nro_aula)
        except ObjectDoesNotExist:
            return None
        
    def getAll_multimedio(self):
        return AulaMultimedio.objects.all()

    def update_multimedio(self, aula_multimedio):
        aula_multimedio.save()

    def get_caracteristicas(self, ac, tv, canion, pc, ventilador):
        cars = "Posee"
        elementos = [[ac, " aire acondicionado"], [tv, " televisor"], [canion, " cañón"], [pc, " computadora"], [ventilador, " ventilador"]]
        cant = 0
        for e in elementos:
            if e[0]:
                cant = cant + 1
        
        if cant == 0:
            return ""
        
        agregados = 0
        for e in elementos:
            if e[0]:
                if agregados == 0:
                    cars = cars + e[1]
                else:
                    if agregados < cant-1:
                        cars = cars + "," + e[1]
                    else:
                        cars = cars + " y" + e[1]
                agregados = agregados + 1
        return cars

    def get_available(self, capacidad, fecha, hora_inicio, duracion):

        # Convertir la duración de minutos a timedelta
        duracion_timedelta = timedelta(minutes=duracion)

        # Calcular hora de fin de la reserva solicitada
        hora_fin = (datetime.combine(fecha, hora_inicio) + duracion_timedelta).time()
        
        #print(hora_fin)
        # Filtrar reservaciones ocupadas que se solapan en el horario
        reservaciones_ocupadas = Reservacion.objects.select_related('Aula').select_related('AulaMultimedio').filter(
            fecha=fecha,
            # Filtrar solapamientos de horarios
            hora_inicio__lt=hora_fin,  # Comienza antes de que termine la nueva reserva
            hora_inicio__gte=(datetime.combine(fecha, hora_inicio) - duracion_timedelta).time()
        ).values('aula__nro_aula')
        #print(reservaciones_ocupadas)
        # Obtener los números de aulas ocupadas
        aulas_ocupadas = {res['aula__nro_aula'] for res in reservaciones_ocupadas}
        #print(aulas_ocupadas)
        # Filtrar aulas disponibles
        aulas_disponibles = AulaMultimedio.objects.filter(
            capacidad__gte=capacidad,  # Verificar que la capacidad mínima se cumpla
            activo=True,               # Asegurarse de que el aula esté activa
        ).exclude(nro_aula__in=aulas_ocupadas)  # Excluir aulas ocupadas
        #print(aulas_disponibles)
        # Devolver solo los números de aula

        return [AulaReservaDTO(AulaDTO(aula['nro_aula'], aula['piso'], aula['capacidad'],
                               self.get_caracteristicas(aula['aire_acondicionado'], aula['televisor'], aula['canion'], aula['computadora'], aula['ventilador'])), None, None)
                for aula in list(aulas_disponibles.values('nro_aula', 'piso', 'capacidad', 'aire_acondicionado', 'televisor', 'canion', 'computadora', 'ventilador'))]
    
    def calcular_reservacion_menor_diferencia(self, capacidad, fecha, hora_inicio, duracion):
        # Convertir duración de minutos a timedelta
        duracion_timedelta = timedelta(minutes=duracion)

        # Calcular hora de fin de la reserva solicitada
        hora_inicio_dt = datetime.combine(fecha, hora_inicio)
        hora_fin_dt = hora_inicio_dt + duracion_timedelta

        # Filtrar reservaciones conflictivas
        reservaciones_conflictivas = Reservacion.objects.select_related('Aula').select_related('AulaMultimedio').select_related('Reserva').select_related('Actividad').select_related('Docente').filter(
            fecha=fecha,
            aula__capacidad__gte=capacidad,
            # Filtrar solapamientos de horarios
            hora_inicio__lt=hora_fin_dt.time(),  # Comienza antes de que termine la nueva reserva
            hora_inicio__gte=(hora_inicio_dt - duracion_timedelta).time()  # Termina después de que comience
        ).values(
            'id_reservacion',  # ID de la reservación
            'hora_inicio',  # Hora de inicio
            'duracion',        # Duración en minutos
            'dia',
            'fecha',
            'aula__nro_aula',  # Número del aula
            'aula__piso',
            'aula__capacidad', # Capacidad del aula
            'reserva__actividad__docente__id_docente',
            'reserva__actividad__docente__nombre',
            'reserva__actividad__docente__apellido',
            'reserva__actividad__docente__correo_contacto'
        )
        # Determinar el menor tiempo de solapamiento
        menor_solapamiento = None
        mejor_reservacion = []

        for reservacion in reservaciones_conflictivas:
            # Convertir los datos de la reservación en horarios
            reservacion_inicio = datetime.combine(fecha, reservacion['hora_inicio'])
            reservacion_fin = reservacion_inicio + timedelta(minutes=reservacion['duracion'])

            # Calcular el tiempo de solapamiento
            solapamiento_inicio = max(hora_inicio_dt, reservacion_inicio)
            solapamiento_fin = min(hora_fin_dt, reservacion_fin)
            tiempo_solapamiento = max((solapamiento_fin - solapamiento_inicio).total_seconds(), 0)

            # Comparar para encontrar el menor solapamiento
            if menor_solapamiento is None or tiempo_solapamiento < menor_solapamiento:
                menor_solapamiento = tiempo_solapamiento
                mejor_reservacion = [reservacion]
            else:
                if tiempo_solapamiento == menor_solapamiento:
                    mejor_reservacion.append(reservacion)

        # Retornar la reservación con el menor solapamiento, o None si no hay conflictos
        return [AulaReservaDTO(
                    AulaDTO(nro_aula=reservacion['aula__nro_aula'], piso=reservacion['aula__piso'], capacidad=reservacion['aula__capacidad'], caracteristicas=""), 
                    Reservacion(dia=reservacion['dia'], fecha=reservacion['fecha'], duracion=reservacion['duracion'], hora_inicio=reservacion['hora_inicio']), 
                    Docente(id_docente=reservacion['reserva__actividad__docente__id_docente'], apellido=reservacion['reserva__actividad__docente__apellido'], 
                            nombre=reservacion['reserva__actividad__docente__nombre'], correo_contacto=reservacion['reserva__actividad__docente__correo_contacto']))
                for reservacion in mejor_reservacion]
        