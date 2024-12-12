from rest_framework import serializers
from ..models import Usuario

class UsuarioSerializer(serializers.ModelSerializer):
    """Serializador de la clase Usuario"""
    class Meta:
        model = Usuario
        fields = '__all__'