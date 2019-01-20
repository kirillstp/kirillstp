from django.db import models

# Create your models here.

class Gallery(models.Model):
    title = models.CharField(max_length=200)
    text = models.TextField()
    last_changed = models.DateTimeField()
    image_path = models.CharField(max_length=200)
