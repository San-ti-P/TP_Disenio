from django.db import models
from django.utils.translation import gettext_lazy as _

# Create your models here.

class Periodo(models.Model):
    class Meta:
        db_table = "Periodo"

    class TipoPeriodo(models.TextChoices):
        ANUAL = "Anual"
        PRIMER_CUATRIMESTRE = "Primer Cuatrimestre"
        SEGUNDO_CUATRIMESTRE = "Segundo Cuatrimestre"
    
    id_periodo = models.CharField(max_length=10, primary_key=True)
    tipo = models.CharField(max_length=25, choices=TipoPeriodo)
    anio = models.IntegerField()
    fecha_inicio = models.DateField()
    fecha_fin = models.DateField()

class TipoActividad(models.Model):
    class Meta:
        db_table = "TipoActividad"

    id_tipo_actividad = models.CharField(max_length=5, primary_key=True)
    nombre = models.CharField(max_length=20)
    descripcion = models.CharField(max_length=25)

class Docente(models.Model):
    class Meta:
        db_table = "Docente"

    id_docente = models.CharField(max_length=10, primary_key=True)
    nombre = models.CharField(max_length=30)
    apellido = models.CharField(max_length=30)
    correo_contacto = models.EmailField(max_length=50)

class Actividad(models.Model):
    class Meta:
        db_table = "Actividad"

    id_actividad_historia = models.CharField(max_length=10, primary_key=True)
    id_actividad = models.CharField(max_length=10)
    nombre = models.CharField(max_length=40)
    descripcion = models.DateField(max_length=100)
    id_tipo_actividad = models.ForeignKey(TipoActividad, on_delete=models.CASCADE, db_column="id_tipo_actividad")
    id_docente = models.ForeignKey(Docente, on_delete=models.PROTECT, db_column="id_docente")

class Usuario(models.Model):
    class Meta:
        db_table = "Usuario"

    id_usuario = models.CharField(max_length=10, primary_key=True)
    contrasenia = models.CharField(max_length=50)
    nombre = models.CharField(max_length=30)
    apellido = models.CharField(max_length=30)
    activo = models.BooleanField(default=True)
    fecha_baja = models.DateField(blank=True, default=None, null=True)

    def get_id_usuario(self):
        return self.id_usuario
    def get_contrasena(self):
        return self.contrasenia
    def get_apellido(self):
        return self.apellido
    def get_nombre(self):
        return self.nombre
    def get_activo(self):
        return self.activo
    def get_fecha_baja(self):
        return self.fecha_baja
    def set_id_usuario(self, id):
        self.id_usuario = id
    def set_contrasena(self, contrasena):
        self.contrasenia = contrasena
    def set_apellido(self, apellido):
        self.apellido = apellido
    def set_nombre(self, nombre):
        self.nombre = nombre
    def set_activo(self, activo):
        self.activo = activo
    def set_fecha_baja(self, fecha_baja):
        self.fecha_baja = fecha_baja

class Administrador(Usuario):
    class Meta:
        db_table = "Administrador"

    usuario_ptr = models.OneToOneField(Usuario, on_delete=models.CASCADE, primary_key=True, db_column="id_usuario", parent_link=True)

class Bedel(Usuario):
    class Meta:
        db_table = "Bedel"

    class TipoTurno(models.TextChoices):
        MANIANA = "Maniana"
        TARDE = "Tarde"
        NOCHE = "Noche"
    
    usuario_ptr = models.OneToOneField(Usuario, on_delete=models.CASCADE, primary_key=True, db_column="id_usuario", parent_link=True)
    turno = models.CharField(max_length=10, choices=TipoTurno)


'''
class Sesion(models.Model):
    class Meta:
        db_table = "Sesion"

    id_sesion = models.CharField(max_length=10, primary_key=True)
    fecha_entrada = models.DateField()
    fecha_salida = models.DateField()
    id_usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, db_column="id_usuario")
'''

class TipoPizarron(models.Model):
    class Meta:
        db_table = "TipoPizarron"

    id_tipo_pizarron = models.CharField(max_length=5, primary_key=True)
    nombre = models.CharField(max_length=20)
    descripcion = models.CharField(max_length=50)

class Aula(models.Model):
    class Meta:
        db_table = "Aula"

    class EstadoAula(models.TextChoices):
        HABILITADO = "Habilitado"
        DESHABILITADO = "Deshabilitado"
    
    nro_aula = models.CharField(max_length=25, primary_key=True)
    capacidad = models.PositiveSmallIntegerField()
    piso = models.CharField(max_length=20)
    aire_acondicionado = models.BooleanField()
    estado_aula = models.CharField(max_length=15, choices=EstadoAula)
    tiene_pizarrones = models.ManyToManyField(TipoPizarron, through="Tiene", related_name="aulas")

class Tiene(models.Model):
    class Meta:
        db_table = "Tiene"

    id = models.CharField(max_length=10, primary_key=True)
    nro_aula = models.ForeignKey(Aula, on_delete=models.CASCADE, db_column="nro_aula")
    id_tipo_pizarron = models.ForeignKey(TipoPizarron, on_delete=models.CASCADE, db_column="id_tipo_pizarron")

class AulaSinRecursosAdicionales(Aula):
    class Meta:
        db_table = "AulaSinRecursosAdicionales"

    aula_ptr = models.OneToOneField(Aula, on_delete=models.CASCADE, primary_key=True, db_column="nro_aula", parent_link=True)
    ventilador = models.BooleanField()

class AulaMultimedios(Aula):
    class Meta:
        db_table = "AulaMultimedios"

    aula_ptr = models.OneToOneField(Aula, on_delete=models.CASCADE, primary_key=True, db_column="nro_aula", parent_link=True)
    televisor = models.BooleanField()
    canion = models.BooleanField()
    ventilador = models.BooleanField()
    computadora = models.BooleanField()

class AulaInformatica(models.Model):
    class Meta:
        db_table = "AulaInformatica"

    aula_ptr = models.OneToOneField(Aula, on_delete=models.CASCADE, primary_key=True, db_column="nro_aula", parent_link=True)
    cant_PCs = models.PositiveSmallIntegerField()
    canion = models.BooleanField()

class Reserva(models.Model):
    class Meta:
        db_table = "Reserva"

    class TipoReserva(models.TextChoices):
        ESPORADICA = "Esporadica"
        PERIODICA = "Periodica"

    id_reserva = models.CharField(max_length=10, primary_key=True)
    cantidad_alumnos = models.PositiveSmallIntegerField()
    fecha_solicitud = models.DateField()
    tipo = models.CharField(max_length=15, choices=TipoReserva)
    id_periodo = models.ForeignKey(Periodo, on_delete=models.PROTECT, blank=True, null=True, db_column="id_periodo")
    id_actividad = models.ForeignKey(Actividad, on_delete=models.PROTECT, db_column="id_actividad")
    id_usuario = models.ForeignKey(Usuario, on_delete=models.PROTECT, db_column="id_usuario")

class Reservacion(models.Model):
    class Meta:
        db_table = "Reservacion"

    class DiaSemana(models.TextChoices):
        LUNES = "Lunes"
        MARTES = "Martes"
        MIERCOLES = "Miercoles"
        JUEVES = "Jueves"
        VIERNES = "Viernes"
        SABADO = "Sabado"
        DOMINGO = "Domingo"
    
    id_reservacion = models.CharField(max_length=10, primary_key=True)
    fecha = models.DateField()
    duracion = models.PositiveSmallIntegerField()
    dia = models.CharField(max_length=12, choices=DiaSemana)
    hora_inicio = models.TimeField()
    nro_aula = models.ForeignKey(Aula, on_delete=models.PROTECT, db_column="nro_aula")
    id_reserva = models.ForeignKey(Reserva, on_delete=models.PROTECT, db_column="id_reserva")

