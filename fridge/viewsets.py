from fridge.models import Fridge, FridgeFollowing
from fridge.serializers import FridgeSerializer, NotificationSerializer
from fridge.permissions import IsAdminOrReadOnly, ReadOnly

from rest_framework import permissions, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from notifications.models import Notification


class FridgeViewSet(viewsets.ModelViewSet):
    """
    Viewset for fridge model
    """
    queryset = Fridge.objects.filter(is_active=True)
    serializer_class = FridgeSerializer
    permission_classes = [IsAdminOrReadOnly]

    @action(detail=False, permission_classes=[permissions.IsAuthenticated])
    def favorites(self, request):
        """
        Return list of favorites fridge according to the current user logged.
        """
        reserved_fridges = FridgeFollowing.objects.filter(
            user=request.user).values_list('fridge_id')
        favorites = Fridge.objects.filter(id__in=reserved_fridges)
        serializer = self.get_serializer(favorites, many=True)
        return Response(serializer.data)


class NotificationViewSet(viewsets.ModelViewSet):
    """
    Viewset for notification model.
    """
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer
    permission_classes = [ReadOnly]

    @action(detail=False)
    def by_user(self, request):
        """
        Return notifications according to the current user logged.
        """
        notifications = Notification.objects.filter(
            recipient=self.request.user).filter(unread=True)
        serializer = self.get_serializer(notifications, many=True)
        return Response(serializer.data)
