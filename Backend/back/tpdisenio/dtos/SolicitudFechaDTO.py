class SolicitudFechaDTO():
    def __init__(self, fecha, dia, duracion, hora_inicio, lista_aula_reserva) -> None:
        self.fecha = fecha
        self.dia = dia
        self.duracion = duracion
        self.hora_inicio = hora_inicio
        self.aulas = lista_aula_reserva
