from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

from django.shortcuts import render

from django.template.response import TemplateResponse

def mainPage(request):
    return render(request, "pages/main-page.html")

def detailPage(request):
    return render(request, "pages/detail-page.html")
def lessonPage(request):
    return render(request, "pages/lesson-menu-page.html")

def login(request):
    return render(request, "pages/login.html")

# def index(request):
#     header = "Данные пользователя"  # обычная переменная
#     langs = ["Python", "Java", "C#"]  # список
#     user = {"name": "Tom", "age": 23}  # словарь
#     address = ("Абрикосовая", 23, 45)  # кортеж
#
#     data = {"header": header, "langs": langs, "user": user, "address": address}
#     return render(request, "main-page.html", context=data)
#
#
#
# def about(request, name, age):
#     return HttpResponse(f"""
#             <h2>О пользователе</h2>
#             <p>Имя: {name}</p>
#             <p>Возраст: {age}</p>
#     """)
#
#
# def contact(request):
#     return HttpResponse("<h2>Контакты</h2>")
#
# def user(request, name="Undefined", age =0):
#     return HttpResponse(f"<h2>Имя: {name}  Возраст: {age}</h2>")