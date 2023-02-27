from django import forms
from django.db import models
from django.shortcuts import redirect, render


class IHA(models.Model):
    ihaID = models.AutoField(primary_key=True)
    ihaName = models.CharField(max_length=50)
    # iha tipi
    # ihaType = models.CharField(max_length=50)
    # haberleşme menzili
    ihaCommunicationRange = models.IntegerField()
    # havada kalma süresi
    ihaHover = models.CharField(max_length=50)
    # uzunluk
    ihaLength = models.CharField(max_length=50)
    # kanat açıklığı
    ihaWingSpan = models.CharField(max_length=50)
    # maksimum hız
    ihaMaxSpeed = models.CharField(max_length=50)
    # maksimum irtifa
    ihaMaxAltitude = models.CharField(max_length=50)

    class Meta:
        db_table = "iha"


class IHAForm(forms.ModelForm):
    class Meta:
        model = IHA
        fields = [
            "ihaID",
            "ihaName",
            # "ihaType",
            "ihaCommunicationRange",
            "ihaHover",
            "ihaLength",
            "ihaWingSpan",
            "ihaMaxSpeed",
            "ihaMaxAltitude",
        ]
        labels = {
            "ihaID": "ID",
            "ihaName": "İHA Adı",
            # "ihaType": "İHA Tipi",
            "ihaCommunicationRange": "Haberleşme Menzili",
            "ihaHover": "Havada Kalma Süresi",
            "ihaLength": "Uzunluk",
            "ihaWingSpan": "Kanat Açıklığı",
            "ihaMaxSpeed": "Maksimum Hız",
            "ihaMaxAltitude": "Maksimum İrtifa",
        }
        widgets = {
            "ihaID": forms.TextInput(attrs={"class": "form-control"}),
            "ihaName": forms.TextInput(attrs={"class": "form-control"}),
            # "ihaType": forms.TextInput(attrs={"class": "form-control"}),
            "ihaCommunicationRange": forms.TextInput(attrs={"class": "form-control"}),
            "ihaHover": forms.TextInput(attrs={"class": "form-control"}),
            "ihaLength": forms.TextInput(attrs={"class": "form-control"}),
            "ihaWingSpan": forms.TextInput(attrs={"class": "form-control"}),
            "ihaMaxSpeed": forms.TextInput(attrs={"class": "form-control"}),
            "ihaMaxAltitude": forms.TextInput(attrs={"class": "form-control"}),
        }


class User(models.Model):
    username = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    password = models.CharField(max_length=50)

    class Meta:
        db_table = "user"


class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ["username", "email", "password"]
        labels = {"username": "Kullanıcı Adı", "email": "E-posta", "password": "Şifre"}
        widgets = {
            "username": forms.TextInput(attrs={"class": "form-control"}),
            "email": forms.TextInput(attrs={"class": "form-control"}),
            "password": forms.PasswordInput(attrs={"class": "form-control"}),
        }


class Token(models.Model):
    token = models.CharField(max_length=500)

    class Meta:
        db_table = "token"
