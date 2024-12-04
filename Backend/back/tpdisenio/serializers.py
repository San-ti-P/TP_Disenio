from rest_framework import serializers
from .models import Aula, Bedel, Reservacion, Usuario
from .services import DocenteDTO
#import services

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

class AulaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Aula
        fields = '__all__'

class ActividadDTOSerializer(serializers.Serializer):
    id_actividad = serializers.IntegerField()
    nombre = serializers.CharField()
    descripcion = serializers.CharField()

class DocenteDTOSerializer():
    id_docente = serializers.IntegerField()
    apellido = serializers.CharField()
    nombre = serializers.CharField()
    correo = serializers.CharField()

class ReservacionDTOSerializer():
    dia = serializers.CharField(choices=Reservacion.DiaSemana)
    fecha = serializers.DateField()
    hora = serializers.TimeField()
    duracion = serializers.IntegerField()
    
class AulaReservaDTOSerializer(serializers.Serializer):
    aula = AulaSerializer()
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
    nombre = serializers.CharField()
    apellido = serializers.CharField()
    correo = serializers.CharField()
    cant_alumnos = serializers.IntegerField()
    tipo_aula = serializers.CharField()
    actividad = ActividadDTOSerializer()
    periodo = serializers.CharField()
    lista_reservaciones = ReservacionDTOSerializer(many=True)

class IniciarReservaResponseSerializer(serializers.Serializer):
    fecha = serializers.DateField()
    aulas = AulaReservaDTOSerializer(many=True)