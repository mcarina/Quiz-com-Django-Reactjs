from rest_framework import generics
from .models import Question
from .serializer import QuestionSerializer

class Perguntas(generics.ListAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

# fazer a versao 'views_v2' a opção viewsets do rest_framework 