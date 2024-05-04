from rest_framework import serializers
from django.contrib.auth.hashers import make_password

from .models import Custom_User


class SignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = Custom_User
        fields = '__all__'
        extra_kwargs = {
            "password": {"write_only": True}
        }

    def create(self, validated_data):
        password = make_password(validated_data['password'])
        user = Custom_User.objects.create(username=validated_data['username'],
                                    email=validated_data['email'],
                                    password=password
                                    )

        return user
