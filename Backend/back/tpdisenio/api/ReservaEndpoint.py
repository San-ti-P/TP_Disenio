from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed, PermissionDenied
from rest_framework.decorators import api_view
from drf_spectacular.utils import extend_schema_view, extend_schema, OpenApiParameter, OpenApiTypes
from ..serializers import reservaSerializer, ErrorsListSerializer
from ..services import gestor_reserva, gestor_sesion
from ..models import reserva

@extend_schema_view(
    get=extend_schema(
        parameters=[
            OpenApiParameter(
                name='apellido',
                description='Apellido del reserva',
                required=False,
                type=OpenApiTypes.STR,
            ),
            OpenApiParameter(
                name='turno',
                description='Turno del reserva',
                required=False,
                type=OpenApiTypes.STR,
                enum=[turno[1] for turno in reserva.TipoTurno.choices],
            ),
        ],
        responses=reservaSerializer,
        description="Obtener reservaes"
    ),
    post=extend_schema(
        request=reservaSerializer,
        responses=ErrorsListSerializer,
        description="Crear un nuevo reserva"
    ),
    put=extend_schema(
        request=reservaSerializer,
        responses=ErrorsListSerializer,
        description="Modificar un reserva existente"
    ),
    delete=extend_schema(
        parameters=[
            OpenApiParameter(
                name='id',
                description='ID del reserva',
                required=False,
                type=OpenApiTypes.STR,
            ),
        ],
        responses={200: OpenApiTypes.BOOL},
        description="Eliminar un reserva"
    )
)

@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def reservas(request):
    """
    Define el comportamiento de .../reservas. Acepta solicitudes GET, POST, PUT, DELETE
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
        return buscar_reserva(request=request)
    
    if request.method == 'POST':
        return registrar_reserva(request=request)

    if request.method == 'PUT':
        return modificar_reserva(request=request)
    
    if request.method == 'DELETE':
        return eliminar_reserva(request=request)
    #    else:
    #        raise PermissionDenied("Acceso denegado")
    #else:
    #    raise AuthenticationFailed("Credenciales no válidas")


def buscar_reserva(request):
    """
    Define el comportamiento de .../reservaes con solicitudes GET
    """
    
    """params = request.query_params

    if 'apellido' in params:
        apellido = params['apellido'].capitalize()
    else:
        apellido = ""

    if 'turno' in params:
        turno = params['turno'].capitalize()
        if turno == "Mañana":
            turno = "Maniana"
    else:
        turno = ""

    reservaes = gestor_reserva.buscar_reserva(apellido=apellido, turno=turno)
    reservaes_serializer = reservaSerializer(reservaes, many=True)
    return Response(reservaes_serializer.data)"""
    pass


def eliminar_reserva(request):
    """
    Define el comportamiento de .../reservaes con solicitudes DELETE
    """
    
    """params = request.query_params
    print(params)
    if 'id' in params:
        id = params['id']
    else:
        id = ""

    exito = gestor_reserva.baja_reserva(id_usuario=id)
    return Response(exito)"""
    pass


def modificar_reserva(request):
    """
    Define el comportamiento de .../reservaes con solicitudes PUT
    """
    
    """reservaes_serializer = reservaSerializer(data=request.data)
    data = reservaes_serializer.initial_data
    if data['turno'] == "Mañana":
        data['turno'] = "Maniana"
    print(data['id_usuario'], data['contrasenia'],
            data['nombre'], data['apellido'], data['turno'])
    nombre = data['nombre'].capitalize()
    apellido = data['apellido'].capitalize()
    turno = data['turno']
    id_usuario = data['id_usuario']
    contrasenia = data['contrasenia']
    response = gestor_reserva.modificar_reserva(nombre, apellido, turno, id_usuario, contrasenia)
    response_serializer = ErrorsListSerializer(response)
    return Response(response_serializer.data)"""
    pass


def registrar_reserva(request):
    """
    Define el comportamiento de .../reservaes con solicitudes POST
    """
    
    reservas_serializer = reservaSerializer(data=request.data)
    data = reservaes_serializer.initial_data
    if data['turno'] == "Mañana":
        data['turno'] = "Maniana"
    print(data['id_usuario'], data['contrasenia'],
            data['nombre'], data['apellido'], data['turno'])
    nombre = data['nombre'].capitalize()
    apellido = data['apellido'].capitalize()
    turno = data['turno']
    id_usuario = data['id_usuario']
    contrasenia = data['contrasenia']
    response = gestor_reserva.alta_reserva(nombre, apellido, turno, id_usuario, contrasenia)
    response_serializer = ErrorsListSerializer(response)
    return Response(response_serializer.data)