from django.db import models

class Question(models.Model):
    pergunta = models.CharField(max_length=255)
    opcoes = models.JSONField()
    resposta_correta = models.CharField(max_length=100)

    def __str__(self):
        return self.pergunta