from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from . import services
from .models import Bedel
from .serializers import BedelSerializer, ErrorsListSerializer, PoliticasSerializer

@api_view(['GET'])
def buscar_bedel_api_view(request):

    if request.method == 'GET':
        #usuarios = Usuario.objects.all()
        bedeles = Bedel.objects.all()
        #usuarios_serializer = UsuarioSerializer(usuarios, many=True)
        bedeles_serializer = BedelSerializer(bedeles, many=True)
        return Response(bedeles_serializer.data)

@api_view(['GET', 'POST'])
def registrar_bedel_api_view(request):

    if request.method == 'GET':
        lista_politicas = services.gestor_contrasenia.get_politicas()
        politicas = "Longitud mínima de la contraseña: "+str(lista_politicas[0])+".\n"
        if lista_politicas[1]:
            politicas+="La contraseña debe contener signos especiales.\n"
        if lista_politicas[2]:
            politicas+="La contraseña debe contener al menos una mayúscula.\n"
        if lista_politicas[3]:
            politicas+="La contraseña debe contener al menos un dígito.\n"
        if lista_politicas[4]:
            politicas+="La contraseña puede ser igual a una contraseña anterior del usuario.\n"
        #response_serializer = PoliticasSerializer(politicas, many=True)
        return Response(politicas)
    if request.method == 'POST':
        bedeles_serializer = BedelSerializer(data=request.data)
        data = bedeles_serializer.initial_data
        if data['turno'] == "Mañana":
            data['turno'] = "Maniana"
        print(data['id_usuario'], data['contrasenia'], data['nombre'], data['apellido'], data['turno'])
        response = services.gestor_bedel.alta_bedel(data['nombre'], data['apellido'], data['turno'], data['id_usuario'], data['contrasenia'])
        response_serializer = ErrorsListSerializer(response)
        return Response(response_serializer.data)