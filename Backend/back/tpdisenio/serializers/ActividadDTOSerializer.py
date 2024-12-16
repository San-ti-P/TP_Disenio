from rest_framework import serializers

class ActividadDTOSerializer(serializers.Serializer):

    id_actividad = serializers.IntegerField()
    nombre = serializers.CharField()
    descripcion = serializers.CharField()