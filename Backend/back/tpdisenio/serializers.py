from rest_framework import serializers
from .models import Bedel

class BedelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bedel
        fields = '__all__'