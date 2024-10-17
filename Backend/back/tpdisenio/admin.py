from django.contrib import admin
from .models import Usuario, Administrador, Bedel, Periodo, TipoActividad, TipoPizarron, Aula, AulaInformatica, AulaMultimedios, AulaSinRecursosAdicionales

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

