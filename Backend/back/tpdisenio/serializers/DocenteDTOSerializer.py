from rest_framework import serializers
from ..models import Docente

class DocenteDTOSerializer(serializers.ModelSerializer):
    class Meta:
        model = Docente
        fields = ['id_docente', 'apellido', 'nombre', 'correo_contacto']