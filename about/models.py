from django.db import models

# Create your models here.

class About(models.Model):
    paragraph_one = models.TextField()
    paragraph_two = models.TextField()
    last_changed = models.DateTimeField('date_published')
    