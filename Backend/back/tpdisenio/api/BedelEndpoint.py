from rest_framework.response import Response
from rest_framework.decorators import api_view
from drf_spectacular.utils import extend_schema_view, extend_schema, OpenApiParameter, OpenApiTypes
from ..serializers import BedelSerializer, ErrorsListSerializer
from ..services import gestor_bedel, gestor_sesion
from ..models import Bedel

@extend_schema_view(
    get=extend_schema(
        parameters=[
            OpenApiParameter(
                name='apellido',
                description='Apellido del bedel',
                required=False,
                type=OpenApiTypes.STR,
            ),
            OpenApiParameter(
                name='turno',
                description='Turno del bedel',
                required=False,
                type=OpenApiTypes.STR,
                enum=[turno[1] for turno in Bedel.TipoTurno.choices],
            ),
        ],
        responses=BedelSerializer,
        description="Obtener bedeles"
    ),
    post=extend_schema(
        request=BedelSerializer,
        responses=ErrorsListSerializer,
        description="Crear un nuevo bedel"
    ),
    put=extend_schema(
        request=BedelSerializer,
        responses=ErrorsListSerializer,
        description="Modificar un bedel existente"
    ),
    delete=extend_schema(
        parameters=[
            OpenApiParameter(
                name='id',
                description='ID del bedel',
                required=False,
                type=OpenApiTypes.STR,
            ),
        ],
        responses={200: OpenApiTypes.BOOL},
        description="Eliminar un bedel"
    )
)

@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def bedeles(request):
    """
    Define el comportamiento de .../bedeles. Acepta solicitudes GET, POST, PUT, DELETE
    """

    if 'sesion' in request.COOKIES:
        sesion = request.COOKIES.get('sesion')
        autorizado, sesion = gestor_sesion.consultar_sesion(sesion)
    else:
        autorizado = False
        sesion = None
    
    if autorizado:
        if sesion.get_es_admin():
            if request.method == 'GET':
                return buscar_bedel(request=request)
            
            if request.method == 'POST':
                return registrar_bedel(request=request)

            if request.method == 'PUT':
                return modificar_bedel(request=request)
            
            if request.method == 'DELETE':
                return eliminar_bedel(request=request)
        else:
            return Response("Acceso denegado")
    else:
        return Response("Credenciales no válidas")

def buscar_bedel(request):
    """
    Define el comportamiento de .../bedeles con solicitudes GET
    """
    
    params = request.query_params

    if 'apellido' in params:
        apellido = params['apellido'].strip().lower()
    else:
        apellido = ""

    if 'turno' in params:
        turno = params['turno'].capitalize()
        if turno == "Mañana":
            turno = "Maniana"
    else:
        turno = ""


    bedeles = gestor_bedel.buscar_bedel(apellido=apellido, turno=turno)
    bedeles_serializer = BedelSerializer(bedeles, many=True)
    return Response(bedeles_serializer.data)

def eliminar_bedel(request):
    """
    Define el comportamiento de .../bedeles con solicitudes DELETE
    """
    
    params = request.query_params

    if 'id' in params:
        id = params['id']
    else:
        id = ""

    exito = gestor_bedel.baja_bedel(id_usuario=id)
    return Response(exito)

def modificar_bedel(request):
    """
    Define el comportamiento de .../bedeles con solicitudes PUT
    """
    
    bedeles_serializer = BedelSerializer(data=request.data)
    data = bedeles_serializer.initial_data
    if data['turno'] == "Mañana":
        data['turno'] = "Maniana"
    print(data['id_usuario'], data['contrasenia'],
            data['nombre'], data['apellido'], data['turno'])
    nombre = data['nombre'].capitalize()
    apellido = data['apellido'].capitalize()
    turno = data['turno']
    id_usuario = data['id_usuario']
    contrasenia = data['contrasenia']
    response = gestor_bedel.modificar_bedel(nombre, apellido, turno, id_usuario, contrasenia)
    response_serializer = ErrorsListSerializer(response)
    return Response(response_serializer.data)

def registrar_bedel(request):
    """
    Define el comportamiento de .../bedeles con solicitudes POST
    """
    
    bedeles_serializer = BedelSerializer(data=request.data)
    data = bedeles_serializer.initial_data
    if data['turno'] == "Mañana":
        data['turno'] = "Maniana"
    
    nombre = data['nombre'].capitalize()
    apellido = data['apellido'].capitalize()
    turno = data['turno']
    id_usuario = data['id_usuario']
    contrasenia = data['contrasenia']
    response = gestor_bedel.alta_bedel(nombre, apellido, turno, id_usuario, contrasenia)
    response_serializer = ErrorsListSerializer(response)
    return Response(response_serializer.data)