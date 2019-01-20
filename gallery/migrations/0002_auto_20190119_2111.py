# Generated by Django 2.1.4 on 2019-01-20 02:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gallery', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='gallery',
            name='title',
            field=models.CharField(default='', max_length=200),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='gallery',
            name='image_path',
            field=models.CharField(max_length=200),
        ),
    ]
