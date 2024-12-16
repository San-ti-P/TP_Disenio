from rest_framework import serializers
from .ActividadDTOSerializer import ActividadDTOSerializer
from .DocenteDTOSerializer import DocenteDTOSerializer

class   IniciarReservaEntidadesSerializer(serializers.Serializer):
    actividades = ActividadDTOSerializer(many=True)
    docentes = DocenteDTOSerializer(many=True)