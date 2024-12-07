from rest_framework import serializers
from .models import Actividad, Aula, Bedel, Docente, Reserva, Reservacion, Usuario
#import services

class AulaReservaDTO():
    def __init__(self, aula, reservacion, docente):
        self.aula = aula
        self.reservacion = reservacion
        self.docente = docente

class AulaDTO():
    def __init__(self, nro_aula, piso, capacidad, caracteristicas):
        self.nro_aula = nro_aula
        self.piso = piso
        self.capacidad = capacidad
        self.caracteristicas = caracteristicas

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

class AulaDTOSerializer(serializers.Serializer):

    nro_aula = serializers.CharField()
    piso = serializers.CharField()
    capacidad = serializers.IntegerField()
    caracteristicas = serializers.CharField()

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
    
class ReservacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservacion
        fields = ['dia', 'fecha', 'duracion', 'hora_inicio', 'aula']

class ReservaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reserva
        fields = '__all__'
    
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

class RegistrarReservaRequestSerializer(serializers.Serializer):
    docente = DocenteDTOSerializer()
    cant_alumnos = serializers.IntegerField()
    tipo_aula = serializers.CharField()
    actividad = ActividadDTOSerializer()
    periodo = serializers.CharField()
    lista_reservaciones = ReservacionSerializer(many=True)