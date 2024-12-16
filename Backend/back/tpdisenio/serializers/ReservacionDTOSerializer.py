from rest_framework import serializers

class ReservacionDTOSerializer(serializers.Serializer):

    dia = serializers.CharField()
    fecha = serializers.CharField()
    duracion = serializers.IntegerField()
    hora_inicio = serializers.CharField()