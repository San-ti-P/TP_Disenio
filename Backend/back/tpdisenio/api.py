from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from . import services
from .models import Bedel
from .serializers import BedelSerializer, ErrorsListSerializer

@api_view(['GET'])
def buscar_bedel_api_view(request):

    if request.method == 'GET':
        #usuarios = Usuario.objects.all()
        bedeles = Bedel.objects.all()
        #usuarios_serializer = UsuarioSerializer(usuarios, many=True)
        bedeles_serializer = BedelSerializer(bedeles, many=True)
        return Response(bedeles_serializer.data)

@api_view(['POST'])
def registrar_bedel_api_view(request):

    if request.method == 'POST':
        bedeles_serializer = BedelSerializer(data=request.data)
        data = bedeles_serializer.initial_data
        if data['turno'] == "Mañana":
            data['turno'] = "Maniana"
        print(data['id_usuario'], data['contrasenia'], data['nombre'], data['apellido'], data['turno'])
        response = services.gestor_bedel.alta_bedel(data['nombre'], data['apellido'], data['turno'], data['id_usuario'], data['contrasenia'])
        response_serializer = ErrorsListSerializer(response)
        return Response(response_serializer.data)