from rest_framework.response import Response
#from rest_framework.views import APIView
from rest_framework.decorators import api_view
from ..serializers import BedelSerializer
from ..services import gestor_bedel

@api_view(['GET'])
def buscar_bedel(request):
    """
    Define el comportamiento de .../buscar_bedel. Acepta solicitudes GET
    """
    if request.method == 'GET':

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
