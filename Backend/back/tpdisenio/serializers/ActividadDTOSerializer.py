from rest_framework import serializers
from ..models import Actividad

class ActividadDTOSerializer(serializers.ModelSerializer):
    class Meta:
        model = Actividad
        fields = ['id_actividad', 'nombre', 'descripcion']