from django.db import models

# Create your models here.
class Contact(models.Model):
    contact_info = models.TextField(default='')
    contact_email = models.CharField(default='', max_length=200)
    