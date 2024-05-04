from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import CreateBookSerializer,ReadListSerializer
from .models import Book, ReadList



class CreateBookView(APIView):
    def post(self, request):
        data = request.data
        data['created_by'] = request.user.id
        book = Book.objects.filter(title = data['title'])
        if book:
            return Response({'message':'Already have a book'}, status=status.HTTP_400_BAD_REQUEST)
        serializer = CreateBookSerializer(data = data)
        if serializer.is_valid():
            serializer.save()
            print('Created')
            print(serializer.data)
            return Response({'message':'Book Created Successfully'}, status=status.HTTP_200_OK)
        else:
            return Response({'message':'Please make sure all fields are filled'}, status=status.HTTP_400_BAD_REQUEST)

class UserCreatedBook(APIView):
    def get(self, request):
        books = Book.objects.filter(created_by = request.user)
        serializer = CreateBookSerializer(books, many=True)
        print(serializer.data)
        return Response({'books':serializer.data}, status=status.HTTP_200_OK)

class UserBookDeleteView(APIView):
    def get(self,request,id):
        book = Book.objects.get(id = id)
        book.delete()
        return Response({'message':"Book Deleted Successfully"}, status=status.HTTP_200_OK)


class GetBooksUsingGenreView(APIView):
    def get(self, request, genre):
        books = Book.objects.filter(genre=genre)
        serializer = CreateBookSerializer(books, many=True)
        return Response({"message":"success","books":serializer.data}, status=status.HTTP_200_OK)


class AddToReadListView(APIView):
    def get(self,request,id):
        book = ReadList.objects.filter(book = id , user = request.user.id)
        if book:
            return Response({'message':"Book Already in readlist"}, status= status.HTTP_400_BAD_REQUEST)
        data = {
            'book':id,
            'user':request.user.id
        }
        serializer = ReadListSerializer(data = data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message':"Book Added to the Readlist"}, status=status.HTTP_200_OK)
        return Response({'message':"Added to readlist"}, status=status.HTTP_200_OK)

class GetReadListView(APIView):
    def get(self,request):
        book = request.user.books.all().values_list('book', flat=True)
        books = Book.objects.filter(id__in=book)
        serializer = CreateBookSerializer(books, many=True)
        return Response({'message': "Books are got","books":serializer.data}, status=status.HTTP_200_OK)

class RemoveReadListView(APIView):
    def get(self,request,id):
        book = ReadList.objects.get(book = id, user=request.user.id)
        book.delete()
        return Response({"message":"Book removed from readlist"}, status=status.HTTP_200_OK)








