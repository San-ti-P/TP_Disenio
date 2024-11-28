from rest_framework.response import Response
#from rest_framework.views import APIView
from rest_framework.decorators import api_view
from ..serializers import BedelSerializer, ErrorsListSerializer
from ..services import gestor_bedel

@api_view(['PUT'])
def modificar_bedel(request):
    """
    Define el comportamiento de .../modificar_bedel. Acepta solicitudes PUT
    """
    if request.method == 'PUT':

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