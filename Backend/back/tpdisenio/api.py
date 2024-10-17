from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Bedel
from .serializers import BedelSerializer

class BuscarBedelAPIView(APIView):

    def get(self, request):
        bedeles = Bedel.objects.all()
        bedeles_serializer = BedelSerializer(bedeles, many=True)
        return Response(bedeles_serializer.data)