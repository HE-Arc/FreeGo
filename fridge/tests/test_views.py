from django.test import TestCase
from django.urls import reverse, reverse_lazy
from fridge.tests.test_tools import create_user, create_fridge, \
    create_food, create_reservation, create_favorite
from fridge.models import Food, Fridge, SpecialDay, OpeningHour, \
    User, Reservation, Sponsor
from django.utils import timezone
from django.shortcuts import resolve_url as r
from django.core.files.uploadedfile import SimpleUploadedFile
from datetime import timedelta, date
from django.contrib.auth.models import Permission


class AdminIndexViewTest(TestCase):
    def setUp(self):
        self.user = create_user('test', 'test@test.test', 'test')
        permission = Permission.objects.get(codename="admin")
        self.user.user_permissions.add(permission)

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
        permission = Permission.objects.get(codename="store")
        self.user.user_permissions.add(permission)

    def test_login(self):
        """
        If you are login
        """
        self.client.login(username='test', password='test')
        fridge = create_fridge(self.user, name="MonFreeGo")
        response = self.client.get(reverse('fridge:store', args=(fridge.pk,)))

        self.assertEqual(response.status_code, 200)


class FridgeCreateViewTest(TestCase):
    def setUp(self):
        self.user = create_user('test', 'test@test.test', 'test')
        self.client.login(username='test', password='test')
        permission = Permission.objects.get(codename="admin")
        self.user.user_permissions.add(permission)

    def test_post(self):
        image = SimpleUploadedFile(name='test.png', content=open(
            'fridge/static/fridge/test/test.png', 'rb').read(),
            content_type='image/png')
        json = {
            'name': 'A Fridge',
            'address': 'Citadelle 5',
            'zip_code': '2525',
            'phone_number': '0790000000',
            'city': 'Le Landeron',
            'image': image,
            'user': self.user.pk
        }

        response = self.client.post(reverse('fridge:fridge-new'), json)

        self.assertRedirects(response, reverse('fridge:myadmin'))
        self.assertEqual(len(Fridge.objects.all()), 1)
        self.assertEqual(Fridge.objects.last().name, 'A Fridge')

    def test_get(self):
        response = self.client.get(reverse('fridge:fridge-new'))
        self.assertEqual(response.status_code, 200)


class FridgeDemandCreateViewTest(TestCase):
    def setUp(self):
        self.user = create_user('test', 'test@test.test', 'test')
        self.client.login(username='test', password='test')

    def test_post(self):
        image = SimpleUploadedFile(name='test.png', content=open(
            'fridge/static/fridge/test/test.png', 'rb').read(),
            content_type='image/png')
        json = {
            'name': 'A Fridge',
            'address': 'Citadelle 5',
            'zip_code': '2525',
            'phone_number': '0790000000',
            'city': 'Le Landeron',
            'image': image,
            'user': self.user.pk
        }

        response = self.client.post(reverse('fridge:fridge-demand'), json)

        self.assertRedirects(response, reverse('fridge:settings'))
        self.assertEqual(len(Fridge.objects.all()), 1)
        self.assertEqual(Fridge.objects.last().name, 'A Fridge')

    def test_get(self):
        response = self.client.get(reverse('fridge:fridge-demand'))
        self.assertEqual(response.status_code, 200)


class FridgeUpdateAddressViewTest(TestCase):
    def setUp(self):
        self.user = create_user('test', 'test@test.test', 'test')
        self.client.login(username='test', password='test')
        self.fridge = create_fridge(user=self.user)

    def test_post(self):
        json = {
            'address': 'Citadelle 5',
            'zip_code': '2525',
            'city': 'Le Landeron'
        }

        response = self.client.post(
            reverse('fridge:change-address', args=(self.fridge.pk,)), json)

        self.assertRedirects(response,
                             reverse_lazy('fridge:fridge-detail',
                                          kwargs={'pk': self.fridge.pk}))


class FridgeListViewTest(TestCase):
    def test_no_fridges(self):
        """
        If no fridges exist
        """
        response = self.client.get(reverse('fridge:list'))
        self.assertEqual(response.status_code, 200)
        # TODO display message
        self.assertQuerysetEqual(response.context['fridge_list'], [])


class FridgeFollowingCreateViewTest(TestCase):
    def setUp(self):
        self.user = create_user('test', 'test@test.test', 'test')
        self.client.login(username='test', password='test')
        self.fridge = create_fridge(self.user)

    def test_post(self):
        json = {
            'fridge': self.fridge,
            'user': self.user
        }
        self.assertEqual(self.fridge.is_favorite(self.user), False)
        response = self.client.post(
            reverse_lazy('fridge:fridge-follow',
                         kwargs={'pk': self.fridge.pk}), json)

        self.assertRedirects(response,
                             reverse_lazy('fridge:food-list',
                                          kwargs={'pk': self.fridge.pk}))
        self.assertEqual(self.fridge.is_favorite(self.user), True)


class FridgeFollowingDeleteViewTest(TestCase):
    def setUp(self):
        self.user = create_user('test', 'test@test.test', 'test')
        self.client.login(username='test', password='test')
        self.fridge = create_fridge(self.user)
        create_favorite(user=self.user, fridge=self.fridge)

    def test_post(self):
        self.assertEqual(self.fridge.is_favorite(self.user), True)
        json = {
            'fridge': self.fridge,
            'user': self.user
        }
        response = self.client.post(
            reverse_lazy('fridge:fridge-unfollow',
                         kwargs={'pk': self.fridge.pk}), json)

        self.assertRedirects(response,
                             reverse_lazy('fridge:food-list',
                                          kwargs={'pk': self.fridge.pk}))
        self.assertEqual(self.fridge.is_favorite(self.user), False)


class FridgeValidDemandTest(TestCase):
    def setUp(self):
        self.user = create_user('test', 'test@test.test', 'test')
        self.fridge = create_fridge(self.user)
        self.client.login(username='admin', password='admin')

    def test_get(self):
        self.assertEqual(self.fridge.is_active, False)
        pk = self.fridge.pk
        self.client.get(
            reverse_lazy('fridge:fridge-valid', kwargs={'pk': self.fridge.pk}))
        fridge = Fridge.objects.get(pk=pk)
        self.assertEqual(fridge.is_active, True)


class FridgeRefuseDemandTest(TestCase):
    def setUp(self):
        self.user = create_user('test', 'test@test.test', 'test')
        self.fridge = create_fridge(self.user, is_active=True)
        self.client.login(username='admin', password='admin')

    def test_get(self):
        self.assertEqual(self.fridge.is_active, True)
        pk = self.fridge.pk
        self.client.get(reverse_lazy('fridge:fridge-refuse',
                                     kwargs={'pk': self.fridge.pk}))
        self.assertEqual(Fridge.objects.filter(pk=pk).count(), 0)


class FoodCreateViewTest(TestCase):
    def setUp(self):
        self.user = create_user('test', 'test@test.test', 'test')
        permission = Permission.objects.get(codename="store")
        self.user.user_permissions.add(permission)
        self.client.login(username='test', password='test')
        self.fridge = create_fridge(self.user)

    def test_post(self):
        json = {
            'name': 'An aliment',
            'vegetarian': True,
            'vegan': False,
            'halal': False,
            'lactose_free': False,
            'gluten_free': False,
            'bio': False,
            'expiration_date': date.today() + timedelta(days=1)
        }
        response = self.client.post(
            reverse_lazy('fridge:food-form',
                         kwargs={'pk': self.fridge.pk}), json)
        self.assertRedirects(response,
                             reverse_lazy('fridge:store',
                                          kwargs={'pk': self.fridge.pk}))
        self.assertEqual(len(Food.objects.all()), 1)
        self.assertEqual(Food.objects.last().name, 'An aliment')

    def test_get(self):
        response = self.client.get(
            reverse_lazy('fridge:food-form',
                         kwargs={'pk': self.fridge.pk}))
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


class FoodReservationTest(TestCase):
    def setUp(self):
        self.user = create_user('test', 'test@test.test', 'test')
        self.fridge = create_fridge(self.user, is_active=True)
        self.food = create_food(fridge=self.fridge, user=self.user)
        self.client.login(username='test', password='test')

    def test_get(self):
        pk = self.food.pk
        self.assertEqual(self.food.is_reserved(), False)
        self.assertEqual(Reservation.objects.count(), 0)
        self.client.get(reverse_lazy('fridge:food-reservation',
                                     kwargs={'pk': self.food.pk}))
        food = Food.objects.get(pk=pk)
        self.assertEqual(Reservation.objects.count(), 1)
        self.assertEqual(food.is_reserved(), True)
        self.assertEqual(food.is_reserved_by_me(self.user), True)
        user2 = create_user(username="test2", email="test2@test.test")
        self.assertEqual(food.is_reserved_by_me(user2), False)


class FoodCancellationTest(TestCase):
    def setUp(self):
        self.user = create_user('test', 'test@test.test', 'test')
        self.fridge = create_fridge(self.user, is_active=True)
        self.food = create_food(fridge=self.fridge, user=self.user)
        self.reservation = create_reservation(self.food, self.user)
        self.client.login(username='test', password='test')

    def test_get(self):
        pk = self.food.pk
        food = Food.objects.get(pk=pk)
        self.assertEqual(self.food.is_reserved(), True)
        self.assertEqual(Reservation.objects.count(), 1)
        self.client.get(reverse_lazy('fridge:food-cancellation',
                                     kwargs={'pk': self.food.pk}))
        food = Food.objects.get(pk=pk)
        self.assertEqual(Reservation.objects.count(), 0)
        self.assertEqual(food.is_reserved(), False)


class OpeningHourCreateView(TestCase):
    def setUp(self):
        self.user = create_user('test', 'test@test.test', 'test')
        permission = Permission.objects.get(codename="store")
        self.user.user_permissions.add(permission)
        self.client.login(username='test', password='test')
        self.fridge = create_fridge(self.user)

    def test_post(self):
        json = {
            'weekday': 1,
            'from_hour': "08:00 AM",
            'to_hour': "10:00 AM"
        }
        response = self.client.post(
            reverse('fridge:openinghour-form', args=(self.fridge.pk,)), json)

        self.assertRedirects(response,
                             reverse_lazy('fridge:fridge-detail',
                                          kwargs={'pk': self.fridge.pk}))
        self.assertEqual(len(OpeningHour.objects.all()), 1)
        self.assertEqual(OpeningHour.objects.last().weekday, 1)

    def test_get(self):
        response = self.client.get(
            reverse('fridge:openinghour-form', args=(self.fridge.pk,)))
        self.assertEqual(response.status_code, 200)


class SpecialDayCreateViewTest(TestCase):
    def setUp(self):
        self.user = create_user('test', 'test@test.test', 'test')
        permission = Permission.objects.get(codename="store")
        self.user.user_permissions.add(permission)
        self.client.login(username='test', password='test')
        self.fridge = create_fridge(self.user)

    def test_post(self):
        from_date = (timezone.now() + timedelta(days=0)).date().isoformat()
        to_date = (timezone.now() + timedelta(days=1)).date().isoformat()
        json = {
            'description': 'Holiday',
            'is_open': False,
            'from_date': from_date,
            'to_date': to_date
        }

        response = self.client.post(
            reverse('fridge:specialday-form', args=(self.fridge.pk,)), json)

        self.assertRedirects(response,
                             reverse_lazy('fridge:fridge-detail',
                                          kwargs={'pk': self.fridge.pk}))
        self.assertEqual(len(SpecialDay.objects.all()), 1)
        self.assertEqual(SpecialDay.objects.last().from_date,
                         date.today())

    def test_get(self):
        response = self.client.get(
            reverse('fridge:specialday-form', args=(self.fridge.pk,)))
        self.assertEqual(response.status_code, 200)


class SettingsViewTest(TestCase):
    def setUp(self):
        self.user1 = create_user(
            'test_store', 'test_store@test.test', 'test_store')
        permission = Permission.objects.get(codename="store")
        self.user1.user_permissions.add(permission)

        self.user2 = create_user(
            'test_admin', 'test_admin@test.test', 'test_admin')
        permission = Permission.objects.get(codename="admin")
        self.user2.user_permissions.add(permission)

    def test_logout(self):
        """
        If you are logout
        """
        response = self.client.get(reverse('fridge:settings'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "You are not connected yet")

    def test_login_without_freego_store(self):
        """
        You are login but didn't have FreeGo
        """
        self.client.login(username='test_store', password='test_store')
        response = self.client.get(reverse('fridge:settings'))
        self.assertEqual(response.status_code, 200)
        self.assertNotContains(response, "Administration")
        self.assertNotContains(response, "My Free Go")

    def test_login_without_freego_admin(self):
        """
        You are login but didn't have FreeGo
        """
        self.client.login(username='test_admin', password='test_admin')
        response = self.client.get(reverse('fridge:settings'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Administration")
        self.assertNotContains(response, "My Free Go")

    def test_login_with_freego_store(self):
        """
        You are login and have FreeGo
        """
        self.client.login(username='test_store', password='test_store')
        create_fridge(self.user1)
        response = self.client.get(reverse('fridge:settings'))
        self.assertEqual(response.status_code, 200)
        self.assertNotContains(response, "Administration")
        self.assertContains(response, "My Free Go")

    def test_login_with_freego_admin(self):
        """
        You are login and have FreeGo
        """
        self.client.login(username='test_admin', password='test_admin')
        create_fridge(self.user2)
        response = self.client.get(reverse('fridge:settings'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Administration")
        self.assertContains(response, "My Free Go")


class RegisterViewTest(TestCase):
    def test_get(self):
        response = self.client.get(reverse('fridge:register'))
        self.assertEqual(response.status_code, 200)

    def test_post(self):
        json = {
            'username': 'test',
            'email': 'test@test.test',
            'password1': 'neFDE234r',
            'password2': 'neFDE234r'
        }
        response = self.client.post(reverse('fridge:register'), json)

        self.assertRedirects(response, reverse('fridge:settings'))
        self.assertEqual(len(User.objects.all()), 2)
        self.assertEqual(User.objects.last().username, 'test')


class LoginViewTest(TestCase):
    def setUp(self):
        self.user = create_user()

    def test_post(self):
        json = {
            'username': 'test',
            'password': 'test',
        }

        response = self.client.post(reverse('fridge:login'), json)
        self.assertEqual(response.status_code, 200)


class ContactTest(TestCase):
    def setUp(self):
        self.user = create_user(username="test", password="test")
        self.client.login(username='test', password='test')

    def test_post(self):
        json = {
            'subject': 'My subject',
            'message': 'My description'
        }
        response = self.client.post(reverse('fridge:contact'), json)
        self.assertRedirects(response, reverse('fridge:home'))


class ReportContentViewTest(TestCase):
    def setUp(self):
        self.user = create_user(username="test", password="test")
        self.client.login(username='test', password='test')
        self.fridge = create_fridge(self.user)
        self.food = create_food(fridge=self.fridge, user=self.user)

    def test_post(self):
        response = self.client.post(
            reverse_lazy('fridge:report-content',
                         kwargs={'pk': self.food.pk}))
        self.assertRedirects(response, reverse('fridge:home'))


class SponsorCreateViewTest(TestCase):
    def setUp(self):
        self.user = create_user('test', 'test@test.test', 'test')
        self.client.login(username='test', password='test')
        permission = Permission.objects.get(codename="admin")
        self.user.user_permissions.add(permission)

    def test_invalid_argument(self):
        image = SimpleUploadedFile(name='test.png', content=open(
            'fridge/static/fridge/test/test.png', 'rb').read(),
            content_type='image/png')
        json = {
            'name': 'A Sponsor',
            'website': 'djangoproject',
            'logo': image
        }

        response = self.client.post(reverse('fridge:sponsor-new'), json)
        print(response)
        self.assertEqual(response.status_code, 200)

    def test_valid_argument(self):
        image = SimpleUploadedFile(name='test.png', content=open(
            'fridge/static/fridge/test/test.png', 'rb').read(),
            content_type='image/png')
        json = {
            'name': 'A Sponsor',
            'website': 'https://www.djangoproject.com/',
            'logo': image
        }

        response = self.client.post(reverse('fridge:sponsor-new'), json)
        print(response)
        self.assertRedirects(response, reverse('fridge:myadmin'))
        self.assertEqual(len(Sponsor.objects.all()), 1)
        self.assertEqual(Sponsor.objects.last().name, 'A Sponsor')

    def test_get(self):
        response = self.client.get(reverse('fridge:sponsor-new'))
        self.assertEqual(response.status_code, 200)


class InventoryCreateViewTest(TestCase):
    def setUp(self):
        self.user = create_user('test', 'test@test.test', 'test')
        self.client.login(username='test', password='test')
        permission = Permission.objects.get(codename="admin")
        self.user.user_permissions.add(permission)
        self.fridge = create_fridge(user=self.user)

    def test_post(self):
        json = {
            'date': date.today() + timedelta(days=1),
            'product_name': 'Product name',
            'product_number': 12,
            'temperature': 22,
            'visa': '2000',
            'fridge': self.fridge
        }
        response = self.client.post(
            reverse_lazy('fridge:inventory-new',
                         kwargs={'pk': self.fridge.pk}), json)
        self.assertRedirects(response,
                             reverse_lazy('fridge:inventory-sheet',
                                          kwargs={'pk': self.fridge.pk}))


class TemperatureControlCreateViewTest(TestCase):
    def setUp(self):
        self.user = create_user('test', 'test@test.test', 'test')
        self.client.login(username='test', password='test')
        permission = Permission.objects.get(codename="admin")
        self.user.user_permissions.add(permission)
        self.fridge = create_fridge(user=self.user)

    def test_post(self):
        json = {
            'date': date.today() + timedelta(days=1),
            'temperature': 22,
            'visa': '2000',
            'fridge': self.fridge
        }
        response = self.client.post(
            reverse_lazy('fridge:temperature-control-new',
                         kwargs={'pk': self.fridge.pk}), json)
        self.assertRedirects(response,
                             reverse_lazy('fridge:temperature-control-list',
                                          kwargs={'pk': self.fridge.pk}))


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
