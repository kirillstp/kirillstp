from django.shortcuts import render

# Create your views here.e

def index(request):
    return render(request, 'about/index.html')
