from rest_framework import serializers
from .models import Fridge, User
from notifications.models import Notification


class FridgeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fridge
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['pk', 'username', 'email']


class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = ['recipient', 'unread', 'target', 'verb']
