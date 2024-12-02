from ..models import Reserva

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

       """ id_existente = False
        if not self.gestor_usuario.validacion_id_unico(id_usuario):
            id_existente = True

        if id_existente:
            self.bedel_DAO.delete_bedel(id_usuario)

        return id_existente"""


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

    def validar_datos(self, nombre, apellido, turno, id_usuario):
        """
        if not (len(nombre)>1 and len(nombre)<30):
            return False
        if not (len(apellido)>1 and len(apellido)<30):
            return False
        
        tipos_turno = []
        for tupla in Bedel.TipoTurno.choices:
            tipos_turno.append(tupla[1])
        
        if turno not in tipos_turno:
            return False
        
        if len(id_usuario)==0 or len(id_usuario)>10:
            return False
        return True """
        pass
    
    def iniciar_reserva():
        pass

    def obtener_fechas():
        pass
