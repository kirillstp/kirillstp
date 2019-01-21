from django import forms

class ContactForm(forms.Form):
    sender = forms.EmailField(label='Your Email', required=True)
    subject = forms.CharField(label='Subject', required=True)
    message = forms.CharField(label='Message', widget=forms.Textarea, required=True)