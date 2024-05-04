from django.db import models
import uuid

from authApp.models import Custom_User

genre_choices = [
    ('Fiction', 'Fiction'),
    ('Non-fiction', 'Non-fiction'),
    ('Mystery', 'Mystery'),
    ('Romance', 'Romance'),
    ('Science Fiction', 'Science Fiction')
]

class Book(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=200)
    genre = models.CharField(max_length=200, choices=genre_choices, default='Fiction')
    date = models.DateTimeField()
    description = models.TextField(default='', null=True)
    created_by = models.ForeignKey(Custom_User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now=True)


class ReadList(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    book = models.ForeignKey(Book,on_delete=models.CASCADE)
    user = models.ForeignKey(Custom_User, on_delete=models.CASCADE, related_name='books')
