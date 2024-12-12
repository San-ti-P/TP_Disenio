import datetime
from rest_framework.response import Response
from rest_framework.decorators import api_view
from drf_spectacular.utils import extend_schema_view, extend_schema
from django.db import transaction
from ..serializers import RegistrarReservaRequestSerializer, ReservaSerializer
from ..services import gestor_reserva, gestor_sesion
from ..models import Actividad, Aula, Docente, Reservacion

@extend_schema_view(
    post=extend_schema(
        request=RegistrarReservaRequestSerializer,
        responses=ReservaSerializer,
        description="Registrar una nueva reserva"
    )
)
@transaction.atomic
@api_view(['POST'])
def reservas(request):
    """
    Define el comportamiento de .../reservas. Acepta solicitudes POST
    """

    if 'sesion' in request.COOKIES:
        sesion = request.COOKIES.get('sesion')
        autorizado, sesion = gestor_sesion.consultar_sesion(sesion)
    else:
        autorizado = False
        sesion = None
    
    if autorizado:
        if not sesion.get_es_admin():
            if request.method == 'POST':
                return registrar_reserva(request=request, id_usuario=sesion.get_id_usuario())
        else:
            return Response("Acceso denegado")
    else:
        return Response("Credenciales no válidas")

def registrar_reserva(request, id_usuario):
    """
    Define el comportamiento de .../reservas con solicitudes POST
    """
    
    registrar_reserva_serializer = RegistrarReservaRequestSerializer(data=request.data)
    data = registrar_reserva_serializer.initial_data
    
    docente = data['docente']
    docente = Docente(id_docente=docente['id_docente'], apellido=docente['apellido'], nombre=docente['nombre'], correo_contacto=docente['correo_contacto'])
    cant_alumnos = data['cant_alumnos']
    tipo_aula = data['tipo_aula']
    actividad = data['actividad']
    actividad = Actividad(id_actividad=actividad['id_actividad'], nombre=actividad['nombre'], descripcion=actividad['descripcion'])
    periodo = data['periodo']
    lista_reservaciones = data['lista_reservaciones']
    reservaciones_objs = []
    for reservacion in lista_reservaciones:
        fecha = reservacion['fecha']
        if fecha is not None:
            fecha = datetime.datetime.strptime(fecha, "%Y-%m-%d").date()
            nro_aula = reservacion['aula']
            if nro_aula is not None:
                reservaciones_objs.append(
                    Reservacion(
                        dia=reservacion['dia'],
                        fecha=fecha,
                        duracion=reservacion['duracion'],
                        hora_inicio=datetime.datetime.strptime(reservacion['hora_inicio'], "%H:%M").time(),
                        aula = Aula(nro_aula=nro_aula)
                    )
                )
    
    exito, response = gestor_reserva.alta_reserva(id_usuario, docente, cant_alumnos, tipo_aula, actividad, periodo, reservaciones_objs)
    if exito:
        response_serializer = ReservaSerializer(response)
        return Response(response_serializer.data)
    else:
        return Response("No se pudo registrar la reserva")