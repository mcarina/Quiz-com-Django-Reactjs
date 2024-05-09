from django.urls import path
from rest_framework.routers import SimpleRouter
from .views_v1 import Perguntas

router = SimpleRouter()
urlpatterns = [
    path('perguntas/', Perguntas.as_view(), name = "get_perguntas"),
]
