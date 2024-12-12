from rest_framework import serializers
from ..models import Reservacion

class ReservacionDTOSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservacion
        fields = ['dia', 'fecha', 'duracion', 'hora_inicio']