from django.db import models


class Todo(models.Model):
    task = models.CharField(max_length=30)
    description = models.CharField(max_length=200)


class Message(models.Model):
    username = models.CharField(max_length=30)
    message = models.CharField(max_length=200)
