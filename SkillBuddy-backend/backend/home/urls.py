from django.urls import path
from home import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("",views.index),
    path("signup/",views.signup),
    path("signin/",views.signin ,name='signin'),
    path("editprofile/",views.editprofile ,name='editprofile'),
    path("deleteprofile/",views.deleteprofile ,name='deleteprofile'),
] +static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)