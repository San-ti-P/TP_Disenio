from rest_framework import serializers

class LoginResponseSerializer(serializers.Serializer):
    rango = serializers.CharField(max_length=15)
    nombre = serializers.CharField(max_length=30)