from django.contrib import admin
from .models.Usuario import Usuario
from .models.Administrador import Administrador
from .models.Bedel import Bedel
from .models.Periodo import Periodo
from .models.TipoActividad import TipoActividad
from .models.TipoPizarron import TipoPizarron
from .models.Aula import Aula
from .models.AulaInformatica import AulaInformatica
from .models.AulaMultimedios import AulaMultimedios
from .models.AulaSinRecursosAdicionales import AulaSinRecursosAdicionales
# Register your models here.

admin.site.register(Usuario)
admin.site.register(Administrador)
admin.site.register(Bedel)
admin.site.register(Periodo)
admin.site.register(TipoActividad)
admin.site.register(TipoPizarron)
admin.site.register(Aula)
admin.site.register(AulaInformatica)
admin.site.register(AulaSinRecursosAdicionales)
admin.site.register(AulaMultimedios)

