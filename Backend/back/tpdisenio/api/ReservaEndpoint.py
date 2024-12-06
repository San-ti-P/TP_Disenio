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
    #print(request.COOKIES)
    if 'sesion' in request.COOKIES:
        sesion = request.COOKIES.get('sesion')
        autorizado, sesion = gestor_sesion.consultar_sesion(sesion)
    else:
        autorizado = False
        sesion = None
    
    #print(autorizado)
    if autorizado:
        if request.method == 'POST':
            return registrar_reserva(request=request, usuario=sesion.get_usuario())

    else:
        return Response("Credenciales no válidas")


def registrar_reserva(request, usuario):
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
        reservaciones_objs.append(
            Reservacion(
                dia=reservacion['dia'],
                fecha=fecha,
                duracion=reservacion['duracion'],
                hora_inicio=datetime.datetime.strptime(reservacion['hora_inicio'], "%H:%M").time(),
                aula = Aula(nro_aula=reservacion['aula'])
            )
        )
    
    response = gestor_reserva.alta_reserva(usuario, docente, cant_alumnos, tipo_aula, actividad, periodo, reservaciones_objs)

    response_serializer = ReservaSerializer(response)
    return Response(response_serializer.data)
