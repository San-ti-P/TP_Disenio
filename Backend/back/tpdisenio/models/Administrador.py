from django.db import models
from django.utils.translation import gettext_lazy as _
from .Usuario import Usuario

class Administrador(Usuario):
    class Meta:
        db_table = "Administrador"

    usuario_ptr = models.OneToOneField(Usuario, on_delete=models.CASCADE, primary_key=True, db_column="id_usuario", parent_link=True)
