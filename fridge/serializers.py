from rest_framework import serializers
from .models import Fridge
from notifications.models import Notification


class FridgeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fridge
        fields = '__all__'


class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = ['recipient', 'unread', 'target', 'verb']
