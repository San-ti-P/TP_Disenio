from abc import ABC     #, abstractclassmethod
#from .serializers import RespuestaRegistrarBedelSerializer
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
            bedel = Bedel(nombre=nombre, apellido=apellido, turno=turno, id_usuario=id_usuario, contrasenia=contrasenia)
            self.bedel_DAO.create_bedel(bedel)
            # Registrar Bedel en BDD
            pass
        
        response = RespuestaRegistrarBedel(campos_validos, contrasenia_valida, id_unico)
        return response
        '''Terminar'''

    def baja_bedel(self, id_usuario):
        """
        Principal responsable de implementar el CU15: Eliminar Bedel
        Parametros:
        id_usuario: str
            -- ID del bedel a eliminar
        """
        pass

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
        pass

    def buscar_bedel(self, apellido, turno):
        """
        Principal responsable de implementar el CU16: Buscar Bedel
        Parametros:
        apellido: str
            -- apellido del bedel a buscar. Por defecto es None
        turno: TipoTurno
            -- turno del bedel a buscar. Por defecto es None
        """
        pass


class GestorUsuario():
    """Clase encargada de suministrar todo la lógica concerniente a la clase Usuario"""
    def __init__(self, bedel_DAO, administrador_DAO) -> None:
        self.bedel_DAO = bedel_DAO
        self.administrador_DAO = administrador_DAO
    
    def validacion_id_unico(self, id_usuario):
        """
        Valida que no exista otro usuario con el mismo ID. Retorna True si id_usuario está disponible y False en caso contrario
        Parametros:
        id_usuario: str
            -- ID del bedel a crear
        """
        ids_bedel = self.bedel_DAO.get_id_bedel()
        ids_admin = self.administrador_DAO.get_id_administrador()
        if id_usuario not in ids_admin:
            if id_usuario not in ids_bedel:
                return True
        return False
    #Se usa true momentáneamente para pruebas

class GestorContrasenia():
    """Clase encargada de suministrar todo la lógica concerniente a la contraseñas"""
    def __init__(self) -> None:
        pass
    
    def get_politicas(self):
        """
        Obtiene las políticas de seguridad que deben cumplir las contraseñas.
        Retorna una lista con los siguientes valores:
            Longitud mínima de la contraseña: int
            Si debe contener signos especiales: boolean
            Si debe contener mayúsculas: boolean
            Si debe contener dígitos: boolean
            Si puede ser igual a una contraseña anterior del usuario: boolean
        """
        #Políticas obtenidas del sistema externo hardcodeadas
        #Consultar y modificar
        longitud_minima = 8
        contiene_signos_esp = True
        contiene_mayus = True
        contiene_dig = True
        repite_anterior = True
        politicas = []
        politicas.append(longitud_minima)
        politicas.append(contiene_signos_esp)
        politicas.append(contiene_mayus)
        politicas.append(contiene_dig)
        politicas.append(repite_anterior)
        return politicas

    def validar_politicas(self, contrasenia):
        """
        Valida si la contraseña cumple las políticas de seguridad. Retorna una True en ese caso y False en caso contrario
        """

        politicas = self.get_politicas()

        if len(contrasenia)<politicas[0] or len(contrasenia)>50:
            return False
        
        if politicas[1]:
            #La contraseña debe contener @#$%&*
            sig_esp = ['@', '#', '$', '%', '&', '*']
            cumple_sig_esp = False
            for s in sig_esp:
                if s in contrasenia:
                    cumple_sig_esp = cumple_sig_esp or True
            if not cumple_sig_esp:
                return False
        
        if politicas[2]:
            #La contraseña debe contener al menos una mayúscula
            cumple_mayus = False
            for c in contrasenia:
                if c.isupper():
                    cumple_mayus = True
                    break
            if not cumple_mayus:
                return False
        
        if politicas[3]:
            #La contraseña debe contener al menos un dígito
            cumple_dig = False
            for c in contrasenia:
                if c.isdigit():
                    cumple_dig = True
                    break
            if not cumple_dig:
                return False

        if not politicas[4]:
            #Consultar e implementar
            pass

        return True

class GestorSesion():
    """Clase encargada de suministrar todo la lógica concerniente a la clase Sesion"""
    pass

