from rest_framework.response import Response
from rest_framework.decorators import api_view
from drf_spectacular.utils import extend_schema_view, extend_schema
from ..serializers import IniciarReservaEntidadesSerializer, IniciarReservaRequestSerializer, IniciarReservaResponseSerializer
from ..dtos import IniciarReservaEntidadesDTO
from ..services import gestor_actividad, gestor_docente, gestor_reserva, gestor_sesion
from ..models import Actividad, Docente, Reservacion
import datetime

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

    if 'sesion' in request.COOKIES:
        sesion = request.COOKIES.get('sesion')
        autorizado, sesion = gestor_sesion.consultar_sesion(sesion)
    else:
        autorizado = False
        sesion = None
        
    if autorizado:
        if not sesion.get_es_admin():
            if request.method == 'GET':
                return obtener_datos(request=request)
            
            if request.method == 'POST':
                return comenzar_reserva(request=request)

        else:
            return Response("Acceso denegado")
    else:
        return Response("Credenciales no válidas")

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
                hora_inicio=datetime.datetime.strptime(reservacion['hora_inicio'], "%H:%M").time()
            )
        )
    
    response = gestor_reserva.iniciar_reserva(docente, cant_alumnos, tipo_aula, actividad, periodo, reservaciones_objs)

    response_serializer = IniciarReservaResponseSerializer(response)
    return Response(response_serializer.data)