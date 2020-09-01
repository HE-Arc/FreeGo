from rest_framework import serializers
from .models import Fridge, User
from notifications.models import Notification


class FridgeSerializer(serializers.ModelSerializer):
    '''Fridge Serializer'''

    class Meta:
        model = Fridge
        fields = ['name', 'address', 'city', 'zip_code', 'phone_number',
                  'latitude', 'longitude', 'image', 'user', 'is_active']


class UserSerializer(serializers.ModelSerializer):
    '''User Serializer'''
    class Meta:
        model = User
        fields = ['pk', 'username', 'email']


class NotificationSerializer(serializers.ModelSerializer):
    '''Notification Serializer'''
    class Meta:
        model = Notification
        fields = ['recipient', 'unread', 'target', 'verb']
