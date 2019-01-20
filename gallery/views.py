from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .models import Gallery

def index(request):
    gallery_list = Gallery.objects.order_by('last_changed')
    return render(request, 'gallery/index.html', {'gallery_list': gallery_list})
