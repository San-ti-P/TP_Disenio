from rest_framework import serializers
from .AulaDTOSerializer import AulaDTOSerializer
    
class ReservacionSerializer(serializers.Serializer):

    dia = serializers.CharField()
    fecha = serializers.CharField()
    duracion = serializers.IntegerField()
    hora_inicio = serializers.CharField()
    aula = AulaDTOSerializer()