from rest_framework import serializers
from .DocenteDTOSerializer import DocenteDTOSerializer
from .ActividadDTOSerializer import ActividadDTOSerializer
from .ReservacionDTOSerializer import ReservacionDTOSerializer
    
class IniciarReservaRequestSerializer(serializers.Serializer):
    docente = DocenteDTOSerializer()
    cant_alumnos = serializers.IntegerField()
    tipo_aula = serializers.CharField()
    actividad = ActividadDTOSerializer()
    periodo = serializers.CharField()
    lista_reservaciones = ReservacionDTOSerializer(many=True)