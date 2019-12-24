from django.shortcuts import render

# Create your views here.
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.views import (
    LoginView, LogoutView
)
from django.views import generic
from .forms import LoginForm


class Top(generic.TemplateView):
    template_name = 'login/top.html'


class Login(LoginView):
    """ログインページ"""
    form_class = LoginForm
    template_name = 'login/login.html'


class Logout(LoginRequiredMixin, LogoutView):
    """ログアウトページ"""
    template_name = 'login/top.html'
