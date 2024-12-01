from ..models import Bedel

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

class RespuestaModificarBedel(object):
    """Se usa para construir el objeto respuesta del método .alta_bedel() de GestorBedel"""
    def __init__(self, campos_validos, contrasenia_valida, id_valido):
        self.errors = []
        if not campos_validos:
            self.errors.append("campos_invalidos")
        if not contrasenia_valida:
            self.errors.append("contrasenia_invalida")
        if not id_valido:
            self.errors.append("id_inexistente")

class GestorBedel():
    """Clase encargada de suministrar todo la lógica concerniente a la clase Bedel"""
    def __init__(self, gestor_sesion, gestor_usuario, gestor_contrasenia,
                           bedel_DAO, administrador_DAO) -> None:
        
        self.gestor_sesion = gestor_sesion
        self.gestor_usuario = gestor_usuario
        self.gestor_contrasenia = gestor_contrasenia
        self.bedel_DAO = bedel_DAO
        self.administrador_DAO = administrador_DAO

    def get_datos_bedel(self, id_usuario):
        """Obtiene los datos del bedel
        Parameters:
        id_usuario: str
            -- ID del bedel para el que se solicitan los datos"""
        pass

    def validar_datos(self, nombre, apellido, turno, id_usuario):
        """Valida datos de entrada. Retorna True si estos cumplen el formato requerido y False en caso contrario
        Parametros:
        nombre: str
            -- nombre del bedel
        apellido: str
            -- apellido del bedel
        turno: str
            -- turno del bedel
        id_usuario: str
            -- ID del bedel
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
        return True
    
    def alta_bedel(self, nombre, apellido, turno, id_usuario, contrasenia):
        """
        Principal responsable de implementar el CU13: Registrar Bedel
        Parametros:
        nombre: str
            -- nombre del bedel
        apellido: str
            -- apellido del bedel
        turno: str
            -- turno del bedel
        id_usuario: str
            -- ID del bedel
        contrasenia: str
            -- contraseña del bedel
        """
        campos_validos = False
        contrasenia_valida = False
        id_unico = False
        if self.validar_datos(nombre, apellido, turno, id_usuario):
            campos_validos = True
        
        if self.gestor_usuario.validacion_id_unico(id_usuario):
            id_unico = True
        
        if self.gestor_contrasenia.validar_politicas(contrasenia):
            contrasenia_valida = True

        if campos_validos and contrasenia_valida and id_unico:
            bedel = Bedel(nombre=nombre, apellido=apellido, turno=turno, id_usuario=id_usuario, contrasenia=contrasenia, activo=True, fecha_baja=None)
            self.bedel_DAO.create_bedel(bedel)
        
        response = RespuestaRegistrarBedel(campos_validos, contrasenia_valida, id_unico)
        return response


    def baja_bedel(self, id_usuario):
        """
        Principal responsable de implementar el CU15: Eliminar Bedel
        Parametros:
        id_usuario: str
            -- ID del bedel a eliminar
        """

        id_existente = False
        if not self.gestor_usuario.validacion_id_unico(id_usuario):
            id_existente = True

        if id_existente:
            self.bedel_DAO.delete_bedel(id_existente)

        return id_existente


    def modificar_bedel(self, nombre, apellido, turno, id_usuario, contrasenia):
        """
        Principal responsable de implementar el CU14: Modificar Bedel
        Parametros:
        nombre: str
            -- nombre del bedel
        apellido: str
            -- apellido del bedel
        turno: str
            -- turno del bedel
        id_usuario: str
            -- ID del bedel
        contrasenia: str
            -- contraseña del bedel
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
        return response

    def buscar_bedel(self, apellido, turno):
        """
        Principal responsable de implementar el CU16: Buscar Bedel
        Parametros:
        apellido: str
            -- apellido del bedel a buscar. Por defecto es None
        turno: TipoTurno
            -- turno del bedel a buscar. Por defecto es None
        """
        return self.bedel_DAO.get_bedel_criterio(apellido, turno)
        
