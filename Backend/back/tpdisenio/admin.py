from django.contrib import admin
from .models import Administrador, Aula, AulaInformatica, AulaMultimedios, AulaSinRecursosAdicionales, Bedel, Periodo, TipoActividad, TipoPizarron, Usuario

# Register your models here.

admin.site.register(Administrador)
admin.site.register(Aula)
admin.site.register(AulaInformatica)
admin.site.register(AulaMultimedios)
admin.site.register(AulaSinRecursosAdicionales)
admin.site.register(Bedel)
admin.site.register(Periodo)
admin.site.register(TipoActividad)
admin.site.register(TipoPizarron)
admin.site.register(Usuario)

