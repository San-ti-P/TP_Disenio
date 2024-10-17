from django.urls import path
from .api import BuscarBedelAPIView
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("BuscarBedel", BuscarBedelAPIView.as_view(), name="buscador bedeles")
]