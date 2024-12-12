from rest_framework import serializers

class ErrorsListSerializer(serializers.Serializer):
    """Serializador de la clase ErrorList"""
    errors = serializers.ListField(default=[])