from django.test import TestCase
from django.urls import reverse
from fridge.tests.test_tools import create_user, create_fridge, create_food, create_reservation
from fridge.models import Food
from django.utils import timezone


class AdminIndexViewTest(TestCase):
    def setUp(self):
        self.user = create_user(
            'test_admin', 'test_admin@test.test', 'SI3vOb*Fa8wY')

    def test_logout(self):
        """
        If you are logout
        """
        response = self.client.get('/myadmin/')
        self.assertEqual(response.status_code, 302)

    def test_login_no_fridge(self):
        """
        If you are login without friges
        """
        self.client.login(username='test_admin', password='SI3vOb*Fa8wY')
        response = self.client.get('/myadmin/')

        self.assertEqual(response.status_code, 200)
        self.assertQuerysetEqual(response.context['fridges'], [])

    def test_login_with_fridges(self):
        """
        If you are login and have fridges
        """
        self.client.login(username='test_admin', password='SI3vOb*Fa8wY')

        create_fridge(self.user, name='fridge1')

        response = self.client.get('/myadmin/')
        self.assertEqual(response.status_code, 200)
        self.assertQuerysetEqual(response.context['fridges'], [
                                 '<Fridge: fridge1>'])


class StoreIndexViewTest(TestCase):
    def setUp(self):
        self.user = create_user(
            'test_store', 'test_store@test.test', 'SI3vOb*Fa8wY')

    def test_logout(self):
        """
        If you are logout
        """
        response = self.client.get('/store/')
        self.assertEqual(response.status_code, 302)

    def test_login(self):
        """
        If you are login
        """
        self.client.login(username='test_store', password='SI3vOb*Fa8wY')
        create_fridge(self.user, name="MonFreeGo")
        response = self.client.get('/store/')

        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "MonFreeGo")


class FridgeCreateViewTest(TestCase):
    def setUp(self):
        self.user = create_user(
            'test_fridge', 'test_fridge@test.test', 'SI3vOb*Fa8wY')

    def test_logout(self):
        """
        If you are logout
        """
        response = self.client.get('/fridge/new/')
        self.assertEqual(response.status_code, 302)

    def test_login(self):
        """
        If you are login
        """
        self.client.login(username='test_fridge', password='SI3vOb*Fa8wY')
        response = self.client.get('/fridge/new/')

        self.assertEqual(response.status_code, 200)


class FridgeListViewTest(TestCase):
    def test_no_fridges(self):
        """
        If no fridges exist
        """
        response = self.client.get('/fridge/list/')
        self.assertEqual(response.status_code, 200)
        # TODO display message
        self.assertQuerysetEqual(response.context['fridge_list'], [])


class FoodCreateViewTest(TestCase):
    def setUp(self):
        self.user = create_user(
            'test_food_create', 'test_food_create@test.test', 'SI3vOb*Fa8wY')
        self.fridge = create_fridge(self.user)
        self.food = Food(name="test", vegetarian=True, vegan=True,
                         expiration_date=timezone.now(), user=self.user, fridge=self.fridge)

    def test_logout(self):
        """
        If you are logout
        """
        response = self.client.get('/food/new/')
        self.assertEqual(response.status_code, 302)

    def test_login(self):
        """
        If you are login
        """
        self.client.login(username='test_food_create', password='SI3vOb*Fa8wY')
        response = self.client.get('/food/new/')
        self.assertEqual(response.status_code, 200)


class FoodListViewTest(TestCase):
    def setUp(self):
        self.user = create_user(
            'test_food_list', 'test_food_list@test.test', 'SI3vOb*Fa8wY')
        self.fridge = create_fridge(self.user)

    def test_food_list_empty(self):
        """
        If you didn't have food
        """
        self.client.login(username='test_food_list', password='SI3vOb*Fa8wY')
        response = self.client.get(
            '/food/1/list/')
        self.assertEqual(response.status_code, 200)
        self.assertQuerysetEqual(response.context['food_available'], [])
        self.assertQuerysetEqual(response.context['food_reserve'], [])

    def test_food_available(self):
        """
        If you have available food
        """
        self.client.login(username='test_food_list', password='SI3vOb*Fa8wY')
        create_food(self.fridge, self.user)
        response = self.client.get(
            '/food/1/list/')
        self.assertEqual(response.status_code, 200)
        self.assertQuerysetEqual(response.context['food_available'], [
                                 '<Food: food_test>'])
        self.assertQuerysetEqual(response.context['food_reserve'], [])

    def test_food_reserved(self):
        """
        If you have reserved food
        """
        self.client.login(username='test_food_list', password='SI3vOb*Fa8wY')
        food = create_food(self.fridge, self.user)
        create_reservation(food, self.user)
        response = self.client.get(
            '/food/1/list/')
        self.assertEqual(response.status_code, 200)
        self.assertQuerysetEqual(response.context['food_available'], [])
        self.assertQuerysetEqual(response.context['food_reserve'], [
                                 '<Food: food_test>'])


class SettingsViewTest(TestCase):
    def setUp(self):
        self.user = create_user(
            'test_settings', 'test_settings@test.test', 'SI3vOb*Fa8wY')

    def test_logout(self):
        """
        If you are logout
        """
        response = self.client.get('/settings/')
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Vous n'avez pas encore de compte")

    def test_login_without_freego(self):
        """
        You are login but didn't have FreeGo
        """
        self.client.login(username='test_settings', password='SI3vOb*Fa8wY')
        response = self.client.get('/settings/')
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Administration")
        self.assertNotContains(response, "Mon Free Go")

    def test_login_with_freego(self):
        """
        You are login and have FreeGo
        """
        self.client.login(username='test_settings', password='SI3vOb*Fa8wY')
        create_fridge(self.user)
        response = self.client.get('/settings/')
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Administration")
        self.assertContains(response, "Mon Free Go")
