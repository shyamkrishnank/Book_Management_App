from django.urls import path
from .views import *

urlpatterns = [
    path('create/', CreateBookView.as_view()),
    path('mybooks/',  UserCreatedBook.as_view()),
    path('delete/<uuid:id>', UserBookDeleteView.as_view()),

    path('getbooks/<str:genre>', GetBooksUsingGenreView.as_view()),
    path('addtoread/<uuid:id>', AddToReadListView.as_view()),
    path('getreadlist', GetReadListView.as_view()),
    path('deletebook/<uuid:id>', RemoveReadListView.as_view())
]