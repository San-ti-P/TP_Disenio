from rest_framework.response import Response
#from rest_framework.views import APIView
from rest_framework.decorators import api_view
from ..serializers import BedelSerializer
from ..services import gestor_bedel

@api_view(['DELETE'])
def eliminar_bedel(request):
    """
    Define el comportamiento de .../eliminar_bedel. Acepta solicitudes DELETE
    """
    if request.method == 'DELETE':

        params = request.query_params
        print(params)
        if 'id' in params:
            id = params['id']
        else:
            id = ""


        exito = gestor_bedel.baja_bedel(id_usuario=id)
        return Response(exito)
