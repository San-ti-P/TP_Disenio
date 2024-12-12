
class RespuestaRegistrarBedel(object):
    """Se usa para construir el objeto respuesta del método .alta_bedel() de GestorBedel"""
    def __init__(self, campos_validos, contrasenia_valida, id_valido):
        self.errors = []
        if not campos_validos:
            self.errors.append("campos_invalidos")
        if not contrasenia_valida:
            self.errors.append("contrasenia_invalida")
        if not id_valido:
            self.errors.append("id_existente")