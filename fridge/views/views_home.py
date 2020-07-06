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


class NotificationsView(generic.TemplateView):
    template_name = 'home/notifications.html'


class ContactView(View):
    form_class = ContactForm
    template_name = 'home/contact.html'

    def post(self, request, *args, **kwargs):
        form = ContactForm(request.POST)
        if form.is_valid():
            subject = form.cleaned_data.get('subject')
            message = form.cleaned_data.get('message')
            from_user = self.request.user.email
            perm = Permission.objects.get(codename="admin")
            to_user = User.objects.filter(
                user_permissions__in=[perm])
            send_mail(subject=subject, message=message,
                      from_email=from_user, recipient_list=to_user)
            return redirect('fridge:home')
        return render(request, self.template_name, {'form': form})

    def get(self, request, *args, **kwargs):
        form = ContactForm()
        return render(request, self.template_name, {'form': form})


def offline_view(request):
    template = "home/offline.html"
    return render(request, template)
