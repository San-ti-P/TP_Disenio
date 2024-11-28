from rest_framework.response import Response
from rest_framework.decorators import api_view
from ..serializers import BedelSerializer, ErrorsListSerializer
from ..services import gestor_bedel


@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def bedeles(request):
    """
    Define el comportamiento de .../bedeles. Acepta solicitudes GET, POST, PUT, DELETE
    """

    if request.method == 'GET':
        return buscar_bedel(request=request)
    
    if request.method == 'POST':
        return registrar_bedel(request=request)

    if request.method == 'PUT':
        return modificar_bedel(request=request)
    
    if request.method == 'DELETE':
        return eliminar_bedel(request=request)


def buscar_bedel(request):
    """
    Define el comportamiento de .../bedeles con solicitudes GET
    """

    params = request.query_params

    if 'apellido' in params:
        apellido = params['apellido'].capitalize()
    else:
        apellido = ""

    if 'turno' in params:
        turno = params['turno'].capitalize()
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
    print(params)
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
    nombre = data['nombre']
    apellido = data['apellido']
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
    print(data['id_usuario'], data['contrasenia'],
            data['nombre'], data['apellido'], data['turno'])
    nombre = data['nombre']
    apellido = data['apellido']
    turno = data['turno']
    id_usuario = data['id_usuario']
    contrasenia = data['contrasenia']
    response = gestor_bedel.alta_bedel(nombre, apellido, turno, id_usuario, contrasenia)
    response_serializer = ErrorsListSerializer(response)
    return Response(response_serializer.data)
