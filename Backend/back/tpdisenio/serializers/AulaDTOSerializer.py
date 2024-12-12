from rest_framework import serializers


class AulaDTOSerializer(serializers.Serializer):

    nro_aula = serializers.CharField()
    piso = serializers.CharField()
    capacidad = serializers.IntegerField()
    caracteristicas = serializers.CharField()