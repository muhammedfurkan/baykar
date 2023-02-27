from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from .models import IHA, Token, User


class IHASerializer(serializers.ModelSerializer):
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


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "username",
            "email",
            "password",
        ]


class TokenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Token
        fields = ["token"]
