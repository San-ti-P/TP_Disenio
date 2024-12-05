from rest_framework import serializers
from .models import Actividad, Aula, Bedel, Docente, Reservacion, Usuario
#import services

class IniciarReservaEntidadesDTO():
    def __init__(self, actividades, docentes):
        self.actividades = actividades
        self.docentes = docentes

class UsuarioSerializer(serializers.ModelSerializer):
    """Serializador de la clase Usuario"""
    class Meta:
        model = Usuario
        fields = '__all__'

class BedelSerializer(serializers.ModelSerializer):
    """Serializador de la clase Bedel"""
    class Meta:
        model = Bedel
        fields = '__all__'

class AulaDTOSerializer(serializers.ModelSerializer):

    class Meta:
        model = Aula
        fields = ['nro_aula', 'piso', 'capacidad']

#class TipoActividadDTOSerializer(serializers.Serializer):
#    id_tipo_actividad = serializers.IntegerField()
#    nombre = serializers.CharField()
#    descripcion = serializers.CharField()

class ActividadDTOSerializer(serializers.ModelSerializer):
    class Meta:
        model = Actividad
        fields = ['id_actividad', 'nombre', 'descripcion']

class DocenteDTOSerializer(serializers.ModelSerializer):
    class Meta:
        model = Docente
        fields = ['id_docente', 'apellido', 'nombre', 'correo_contacto']

class ReservacionDTOSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservacion
        fields = ['dia', 'fecha', 'duracion', 'hora_inicio']
    
class AulaReservaDTOSerializer(serializers.Serializer):
    aula = AulaDTOSerializer()
    reservacion = ReservacionDTOSerializer(required=False)
    docente = DocenteDTOSerializer(required=False)

class ErrorsListSerializer(serializers.Serializer):
    """Serializador de la clase RespuestaRegistrarBedel"""
    errors = serializers.ListField(default=[])

class LoginRequestSerializer(serializers.Serializer):
    id_usuario = serializers.CharField(max_length=10)
    contrasenia = serializers.CharField(max_length=50)

class LoginResponseSerializer(serializers.Serializer):
    rango = serializers.CharField(max_length=15)
    nombre = serializers.CharField(max_length=30)
    cookie = serializers.CharField(max_length=32)

class IniciarReservaEntidadesSerializer(serializers.Serializer):
    actividades = ActividadDTOSerializer(many=True)
    docentes = DocenteDTOSerializer(many=True)
    
class IniciarReservaRequestSerializer(serializers.Serializer):
    docente = DocenteDTOSerializer()
    cant_alumnos = serializers.IntegerField()
    tipo_aula = serializers.CharField()
    actividad = ActividadDTOSerializer()
    periodo = serializers.CharField()
    lista_reservaciones = ReservacionDTOSerializer(many=True)

class SolicitudFechaSerializer(serializers.Serializer):
    fecha = serializers.DateField()
    aulas = AulaReservaDTOSerializer(many=True)

class IniciarReservaResponseSerializer(serializers.Serializer):
    errors = serializers.ListField()
    fechas = SolicitudFechaSerializer(many=True)