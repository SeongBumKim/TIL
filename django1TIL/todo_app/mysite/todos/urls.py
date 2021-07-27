from django.urls import path
from todos import views

app_name = 'todos'
urlpatterns = [
    path('', views.index, name='index'),
    path('<int:Schedule_id>/title/', views.list, name='title'),
    path('<int:Schedule_contents>/', views.detail, name='contents'),
]