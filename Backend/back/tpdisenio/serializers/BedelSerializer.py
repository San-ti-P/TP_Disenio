from rest_framework import serializers

class BedelSerializer(serializers.Serializer):
    """Serializador de la clase Bedel"""

    id_usuario = serializers.CharField()
    contrasenia = serializers.CharField()
    nombre = serializers.CharField()
    apellido = serializers.CharField()
    activo = serializers.BooleanField()
    fecha_baja = serializers.DateField()
    turno = serializers.CharField()