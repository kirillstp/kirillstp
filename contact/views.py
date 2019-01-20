from django.shortcuts import render, get_object_or_404
from .models import Contact

# Create your views here.
def index(request):
    contact = get_object_or_404(Contact, pk=1)
    return render(request, 'contact/index.html', {'contact': contact})
