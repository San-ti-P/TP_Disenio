from rest_framework import serializers

class LoginRequestSerializer(serializers.Serializer):
    id_usuario = serializers.CharField(max_length=10)
    contrasenia = serializers.CharField(max_length=50)