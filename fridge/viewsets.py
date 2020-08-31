from fridge.models import Fridge, FridgeFollowing
from fridge.serializers import FridgeSerializer, NotificationSerializer
from fridge.permissions import IsAdminOrReadOnly

from rest_framework import permissions, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from notifications.models import Notification


class FridgeViewSet(viewsets.ModelViewSet):
    queryset = Fridge.objects.filter(is_active=True)
    serializer_class = FridgeSerializer
    permission_classes = [IsAdminOrReadOnly]

    @action(detail=False, permission_classes=[permissions.IsAuthenticated])
    def favorites(self, request):
        reserved_fridges = FridgeFollowing.objects.filter(
            user=request.user).values_list('fridge_id')
        favorites = Fridge.objects.filter(id__in=reserved_fridges)
        serializer = self.get_serializer(favorites, many=True)
        return Response(serializer.data)


class NotificationViewSet(viewsets.ModelViewSet):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer
    permission_classes = [permissions.IsAuthenticated]

    @action(detail=False)
    def by_user(self, request):
        notifications = Notification.objects.filter(
            recipient=self.request.user).filter(unread=True)
        serializer = self.get_serializer(notifications, many=True)
        return Response(serializer.data)
