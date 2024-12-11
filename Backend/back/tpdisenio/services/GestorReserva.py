from ..models import Reserva
from ..models import Reservacion
from datetime import date, timedelta


class RespuestaIniciarReservaDTO():
    def __init__(self, lista_errores, lista_solicitudes) -> None:
        self.errors = lista_errores
        self.fechas = lista_solicitudes
    

class SolicitudFechaDTO():
    def __init__(self, fecha, dia, duracion, hora_inicio, lista_aula_reserva) -> None:
        self.fecha = fecha
        self.dia = dia
        self.duracion = duracion
        self.hora_inicio = hora_inicio
        self.aulas = lista_aula_reserva



class GestorReserva():
    """Clase encargada de suministrar todo la lógica concerniente a la clase reserva"""
    def __init__(self, gestor_reservacion, gestor_actividad, gestor_periodo, gestor_aula, 
                           reserva_DAO, administrador_DAO) -> None:
        
        self.gestor_reservacion = gestor_reservacion
        self.gestor_actividad = gestor_actividad
        self.gestor_periodo = gestor_periodo
        self.gestor_aula = gestor_aula
        self.reserva_DAO = reserva_DAO
        self.administrador_DAO = administrador_DAO

    def get_datos_reserva(self, id_reserva):
        pass

   
    def alta_reserva(self, bedel, docente_DTO, cant_alumnos, tipo_aula, actividad_DTO, tipo_periodo, lista_reservaciones):
        if tipo_periodo is not None:
            periodo = self.gestor_periodo.get_periodo(periodo, date.today().year + 1)
            
        errores = self.validar_datos(docente_DTO, cant_alumnos, tipo_aula, actividad_DTO, None, lista_reservaciones) #cambio PERIODO por NONE

        if True in errores:
            return False, None

        reserva = Reserva(cantidad_alumnos=cant_alumnos, fecha_solicitud=date.today())

        if tipo_periodo is not None:
            reserva.set_periodo(periodo)
            reserva.set_tipo(Reserva.TipoReserva.PERIODICA)
        else:
            reserva.set_tipo(Reserva.TipoReserva.ESPORADICA)
        
        actividad = self.gestor_actividad.alta_actividad(actividad_DTO, docente_DTO)
        reserva.set_actividad(actividad)

        reserva.set_bedel(bedel)

        exito = True

        for r in lista_reservaciones:
           
            aulas = self.gestor_aula.obtener_aulas_disponibles(cant_alumnos, r.get_fecha(), r.get_hora_inicio(), r.get_duracion(), tipo_aula)
            aulas_disponibles = [a.aula.nro_aula for a in aulas if a.reservacion is None]
            if r.get_aula().get_nro_aula() not in aulas_disponibles:
                exito = False
                break
            reservacion = self.gestor_reservacion.alta_reservacion(r.get_hora_inicio(), r.get_duracion(), r.get_dia(), r.get_fecha(), reserva, r.get_aula().get_nro_aula())
            reserva.add_reservacion(reservacion)
        
        if exito: 
            self.reserva_DAO.create_reserva(reserva)
            return exito, reserva

        else:
            return exito, None
            
    def baja_reserva(self, id_reserva):

        id_existente = False
        if not self.validacion_id_unico(id_reserva):
            id_existente = True

        if id_existente:
            self.reserva_DAO.delete_bedel(id_reserva)

        return id_existente


    def modificar_reserva(self, id_reserva, cantidad_alumnos, fecha_solicitud, tipo_reserva):
        pass

    def get_reservas_actividad(self, id_actividad, anio):
        pass

    def get_registrador(self, id_reserva):
        pass

    def validar_datos(self, docente_DTO, cant_alumnos, tipo_aula, actividad_DTO, periodo, lista_reservaciones):
        
        datos_completos = True
        dia_anterior_actual = False
        duracion_no_multiplo_30 = False 
        mas_de_una_hora_inicio_dia = False

        nombre = docente_DTO.get_nombre()
        apellido = docente_DTO.get_apellido()
        correo = docente_DTO.get_correo_contacto()

        if not (len(nombre)>1 and len(nombre)<30):
            datos_completos = False
        if not (len(apellido)>1 and len(apellido)<30):
            datos_completos = False
        if not (len(correo)>1 and len(correo)<50):
            datos_completos = False
        if not (type(cant_alumnos)==type(1) and cant_alumnos >= 0):
            datos_completos = False

        tipos_aula = ["Sin recursos adicionales", "Multimedio", "Informatica"]
        if tipo_aula not in tipos_aula:
            datos_completos = False
        
        if periodo is None:
            vistos_fechas = set()
            for reservacion in lista_reservaciones:
                if reservacion.get_fecha() in vistos_fechas:
                    mas_de_una_hora_inicio_dia = True
                if reservacion.get_fecha() <= date.today():
                    dia_anterior_actual = True
                vistos_fechas.add(reservacion.get_fecha())
        else:
            vistos_dias = set()
            for reservacion in lista_reservaciones:
                if reservacion.get_dia() in vistos_dias:
                    mas_de_una_hora_inicio_dia = True
                    break
                vistos_dias.add(reservacion.get_dia())

            if (periodo.get_fecha_fin() <= date.today()):
                dia_anterior_actual = True

        for reservacion in lista_reservaciones: 
            if reservacion.get_dia() not in [tupla[1] for tupla in Reservacion.DiaSemana.choices]:
                datos_completos = False

        if reservacion in lista_reservaciones:
            if reservacion.get_duracion() % 30 != 0: 
                duracion_no_multiplo_30 = True
            

        retorno = [mas_de_una_hora_inicio_dia, duracion_no_multiplo_30, dia_anterior_actual, (not datos_completos)]

        return retorno

    def obtener_fechas(self, periodo, lista_reservaciones):
        reservaciones_periodicas = lista_reservaciones.copy()
        dias_semana = {
            "lunes": 0,
            "martes": 1,
            "miercoles": 2,  
            "jueves": 3,
            "viernes": 4,
            "sabado": 5,      
            "domingo": 6
        }
        lista = []
        for reservacion in reservaciones_periodicas:
            actual = periodo.get_fecha_inicio()
            fin = periodo.get_fecha_fin()
            
            while actual.weekday() != dias_semana.get(reservacion.get_dia().lower(), None):
                actual += timedelta(days=1)
            
            while actual <= fin:
                r = Reservacion(dia=reservacion.get_dia(), fecha=actual, hora_inicio=reservacion.get_hora_inicio(), duracion=reservacion.get_duracion())
                lista.append(r)
                actual += timedelta(days=7)

        return lista
    
    def iniciar_reserva(self, docente_DTO, cant_alumnos, tipo_aula, actividad_DTO, periodo, lista_reservaciones):
        if periodo is not None:
            periodo = self.gestor_periodo.get_periodo(periodo, date.today().year+1)
            #El +1 de arriba es para que el periodo sea del año siguiente, así podemos testear.
        errores = self.validar_datos(docente_DTO, cant_alumnos, tipo_aula, actividad_DTO, periodo, lista_reservaciones)
        
        if True in errores:
            return RespuestaIniciarReservaDTO(errores, None)

        if periodo is not None:
            lista_reservaciones = self.obtener_fechas(periodo, lista_reservaciones)
        
        solicitudes = []
        for r in lista_reservaciones:
            aulas = self.gestor_aula.obtener_aulas_disponibles(cant_alumnos, r.get_fecha(), r.get_hora_inicio(), r.get_duracion(), tipo_aula)
            solicitudes.append(SolicitudFechaDTO(r.get_fecha(), r.get_dia(), r.get_duracion(), r.get_hora_inicio(), aulas))


        return RespuestaIniciarReservaDTO(errores, solicitudes)
    
            


        

