# Generated by Django 4.2.23 on 2025-07-12 08:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='AvailDeadline',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='AvailStart',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
