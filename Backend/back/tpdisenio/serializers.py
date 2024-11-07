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

class LoginRequestSerializer(serializers.Serializer):
    id_usuario = serializers.CharField(max_length=10)
    contrasenia = serializers.CharField(max_length=50)

class LoginResponseSerializer(serializers.Serializer):
    rango = serializers.CharField(max_length=5)
    nombre = serializers.CharField(max_length=30)
    cookie = serializers.CharField(max_length=32)