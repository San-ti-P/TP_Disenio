from datetime import date, timedelta
from ..models import Periodo, Reserva, Reservacion
from ..dtos import ReservaDTO, RespuestaIniciarReservaDTO, SolicitudFechaDTO

class GestorReserva():
    """Clase encargada de suministrar todo la lógica concerniente a la clase reserva"""
    def __init__(self, gestor_reservacion, gestor_actividad, gestor_periodo, gestor_aula, gestor_bedel, reserva_DAO) -> None:
        
        self.gestor_reservacion = gestor_reservacion
        self.gestor_actividad = gestor_actividad
        self.gestor_periodo = gestor_periodo
        self.gestor_aula = gestor_aula
        self.gestor_bedel = gestor_bedel
        self.reserva_DAO = reserva_DAO

    def get_datos_reserva(self, id_reserva):
        pass
   
    def alta_reserva(self, id_bedel, docente_DTO, cant_alumnos, tipo_aula, actividad_DTO, tipo_periodo, lista_reservaciones):
        if tipo_periodo is not None:
            periodo = self.gestor_periodo.get_periodo(tipo_periodo, date.today().year + 1)
        else:
            periodo = None
            
        errores = self.validar_datos(docente_DTO, cant_alumnos, tipo_aula, actividad_DTO, periodo, lista_reservaciones)

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

        bedel = self.gestor_bedel.get_bedel(id_bedel)

        reserva.set_bedel(bedel)

        exito = True

        for r in lista_reservaciones:
           
            aula = self.gestor_aula.consultar_disponibilidad_aula(r.get_aula().get_nro_aula(), r.get_fecha(), r.get_hora_inicio(), r.get_duracion())
            if aula is None:
                exito = False
                break
            reservacion = self.gestor_reservacion.alta_reservacion(r.get_hora_inicio(), r.get_duracion(), r.get_dia(), r.get_fecha(), reserva, aula)
            reserva.add_reservacion(reservacion)
        
        if exito: 
            self.reserva_DAO.create_reserva(reserva)
            return exito, ReservaDTO(id_reserva=reserva.get_id_reserva(), cant_alumnos=reserva.get_cantidad_alumnos(), fecha_solicitud=reserva.get_fecha_solicitud(),
                                     tipo=reserva.get_tipo(), activo=reserva.get_activo(), fecha_baja=reserva.get_fecha_baja(), periodo=reserva.get_periodo().get_id_periodo(),
                                     actividad=reserva.get_actividad().get_id_actividad(), bedel=reserva.get_bedel().get_id_usuario())

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

        id = docente_DTO.get_id_docente()
        nombre = docente_DTO.get_nombre()
        apellido = docente_DTO.get_apellido()
        correo = docente_DTO.get_correo_contacto()

        if not (type(id)==type(1) and id >= 0):
            datos_completos = False
        if not (len(nombre)>1 and len(nombre)<30):
            datos_completos = False
        if not (len(apellido)>1 and len(apellido)<30):
            datos_completos = False
        if not (len(correo)>1 and len(correo)<50):
            datos_completos = False
        
        id = actividad_DTO.get_id_actividad()
        nombre = actividad_DTO.get_nombre()
        descripcion = actividad_DTO.get_descripcion()

        if not (type(id)==type(1) and id >= 0):
            datos_completos = False
        if not (len(nombre)>1 and len(nombre)<40):
            datos_completos = False
        if not (len(descripcion)>1 and len(descripcion)<250):
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
            vistos_fechas = set()
            for reservacion in lista_reservaciones:
                if reservacion.get_fecha() is None:
                    if reservacion.get_dia() in vistos_dias:
                        mas_de_una_hora_inicio_dia = True
                        break
                    vistos_dias.add(reservacion.get_dia())
                else:
                    if reservacion.get_fecha() in vistos_fechas:
                        mas_de_una_hora_inicio_dia = True
                    if reservacion.get_fecha() <= date.today():
                        dia_anterior_actual = True
                    vistos_fechas.add(reservacion.get_fecha())

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
        periodos=[]
        lista = []
        if periodo.get_tipo()==Periodo.TipoPeriodo.ANUAL:
            primer_cuatrimestre = self.gestor_periodo.get_periodo(Periodo.TipoPeriodo.PRIMER_CUATRIMESTRE, date.today().year+1)
            segundo_cuatrimestre = self.gestor_periodo.get_periodo(Periodo.TipoPeriodo.SEGUNDO_CUATRIMESTRE, date.today().year+1)
            periodos = [primer_cuatrimestre, segundo_cuatrimestre]
        else:
            periodos = [periodo]
        
        for reservacion in reservaciones_periodicas:
            for p in periodos:
                actual = p.get_fecha_inicio()
                fin = p.get_fecha_fin()
    
                while actual.weekday() != dias_semana.get(reservacion.get_dia().lower(), None):
                    actual += timedelta(days=1)

                while actual <= fin:
                    r = Reservacion(dia=reservacion.get_dia(), fecha=actual, hora_inicio=reservacion.get_hora_inicio(), duracion=reservacion.get_duracion())
                    lista.append(r)
                    actual += timedelta(days=7)

        return lista
    
    def iniciar_reserva(self, docente_DTO, cant_alumnos, tipo_aula, actividad_DTO, tipo_periodo, lista_reservaciones):
        if tipo_periodo is not None:
            periodo = self.gestor_periodo.get_periodo(tipo_periodo, date.today().year+1)
            #El +1 de arriba es para que el periodo sea del año siguiente, así podemos testear.
        else:
            periodo = None
        errores = self.validar_datos(docente_DTO, cant_alumnos, tipo_aula, actividad_DTO, periodo, lista_reservaciones)
        
        if True in errores:
            return RespuestaIniciarReservaDTO(errores, None)

        if tipo_periodo is not None:
            lista_reservaciones = self.obtener_fechas(periodo, lista_reservaciones)
        
        solicitudes = []
        for r in lista_reservaciones:
            aulas = self.gestor_aula.obtener_aulas_disponibles(cant_alumnos, r.get_fecha(), r.get_hora_inicio(), r.get_duracion(), tipo_aula)
            solicitudes.append(SolicitudFechaDTO(r.get_fecha(), r.get_dia(), r.get_duracion(), r.get_hora_inicio(), aulas))

        return RespuestaIniciarReservaDTO(errores, solicitudes)
    
            


        

