from django.contrib.auth.mixins import UserPassesTestMixin
from django.shortcuts import render, redirect
from django.views import generic, View
from django.urls import reverse_lazy
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.mixins import PermissionRequiredMixin
from django.contrib.auth.models import Permission
from rest_framework import viewsets

from fridge.models import Fridge, FridgeFollowing, User, FridgeContentImage
from fridge.forms import FridgeForm, FridgeDemandForm, FridgeContentImageForm
from fridge.serializers import FridgeSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import permissions
from django.utils.translation import gettext_lazy as _
from notifications.signals import notify

# Constant
LOGIN_URL = 'fridge:login'


class ValidFridgeUser(UserPassesTestMixin):
    def test_func(self):
        obj = super().get_object()
        return self.request.user == obj.user or \
            self.request.user.has_perm('fridge.admin')


class FridgeDetailView(ValidFridgeUser, generic.DetailView):
    template_name = 'fridge/fridge_detail.html'
    login_url = LOGIN_URL
    model = Fridge


class FridgeUpdateView(ValidFridgeUser, generic.UpdateView):
    model = Fridge
    template_name = 'common/form.html'

    def get_success_url(self):
        return reverse_lazy('fridge:fridge-detail',
                            kwargs={'pk': self.object.pk})


class FridgeDeleteView(PermissionRequiredMixin, generic.DeleteView):
    model = Fridge
    success_url = reverse_lazy('fridge:myadmin')
    permission_required = 'fridge.admin'
    login_url = LOGIN_URL

    def get(self, request, *args, **kwargs):
        return self.post(request, *args, **kwargs)


class FridgeDemandCreateView(LoginRequiredMixin, generic.CreateView):
    form_class = FridgeDemandForm
    template_name = 'common/form.html'
    initial = {}
    login_url = LOGIN_URL

    fields = ('name', 'address', 'zip_code', 'city',
              'phone_number', 'image')

    def get(self, request, *args, **kwargs):
        form = self.form_class(initial=self.initial)
        return render(request, self.template_name, {'form': form})

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST, request.FILES)
        if form.is_valid():
            fridge = Fridge(
                name=form.cleaned_data['name'],
                address=form.cleaned_data['address'],
                zip_code=form.cleaned_data['zip_code'],
                city=form.cleaned_data['city'],
                phone_number=form.cleaned_data['phone_number'],
                image=form.cleaned_data['image'],
                latitude=form.cleaned_data['latitude'],
                longitude=form.cleaned_data['longitude'],
                user=request.user
            )
            fridge.save()

            permission = Permission.objects.get(codename='store')
            fridge.user.user_permissions.add(permission)

            perm = Permission.objects.get(codename="admin")
            recipient = User.objects.filter(
                user_permissions__in=[perm])
            verb = _("New request to become a Free Go.")
            notify.send(request.user, recipient=recipient,
                        verb=verb)
            return redirect('fridge:settings')
        return render(request, self.template_name, {'form': form})


class FridgeCreateView(PermissionRequiredMixin, FridgeDemandCreateView):
    template_name = 'common/form.html'
    form_class = FridgeForm
    permission_required = 'fridge.admin'

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST, request.FILES)
        if form.is_valid():
            fridge = Fridge(
                name=form.cleaned_data['name'],
                address=form.cleaned_data['address'],
                zip_code=form.cleaned_data['zip_code'],
                city=form.cleaned_data['city'],
                phone_number=form.cleaned_data['phone_number'],
                image=form.cleaned_data['image'],
                user=form.cleaned_data['user'],
                latitude=form.cleaned_data['latitude'],
                longitude=form.cleaned_data['longitude'],
                is_active=True
            )
            fridge.save()

            permission = Permission.objects.get(codename='store')
            fridge.user.user_permissions.add(permission)
            return redirect('fridge:myadmin')

        return render(request, self.template_name, {'form': form})


class FridgeListView(generic.TemplateView):
    template_name = 'fridge/fridge_list.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        fridge_list = Fridge.objects.filter(is_active=True)
        context['fridge_list'] = fridge_list
        return context


class FridgeValidDemand(PermissionRequiredMixin, View):
    login_url = LOGIN_URL
    permission_required = 'fridge.admin'

    def post(self, request, *args, **kwargs):
        fridge = Fridge.objects.get(pk=self.kwargs['pk'])
        fridge.is_active = True
        fridge.save()
        return redirect('fridge:myadmin')

    def get(self, request, *args, **kwargs):
        return self.post(request, args, kwargs)


class FridgeRefuseDemand(PermissionRequiredMixin, View):
    login_url = LOGIN_URL
    permission_required = 'fridge.admin'

    def post(self, request, *args, **kwargs):
        fridge = Fridge.objects.get(pk=self.kwargs['pk'])
        permission = Permission.objects.get(codename='store')
        fridge.user.user_permissions.remove(permission)
        fridge.delete()
        return redirect('fridge:myadmin')

    def get(self, request, *args, **kwargs):
        return self.post(request, args, kwargs)


class FridgesViewSet(viewsets.ModelViewSet):
    queryset = Fridge.objects.filter(is_active=True)
    serializer_class = FridgeSerializer

    @action(detail=False, permission_classes=[permissions.IsAuthenticated])
    def favorites(self, request):
        reserved_fridges = FridgeFollowing.objects.filter(
            user=request.user).values_list('fridge_id')
        favorites = Fridge.objects.filter(id__in=reserved_fridges)
        serializer = self.get_serializer(favorites, many=True)
        return Response(serializer.data)


class FridgeContentImageListView(generic.ListView):
    model = FridgeContentImage
    template_name = 'fridge/fridge_content_image_list.html'
    paginate_by = 1

    def get_queryset(self):
        fridge = Fridge.objects.get(pk=self.kwargs['pk'])
        return FridgeContentImage.objects.filter(fridge=fridge).order_by('pk')

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        fridge = Fridge.objects.get(pk=self.kwargs['pk'])
        context['fridge'] = fridge
        return context


class FridgeContentImageUpdateView(
        UserPassesTestMixin, FridgeContentImageListView):
    template_name = 'fridge/fridge_content_image_update.html'
    paginate_by = 5

    def test_func(self):
        fridge_user = Fridge.objects.get(pk=self.kwargs['pk']).user
        return self.request.user == fridge_user or \
            self.request.user.has_perm('fridge.admin')


class FridgeContentImageCreateView(UserPassesTestMixin, generic.CreateView):
    form_class = FridgeContentImageForm
    template_name = 'common/form.html'
    initial = {}

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST, request.FILES)
        if form.is_valid():
            fridge = Fridge.objects.get(pk=self.kwargs['pk'])
            fridgeContentImage = FridgeContentImage(
                image=form.cleaned_data['image'],
                fridge=fridge
            )
            fridgeContentImage.save()
            return redirect('fridge:fridge-detail',  self.kwargs['pk'])

        return render(request, self.template_name, {'form': form})

    def test_func(self):
        fridge_user = Fridge.objects.get(pk=self.kwargs['pk']).user
        return self.request.user == fridge_user or \
            self.request.user.has_perm('fridge.admin')


class FridgeContentImageDeleteView(UserPassesTestMixin, generic.DeleteView):
    model = FridgeContentImage

    def get(self, request, *args, **kwargs):
        return self.post(request, *args, **kwargs)

    def test_func(self):
        fridge_user = FridgeContentImage.objects.get(
            pk=self.kwargs['pk']).fridge.user
        return self.request.user == fridge_user or \
            self.request.user.has_perm('fridge.admin')

    def get_success_url(self):
        fridgeContentImage = FridgeContentImage.objects.get(
            pk=self.kwargs['pk'])
        return reverse_lazy('fridge:fridge-detail',
                            kwargs={'pk': fridgeContentImage.fridge.pk})
