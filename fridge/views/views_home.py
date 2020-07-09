from django.core.mail import send_mail
from django.shortcuts import render
from django.views import generic, View
from fridge.models import Fridge, User
from fridge.forms import ContactForm
from django.contrib.auth.models import Permission
from django.shortcuts import redirect


class HomeView(generic.TemplateView):
    template_name = 'home/home.html'


class MapView(generic.TemplateView):
    template_name = 'home/map.html'


class FavoriteView(generic.TemplateView):
    template_name = 'home/favorite.html'


class SettingsView(generic.TemplateView):
    template_name = 'home/settings.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        if self.request.user.is_authenticated:
            context['has_fridge'] = self.request.user.has_fridge()
            context['fridge'] = Fridge.objects.filter(
                user=self.request.user).first()

        return context





def offline_view(request):
    template = "home/offline.html"
    return render(request, template)
