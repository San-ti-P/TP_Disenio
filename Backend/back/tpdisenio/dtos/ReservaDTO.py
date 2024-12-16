
class ReservaDTO():
    def __init__(self, id_reserva, cant_alumnos, fecha_solicitud, tipo, activo, fecha_baja, periodo, actividad, bedel):
        self.id_reserva=id_reserva
        self.cant_alumnos=cant_alumnos
        self.fecha_solicitud=fecha_solicitud
        self.tipo=tipo
        self.activo=activo
        self.fecha_baja=fecha_baja
        self.periodo=periodo
        self.actividad=actividad
        self.bedel=bedel
    
    def get_id_reserva(self):
        return self.id_reserva
    def get_cant_alumnos(self):
        return self.cant_alumnos
    def get_fecha_solicitud(self):
        return self.fecha_solicitud
    def get_tipo(self):
        return self.tipo
    def get_activo(self):
        return self.activo
    def get_fecha_baja(self):
        return self.fecha_baja
    def get_periodo(self):
        return self.periodo
    def get_actividad(self):
        return self.actividad
    def get_bedel(self):
        return self.bedel