from django.urls import path
from .api import buscar_bedel_api_view, registrar_bedel_api_view
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("BuscarBedel", buscar_bedel_api_view, name="buscador bedeles"),
    path("RegistrarBedel", registrar_bedel_api_view, name="registrador bedeles")
]