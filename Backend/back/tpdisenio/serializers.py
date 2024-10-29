from rest_framework import serializers
from .models import Usuario, Bedel
#import services

class UsuarioSerializer(serializers.ModelSerializer):
    """Serializador de la clase Usuario"""
    class Meta:
        model = Usuario
        fields = '__all__'

class BedelSerializer(serializers.ModelSerializer):
    """Serializador de la clase Bedel"""
    class Meta:
        model = Bedel
        fields = '__all__'

class ErrorsListSerializer(serializers.Serializer):
    """Serializador de la clase RespuestaRegistrarBedel"""
    errors = serializers.ListField(default=[])

