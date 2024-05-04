from rest_framework import serializers
from .models import Book, ReadList



class CreateBookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'


class ReadListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReadList
        fields = '__all__'






