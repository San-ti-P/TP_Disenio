from rest_framework.response import Response
#from rest_framework.views import APIView
from rest_framework.decorators import api_view
from ..services import gestor_sesion
from ..serializers import LoginRequestSerializer, LoginResponseSerializer

@api_view(['POST'])
def login(request):
    if request.method == 'POST':
        print("LLegó post a login")
        login_request_serializer = LoginRequestSerializer(data=request.data)
        data = login_request_serializer.initial_data
        id_usuario = data['id_usuario']
        contrasenia = data['contrasenia']
        print(id_usuario, contrasenia)
        response = gestor_sesion.inicio_sesion(id_usuario, contrasenia)
        response_serializer = LoginResponseSerializer(response)
        return Response(response_serializer.data)
