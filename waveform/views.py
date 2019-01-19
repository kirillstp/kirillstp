import json
import numpy as np
from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    """
        Generates waveform and returns it for the display in the header
    """
    x_data = np.linspace(0, 1, 100)
    y_data = np.sin(10* np.pi * x_data) * np.exp(-5 * (1-x_data))
    y_data = y_data / max(y_data)
    print(max(y_data))
    response = {'x':list(x_data),
                'y':list(y_data)}
    response = json.dumps(response)
    return HttpResponse(response)