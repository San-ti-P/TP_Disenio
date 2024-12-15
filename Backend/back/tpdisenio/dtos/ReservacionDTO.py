
class ReservacionDTO():
    def __init__(self, dia, fecha, duracion, hora_inicio, aula):
        self.dia=dia
        self.fecha=fecha
        self.duracion=duracion
        self.hora_inicio=hora_inicio
        self.aula=aula
    
    def get_dia(self):
        return self.dia
    def get_fecha(self):
        return self.fecha
    def get_duracion(self):
        return self.duracion
    def get_hora_inicio(self):
        return self.hora_inicio
    def get_aula(self):
        return self.aula