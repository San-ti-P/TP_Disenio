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