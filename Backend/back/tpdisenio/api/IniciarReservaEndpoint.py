from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed, PermissionDenied
from rest_framework.decorators import api_view
from drf_spectacular.utils import extend_schema_view, extend_schema, OpenApiParameter, OpenApiTypes
from ..serializers import IniciarReservaEntidadesSerializer, IniciarReservaRequestSerializer, IniciarReservaResponseSerializer, IniciarReservaEntidadesDTO
from ..services import gestor_actividad, gestor_docente, gestor_reserva, gestor_sesion
from ..models import Reserva

@extend_schema_view(
    get=extend_schema(
        responses=IniciarReservaEntidadesSerializer,
        description="Obtener reservaes"
    ),
    post=extend_schema(
        request=IniciarReservaRequestSerializer,
        responses=IniciarReservaResponseSerializer,
        description="Crear un nuevo reserva"
    )
)

@api_view(['GET', 'POST'])
def iniciar_reserva(request):
    """
    Define el comportamiento de .../iniciar_reserva. Acepta solicitudes GET, POST
    """
    #print(request.COOKIES)
    #if 'sessionid' in request.COOKIES:
    #    sessionid = request.COOKIES.get('sessionid')
    #else:
    #    sessionid = ""
    
    #autorizado, sesion = gestor_sesion.consultar_sesion(sessionid)

    #if autorizado:
    #    if sesion.get_es_admin():
    if request.method == 'GET':
        return obtener_datos(request=request)
    
    if request.method == 'POST':
        return comenzar_reserva(request=request)

    #    else:
    #        raise PermissionDenied("Acceso denegado")
    #else:
    #    raise AuthenticationFailed("Credenciales no válidas")


def obtener_datos(request):
    """
    Define el comportamiento de .../iniciar_reserva con solicitudes GET
    """
    
    actividades = gestor_actividad.obtener_actividades()
    docentes = gestor_docente.obtener_docentes()
    response_serializer = IniciarReservaEntidadesSerializer(IniciarReservaEntidadesDTO(actividades, docentes))
    return Response(response_serializer.data)

def comenzar_reserva(request):
    """
    Define el comportamiento de .../reservas con solicitudes POST
    """
    
    iniciar_reserva_serializer = IniciarReservaRequestSerializer(data=request.data)
    data = iniciar_reserva_serializer.initial_data
    
    docente = data['docente']
    cant_alumnos = data['cant_alumnos']
    tipo_aula = data['tipo_aula']
    actividad = data['actividad']
    periodo = data['periodo'].capitalize()
    lista_reservaciones = data['lista_reservaciones']
    response = gestor_reserva.iniciar_reserva(docente, cant_alumnos, tipo_aula, actividad, periodo, lista_reservaciones)
    response_serializer = IniciarReservaResponseSerializer(response)
    return Response(response_serializer.data)
