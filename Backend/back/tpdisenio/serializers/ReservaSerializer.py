from rest_framework import serializers

class ReservaSerializer(serializers.Serializer):
    
    id_reserva=serializers.IntegerField()
    cant_alumnos=serializers.IntegerField()
    fecha_solicitud=serializers.DateField()
    tipo=serializers.CharField()
    activo=serializers.BooleanField()
    fecha_baja=serializers.DateField()
    periodo=serializers.IntegerField()
    actividad=serializers.IntegerField()
    bedel=serializers.CharField()