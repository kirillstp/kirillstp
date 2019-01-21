from django.core.mail import send_mail, BadHeaderError
from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse
from django.conf import settings
from .models import Contact
from .forms import ContactForm

# Create your views here.
def index(request):
    if request.method == 'GET':
        contact = get_object_or_404(Contact, pk=1)
        contact_form = ContactForm()
    else:
        form = ContactForm(request.POST)
        contact_email = Contact.objects.get(pk=1).contact_email
        if form.is_valid():
            subject = form.cleaned_data['subject']
            sender = form.cleaned_data['sender']
            message = form.cleaned_data['message']
            try: 
                send_mail(subject, "FROM: {};;;;;MESSAGE: {}".format(sender, message), settings.EMAIL_HOST_USER, [contact_email])
            except BadHeaderError:
                return redirect('status/1')
        return redirect('status/0')
    return render(request, 'contact/index.html', {'contact': contact,
                                                  'contact_form': contact_form,
                                                  'message': ''})

def status(request, success):
    contact = get_object_or_404(Contact, pk=1)
    contact_form = ContactForm()
    if success == 0:
        message = "Your message has been sent."
    else:
        message = "Could not send your message. Please try again later."
    return render(request, 'contact/index.html',  {'contact': contact,
                                                  'contact_form': contact_form,
                                                  'message': message})