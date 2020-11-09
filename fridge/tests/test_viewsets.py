from rest_framework import status
from fridge.tests.test_tools import create_user, create_fridge, create_favorite
from fridge.models import Fridge, User
from fridge.serializers import FridgeSerializer, NotificationSerializer
from django.test import TestCase
from django.urls import reverse
from notifications.models import Notification
from notifications.signals import notify


class FridgeViewSetTest(TestCase):
    """
    Test module for fridge API
    """

    def setUp(self):
        self.user = create_user('test', 'test@test.test', 'test')
        self.user2 = create_user('test2', 'test2@test.test', 'test')
        self.client.login(username='test', password='test')

        self.fridge = create_fridge(
            user=self.user, name="test", is_active=True)
        self.fridge2 = create_fridge(
            user=self.user2, name="test2", is_active=True)
        create_favorite(self.user, self.fridge)

    def test_get_all_fridges(self):
        """
        Test we can get all fridges.
        """
        response = self.client.get(
            reverse('fridge:fridge-list'), format="json")
        fridges = Fridge.objects.all()
        serializer = FridgeSerializer(fridges, many=True)

        [fridge.pop('image') for fridge in response.data + serializer.data]

        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_favorites(self):
        """
        Test we can get only favorites
        """
        response = self.client.get(
            reverse('fridge:fridge-favorites'), format="json")
        favorites = Fridge.objects.filter(pk=self.fridge.pk)
        serializer = FridgeSerializer(favorites, many=True)

        [fridge.pop('image') for fridge in response.data + serializer.data]

        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class NotificationViewSetTest(TestCase):
    """
    Test module for notifications API
    """

    def setUp(self):
        self.user = create_user(
            username="test", email="test@test.ch", password="test")
        self.user2 = create_user(
            username="test2", email="test2@test.ch", password="test")
        self.user3 = create_user(
            username="test3", email="test3@test.ch", password="test")
        self.user4 = create_user(
            username="test4", email="test4@test.ch", password="test")
        self.client.login(username='test', password='test')

        recipient = User.objects.all()

        verb = "You have new notifications"
        notify.send(self.user, recipient=recipient,
                    verb=verb)

    def test_get_all_notifications(self):
        """
        Test we can get all fridges.
        """
        response = self.client.get(
            reverse('fridge:notification-list'), format="json")
        notifications = Notification.objects.all()
        serializer = NotificationSerializer(notifications, many=True)

        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_notifications_by_user(self):
        """
        Test we can get only notification for user
        """
        # TODO
        pass
