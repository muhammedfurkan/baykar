# from django.urls import include, path

# from . import views

# urlpatterns = [
#     path("", views.insert_iha, name="insert-iha"),
#     path("show", views.show_iha, name="show-iha"),
#     path("edit/<int:pk>", views.edit_iha, name="edit-iha"),
#     path("remove/<int:pk>", views.remove_iha, name="remove-iha"),
#     path("__reload__/", include("django_browser_reload.urls")),
# ]

from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path, re_path
from rest_framework.routers import DefaultRouter

from . import views

# from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


urlpatterns = [
    path("admin/", admin.site.urls),
    re_path(r"^api/iha/$", views.iha_list),
    re_path(r"^api/iha/([0-9])$", views.iha_detail),
    path("api/register/", views.register),
    path("api/authenticate/", views.authenicate),
]
