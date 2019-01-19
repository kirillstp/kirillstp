from django.shortcuts import render, get_object_or_404
from .models import About

# Create your views here.e

def index(request):
    about = get_object_or_404(About, pk=1)
    return render(request, 'about/index.html', {'about': about})
