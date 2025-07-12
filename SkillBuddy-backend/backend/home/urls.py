from django.urls import path
from home import views


urlpatterns = [
    path("",views.index),
    path("signup/",views.signup),
    path("signin/",views.signin ,name='signin')
]