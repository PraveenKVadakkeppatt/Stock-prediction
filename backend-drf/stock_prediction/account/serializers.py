from django .contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only = True,style = {'input_type':'password'})
    class Meta:
        model = User
        fields = ['username','email','password']

    
    def create(self, validate_data):
        user = User.objects.create_user(
            validate_data['username'],
            validate_data['email'],
            validate_data['password']
        )
        return user