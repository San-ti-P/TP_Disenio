from rest_framework import serializers
from .SolicitudFechaSerializer import SolicitudFechaSerializer

class IniciarReservaResponseSerializer(serializers.Serializer):
    errors = serializers.ListField()
    fechas = SolicitudFechaSerializer(many=True)