from django.urls import path
from .api import bedeles, login, politicas, iniciar_reserva
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("bedeles", bedeles, name="manejador de bedeles"),
    path("login", login, name="login usuarios"),
    path("politicas", politicas, name="buscador politicas"),
    path("iniciar_reserva", iniciar_reserva, name="iniciador reserva"),
    #path("buscar_bedel", buscar_bedel, name="buscador bedeles"),
    #path("modificar_bedel", modificar_bedel, name="actualizador bedeles"),
    #path("registrar_bedel", registrar_bedel, name="registrador bedeles"),
    #path("eliminar_bedel", eliminar_bedel, name="eliminador bedeles")
]