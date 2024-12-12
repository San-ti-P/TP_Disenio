class RespuestaIniciarReservaDTO():
    def __init__(self, lista_errores, lista_solicitudes) -> None:
        self.errors = lista_errores
        self.fechas = lista_solicitudes
    