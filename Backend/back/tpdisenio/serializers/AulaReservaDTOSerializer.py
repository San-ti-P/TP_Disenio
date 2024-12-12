from rest_framework import serializers
from .AulaDTOSerializer import AulaDTOSerializer
from .DocenteDTOSerializer import DocenteDTOSerializer
from .ReservacionDTOSerializer import ReservacionDTOSerializer
    
class AulaReservaDTOSerializer(serializers.Serializer):
    aula = AulaDTOSerializer()
    reservacion = ReservacionDTOSerializer(required=False)
    docente = DocenteDTOSerializer(required=False)
    actividad = serializers.CharField()