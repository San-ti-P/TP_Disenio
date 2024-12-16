from rest_framework import serializers

class DocenteDTOSerializer(serializers.Serializer):
    
    id_docente = serializers.IntegerField()
    apellido = serializers.CharField()
    nombre = serializers.CharField()
    correo_contacto = serializers.CharField()