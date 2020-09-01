from rest_framework.test import APITestCase
from rest_framework import status
from fridge.tests.test_tools import create_user, create_fridge
from fridge.models import Fridge
from fridge.serializers import FridgeSerializer
from rest_framework.test import APIRequestFactory
from django.test import TestCase
from django.urls import reverse


class FridgeViewSetTest(TestCase):
    """
    Test module for fridge API
    """

    def setUp(self):
        self.user = create_user('test', 'test@test.test', 'test')
        self.user2 = create_user('test2', 'test2@test.test', 'test')
        self.fridge = create_fridge(
            user=self.user, name="test", is_active=True)
        self.fridge2 = create_fridge(
            user=self.user2, name="test2", is_active=True)

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
