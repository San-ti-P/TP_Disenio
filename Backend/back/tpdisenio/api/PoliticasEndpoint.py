from rest_framework.response import Response
from rest_framework.decorators import api_view
from drf_spectacular.utils import extend_schema, OpenApiTypes
from ..services import gestor_contrasenia

@extend_schema(
    responses={200: OpenApiTypes.STR},
    description="Login a la aplicación"
)
@api_view(['GET'])
def politicas(request):
    """
    Define el comportamiento de .../politicas. Acepta solicitudes GET
    """

    if request.method == 'GET':
        lista_politicas = gestor_contrasenia.get_politicas()
        politicas = "- Longitud mínima de la contraseña: "+str(lista_politicas[0])+".\n"
        if lista_politicas[1]:
            politicas+="- La contraseña debe contener signos especiales.\n"
        if lista_politicas[2]:
            politicas+="- La contraseña debe contener al menos una mayúscula.\n"
        if lista_politicas[3]:
            politicas+="- La contraseña debe contener al menos un dígito.\n"
        if lista_politicas[4]:
            politicas+="- La contraseña puede ser igual a una contraseña anterior del usuario.\n"

        return Response(politicas)
