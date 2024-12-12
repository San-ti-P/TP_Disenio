from rest_framework import serializers
from .AulaReservaDTOSerializer import AulaReservaDTOSerializer

class SolicitudFechaSerializer(serializers.Serializer):
    fecha = serializers.DateField()
    dia = serializers.DateField()
    duracion = serializers.IntegerField()
    hora_inicio = serializers.TimeField()
    aulas = AulaReservaDTOSerializer(many=True)