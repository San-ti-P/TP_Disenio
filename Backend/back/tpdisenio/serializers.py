from rest_framework import serializers
from .models import Usuario, Bedel
#import services

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'

class BedelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bedel
        fields = '__all__'

class ErrorsListSerializer(serializers.Serializer):
    errors = serializers.ListField(default=[])

class PoliticasSerializer(serializers.Serializer):
    politicas = serializers.CharField()
