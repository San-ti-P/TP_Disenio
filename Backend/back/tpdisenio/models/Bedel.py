from django.db import models
from django.utils.translation import gettext_lazy as _
from .Usuario import Usuario

class Bedel(Usuario):
    class Meta:
        db_table = "Bedel"

    class TipoTurno(models.TextChoices):
        MANIANA = "Maniana"
        TARDE = "Tarde"
        NOCHE = "Noche"
    
    usuario_ptr = models.OneToOneField(Usuario, on_delete=models.CASCADE, primary_key=True, db_column="id_usuario", parent_link=True)
    turno = models.CharField(max_length=10, choices=TipoTurno)

