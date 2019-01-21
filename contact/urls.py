from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='contact'),
    path('status/<int:success>', views.status, name='status')

]
