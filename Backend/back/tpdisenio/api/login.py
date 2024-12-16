from rest_framework.response import Response
from rest_framework.decorators import api_view
from drf_spectacular.utils import extend_schema
from ..services import gestor_sesion
from ..serializers import LoginRequestSerializer, LoginResponseSerializer

@extend_schema(
    request=LoginRequestSerializer,
    responses=LoginResponseSerializer,
    description="Login a la aplicación"
)
@api_view(['POST'])
def login(request):
    if request.method == 'POST':
        login_request_serializer = LoginRequestSerializer(data=request.data)
        data = login_request_serializer.initial_data
        id_usuario = data['id_usuario']
        contrasenia = data['contrasenia']
        response, cookie = gestor_sesion.inicio_sesion(id_usuario, contrasenia)
        response_serializer = LoginResponseSerializer(response)
        r = Response(response_serializer.data)
        r.set_cookie(
            key="sesion",
            value=cookie,
            httponly=True,
            secure=True,
            samesite="None",
            max_age=3600*12,
            path="/"
        )
        return r