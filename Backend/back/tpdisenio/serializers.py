from rest_framework import serializers
from .models import Usuario, Bedel

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'

class BedelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bedel
        fields = '__all__'

class BedelFormDataSerializer(serializers.Serializer):
    pass
