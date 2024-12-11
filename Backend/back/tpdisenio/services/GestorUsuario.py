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

