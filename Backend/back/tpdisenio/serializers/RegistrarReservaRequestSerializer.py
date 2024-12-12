from rest_framework import serializers
from .DocenteDTOSerializer import DocenteDTOSerializer
from .ActividadDTOSerializer import ActividadDTOSerializer
from .ReservacionSerializer import ReservacionSerializer

class RegistrarReservaRequestSerializer(serializers.Serializer):
    docente = DocenteDTOSerializer()
    cant_alumnos = serializers.IntegerField()
    tipo_aula = serializers.CharField()
    actividad = ActividadDTOSerializer()
    periodo = serializers.CharField()
    lista_reservaciones = ReservacionSerializer(many=True)