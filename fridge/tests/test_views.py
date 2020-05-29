from django.test import TestCase
from django.urls import reverse
from fridge.tests.test_tools import create_user, create_fridge, \
    create_food, create_reservation
from fridge.models import Food
from django.utils import timezone
from django.shortcuts import resolve_url as r


class AdminIndexViewTest(TestCase):
    def setUp(self):
        self.user = create_user('test', 'test@test.test', 'test')

    def test_logout(self):
        """
        If you are logout
        """
        response = self.client.get(reverse('fridge:myadmin'))
        self.assertEqual(response.status_code, 302)

    def test_login_no_fridge(self):
        """
        If you are login without friges
        """
        self.client.login(username='test', password='test')
        response = self.client.get(reverse('fridge:myadmin'))

        self.assertEqual(response.status_code, 200)
        self.assertQuerysetEqual(response.context['fridges'], [])

    def test_login_with_fridges(self):
        """
        If you are login and have fridges
        """
        self.client.login(username='test', password='test')

        create_fridge(self.user, name='fridge1')

        response = self.client.get(reverse('fridge:myadmin'))
        self.assertEqual(response.status_code, 200)
        self.assertQuerysetEqual(response.context['fridges'], [
                                 '<Fridge: fridge1>'])


class StoreIndexViewTest(TestCase):
    def setUp(self):
        self.user = create_user('test', 'test@test.test', 'test')

    def test_logout(self):
        """
        If you are logout
        """
        response = self.client.get(reverse('fridge:store'))
        self.assertEqual(response.status_code, 302)

    def test_login(self):
        """
        If you are login
        """
        self.client.login(username='test', password='test')
        create_fridge(self.user, name="MonFreeGo")
        response = self.client.get(reverse('fridge:store'))

        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "MonFreeGo")


class FridgeCreateViewTest(TestCase):
    def setUp(self):
        self.user = create_user('test', 'test@test.test', 'test')

    def test_logout(self):
        """
        If you are logout
        """
        response = self.client.get(reverse('fridge:fridge-new'))
        self.assertEqual(response.status_code, 302)

    def test_login(self):
        """
        If you are login
        """
        self.client.login(username='test', password='test')
        response = self.client.get(reverse('fridge:fridge-new'))

        self.assertEqual(response.status_code, 200)


class FridgeListViewTest(TestCase):
    def test_no_fridges(self):
        """
        If no fridges exist
        """
        response = self.client.get(reverse('fridge:fridge-list'))
        self.assertEqual(response.status_code, 200)
        # TODO display message
        self.assertQuerysetEqual(response.context['fridge_list'], [])


class FoodCreateViewTest(TestCase):
    def setUp(self):
        self.user = create_user('test', 'test@test.test', 'test')
        self.fridge = create_fridge(self.user)
        self.food = Food(name="test", vegetarian=True, vegan=True,
                         expiration_date=timezone.now(), user=self.user,
                         fridge=self.fridge)

    def test_logout(self):
        """
        If you are logout
        """
        response = self.client.get(reverse('fridge:food-form'))
        self.assertEqual(response.status_code, 302)

    def test_login(self):
        """
        If you are login
        """
        self.client.login(username='test', password='test')
        response = self.client.get(reverse('fridge:food-form'))
        self.assertEqual(response.status_code, 200)


class FoodListViewTest(TestCase):
    def setUp(self):
        self.user = create_user('test', 'test@test.test', 'test')
        self.fridge = create_fridge(self.user)

    def test_food_list_empty(self):
        """
        If you didn't have food
        """
        self.client.login(username='test', password='test')
        response = self.client.get(
            reverse('fridge:food-list', args=(self.fridge.id,)))
        self.assertEqual(response.status_code, 200)
        self.assertQuerysetEqual(response.context['food_available'], [])
        self.assertQuerysetEqual(response.context['food_reserve'], [])

    def test_food_available(self):
        """
        If you have available food
        """
        self.client.login(username='test', password='test')
        create_food(self.fridge, self.user)
        response = self.client.get(
            reverse('fridge:food-list', args=(self.fridge.id,)))
        self.assertEqual(response.status_code, 200)
        self.assertQuerysetEqual(response.context['food_available'], [
                                 '<Food: food_test>'])
        self.assertQuerysetEqual(response.context['food_reserve'], [])

    def test_food_reserved(self):
        """
        If you have reserved food
        """
        self.client.login(username='test', password='test')
        food = create_food(self.fridge, self.user)
        create_reservation(food, self.user)
        response = self.client.get(
            reverse('fridge:food-list', args=(self.fridge.id,)))
        self.assertEqual(response.status_code, 200)
        self.assertQuerysetEqual(response.context['food_available'], [])
        self.assertQuerysetEqual(response.context['food_reserve'], [
                                 '<Food: food_test>'])


class OpeningHourCreateView(TestCase):
    def setUp(self):
        self.user = create_user('test', 'test@test.test', 'test')
        self.fridge = create_fridge(self.user)

    def test_logout(self):
        """
        If you are logout
        """
        response = self.client.get(reverse('fridge:openinghour-form'))
        self.assertEqual(response.status_code, 302)

    def test_login_get(self):
        """
        If you are login
        """
        self.client.login(username='test', password='test')
        response = self.client.get(reverse('fridge:openinghour-form'))
        self.assertEqual(response.status_code, 200)

    # TODO : improve get and test post


class SpecialDayCreateViewTest(TestCase):
    def setUp(self):
        self.user = create_user('test', 'test@test.test', 'test')
        self.fridge = create_fridge(self.user)
        self.food = Food(name="test", vegetarian=True, vegan=True,
                         expiration_date=timezone.now(), user=self.user,
                         fridge=self.fridge)

    def test_logout(self):
        """
        If you are logout
        """
        response = self.client.get(reverse('fridge:openinghour-form'))
        self.assertEqual(response.status_code, 302)

    def test_login_get(self):
        """
        If you are login
        """
        self.client.login(username='test', password='test')
        response = self.client.get(reverse('fridge:openinghour-form'))
        self.assertEqual(response.status_code, 200)

    # TODO : improve get and test post


class SettingsViewTest(TestCase):
    def setUp(self):
        self.user = create_user('test', 'test@test.test', 'test')

    def test_logout(self):
        """
        If you are logout
        """
        response = self.client.get(reverse('fridge:settings'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "You do not have an account yet")

    def test_login_without_freego(self):
        """
        You are login but didn't have FreeGo
        """
        self.client.login(username='test', password='test')
        response = self.client.get(reverse('fridge:settings'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Administration")
        self.assertNotContains(response, "My Free Go")

    def test_login_with_freego(self):
        """
        You are login and have FreeGo
        """
        self.client.login(username='test', password='test')
        create_fridge(self.user)
        response = self.client.get(reverse('fridge:settings'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Administration")
        self.assertContains(response, "My Free Go")


class ServiceWorkerTest(TestCase):
    def setUp(self):
        self.response = self.client.get(r('serviceworker'))

    def test_get(self):
        """GET /serviceworker.js should return status code 200"""
        self.assertEqual(200, self.response.status_code)


class ManifestTest(TestCase):
    def setUp(self):
        self.response = self.client.get(r('manifest'), format='json')

    def test_get(self):
        """GET /manifest.json Should return status code 200"""
        self.assertEqual(self.response.status_code, 200)

    def test_template(self):
        """Must have the template manifest.json"""
        self.assertTemplateUsed(self.response, 'manifest.json')

    def test_manifest_contains(self):
        """Must be the attributes to manitesf.json"""
        contents = [
            '"name":',
            '"short_name":',
            '"description":',
            '"start_url":',
            '"display":',
            '"scope":',
            '"background_color":',
            '"theme_color":',
            '"orientation":',
            '"icons":',
            '"dir":',
            '"lang":'
        ]
        for expected in contents:
            with self.subTest():
                self.assertContains(self.response, expected)

# TODO : improve all tests
