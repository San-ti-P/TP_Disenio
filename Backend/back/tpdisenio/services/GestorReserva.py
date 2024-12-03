from ..models import Reserva
from ..models import Reservacion
from ..models import Periodo
from datetime import date

class ReservacionDTO():
    def __init__(self, dia, fecha, hora, duaracion) -> None:
        self.dia = dia
        self.fecha = fecha
        self.hora = hora
        self.duracion = duaracion

class GestorReserva():
    """Clase encargada de suministrar todo la lógica concerniente a la clase reserva"""
    def __init__(self, gestor_sesion, gestor_reservacion, gestor_actividad, gestor_periodo, gestor_aula, 
                           reserva_DAO, administrador_DAO) -> None:
        
        self.gestor_sesion = gestor_sesion
        self.gestor_reservacion = gestor_reservacion
        self.gestor_actividad = gestor_actividad
        self.gestor_periodo = gestor_periodo
        self.gestor_aula = gestor_aula
        self.reserva_DAO = reserva_DAO
        self.administrador_DAO = administrador_DAO

    def get_datos_reserva(self, id_reserva):
        pass

    def alta_reserva(self, id_reserva, cantidad_alumnos, fecha_solicitud, tipo_reserva):
        
        pass


    def baja_reserva(self, id_reserva):

        id_existente = False
        if not self.validacion_id_unico(id_reserva):
            id_existente = True

        if id_existente:
            self.reserva_DAO.delete_bedel(id_reserva)

        return id_existente


    def modificar_reserva(self, id_reserva, cantidad_alumnos, fecha_solicitud, tipo_reserva):
        """

        campos_validos = False
        contrasenia_valida = False
        id_existente = False
        if self.validar_datos(nombre, apellido, turno, id_usuario):
            campos_validos = True
        
        if not self.gestor_usuario.validacion_id_unico(id_usuario):
            id_existente = True
        
        if self.gestor_contrasenia.validar_politicas(contrasenia):
            contrasenia_valida = True

        if campos_validos and contrasenia_valida and id_existente:
            #bedel = self.bedel_DAO.get_bedel(id_usuario)
            bedel = Bedel(nombre=nombre, apellido=apellido, turno=turno, id_usuario=id_usuario, contrasenia=contrasenia, activo=True, fecha_baja=None)
            self.bedel_DAO.update_bedel(bedel)
        
        response = RespuestaModificarBedel(campos_validos, contrasenia_valida, id_existente)
        return response """

    def get_reservas_actividad(self, id_actividad, anio):
        pass

    def get_registrador(self, id_reserva):
        pass

    def validar_datos(self, nombre, apellido, correo, cant_alumnos, tipo_aula, actividad, periodo, lista_reservaciones):
        
        faltan_ingresar_datos = True
        dia_anterior_actual = False
        duracion_no_multiplo_30 = False 
        mas_de_una_hora_inicio_dia = False

        if not (len(nombre)>1 and len(nombre)<30):
            faltan_ingresar_datos = False
        if not (len(apellido)>1 and len(apellido)<30):
            faltan_ingresar_datos = False
        if not (len(correo)>1 and len(correo)<50):
            faltan_ingresar_datos = False
        if not (type(cant_alumnos)==type(1) and cant_alumnos >= 0):
            faltan_ingresar_datos = False

        tipos_aula = ["Sin Recursos Adicionales", "Multimedio", "Informatica"]
        if tipo_aula not in tipos_aula:
            faltan_ingresar_datos = False
        
        if (periodo.get_fecha_inicio > date.today):
            dia_anterior_actual = True

        for reservacion in lista_reservaciones: 
            if reservacion.dia not in [tupla[1] for tupla in Reservacion.DiaSemana.choices]:
                faltan_ingresar_datos = False

        if reservacion in lista_reservaciones:
            if reservacion.duracion % 30 != 0: 
                duracion_no_multiplo_30 = True
        
        vistos_dias = set()
        vistos_fechas = set()
        for reservacion in lista_reservaciones:
            if (reservacion.fecha == None):
                if reservacion.dia in vistos_dias:
                    mas_de_una_hora_inicio_dia = True
                    break
                vistos_dias.add(reservacion.dia)
            else:
                if reservacion.fecha in vistos_fechas:
                    mas_de_una_hora_inicio_dia = True
                    break
                vistos_fechas.add(reservacion.fecha)

        return (faltan_ingresar_datos and dia_anterior_actual and duracion_no_multiplo_30 and mas_de_una_hora_inicio_dia)

    def iniciar_reserva():
        pass

    def obtener_fechas(self, periodo, lista_reservaciones):
       fechas = lista_reservaciones.copy()
       dias_semana = {
        "lunes": 0,
        "martes": 1,
        "miercoles": 2,  
        "jueves": 3,
        "viernes": 4,
        "sabado": 5,      
        "domingo": 6
    }
       for reservacion in fechas:
        actual = periodo.get_fecha_inicio
        fin = periodo.get_fecha_fin
        
        while actual.weekday() != dias_semana.get(periodo.dia.lower(), None):
            actual += timedelta(days=1)
        
        while actual <= fin:
            fechas.append(actual)
            actual += timedelta(days=7)

        return fechas