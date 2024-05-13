# Projeto com React.js e Django REST Framework
>_Node 18.18 ou superior, python 3.11 ou superior e django version 5_
>
>Este projeto consiste em um Quiz desenvolvido utilizando React.js para o frontend e Django REST Framework para o backend.

## Funcionalidades
> - Responder ao quiz;
> - Visualizar pontuação e resultados do quiz;
> - Dinâmico e interativo.

## Instalação

Certifique-se de ter o Node.js e o Python instalados em sua máquina.

1. Clone este repositório:

```bash
git clone https://github.com/mcarina/Quiz-com-Django-Reactjs.git
```
2. Instale as dependências do frontend:

```bash
cd front-quiz
npm install
```
3. Instale as dependências do backend:

```bash
cd ..
cd quiz
pip install -r requirements.txt
```

4. Banco de dados feito com db sqlite

```bash
python manage.py migrate
python manage.py runserver
```
