from rest_framework.response import Response
#from rest_framework.views import APIView
from rest_framework.decorators import api_view
from ..services import gestor_contrasenia, gestor_bedel
from ..serializers import BedelSerializer, ErrorsListSerializer


@api_view(['GET', 'POST'])
def registrar_bedel(request):
    """
    Define el comportamiento de .../RegistrarBedel. Acepta solicitudes GET, y POST
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
        #response_serializer = PoliticasSerializer(politicas, many=True)
        return Response(politicas)

    if request.method == 'POST':
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
