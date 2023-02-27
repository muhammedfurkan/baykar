import io
import json

import jwt
from django.shortcuts import redirect, render
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response

from .models import IHA, IHAForm
from .serializers import *


@api_view(["GET", "POST"])
def iha_list(request):
    if request.method == "GET":
        iha = IHA.objects.all()
        serializer = IHASerializer(iha, many=True)
        return Response(serializer.data)

    elif request.method == "POST":
        serializer = IHASerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["PUT", "DELETE"])
def iha_detail(request, pk):
    try:
        iha = IHA.objects.get(pk=pk)
    except IHA.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "PUT":
        serializer = IHASerializer(iha, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == "DELETE":
        iha.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(["GET", "POST"])
def register(request):
    if request.method == "GET":
        user = User.objects.all()
        serializer = UserSerializer(user, many=True)

        return Response(serializer.data)

    elif request.method == "POST":
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            print("valid")
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print("not valid")
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET", "POST"])
def authenicate(request):
    if request.method == "GET":
        user = User.objects.all()
        serializer = UserSerializer(user, many=True)
        token = Token.objects.get(user=user)
        return Response(token)

    elif request.method == "POST":
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            print(serializer.validated_data)
            data = json.loads(JSONRenderer().render(serializer.validated_data))
            print(data)
            token = jwt.encode(data, "secret", algorithm="HS256")
            tokenserializer = TokenSerializer(data={"token": token})
            print(tokenserializer.is_valid())
            if tokenserializer.is_valid():
                tokenserializer.save()
            print(token)

            serializer.save()
            return Response(
                {"token": token, "user": serializer.data},
                status=status.HTTP_201_CREATED,
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET", "POST"])
def login(request):
    if request.method == "GET":
        user = User.objects.all()
        serializer = UserSerializer(user, many=True)
        token = Token.objects.get(user=user)
        return Response(token)

    elif request.method == "POST":
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# # create iha
# def insert_iha(request):
#     if request.method == "POST":
#         ihaID = request.POST.get("ihaID")
#         ihaName = request.POST.get("ihaName")
#         ihaCommunicationRange = request.POST.get("ihaCommunicationRange")
#         ihaHover = request.POST.get("ihaHover")
#         ihaLength = request.POST.get("ihaLength")
#         ihaWingSpan = request.POST.get("ihaWingSpan")
#         ihaMaxSpeed = request.POST.get("ihaMaxSpeed")
#         ihaMaxAltitude = request.POST.get("ihaMaxAltitude")
#         iha = IHA(
#             ihaID=ihaID,
#             ihaName=ihaName,
#             ihaCommunicationRange=ihaCommunicationRange,
#             ihaHover=ihaHover,
#             ihaLength=ihaLength,
#             ihaWingSpan=ihaWingSpan,
#             ihaMaxSpeed=ihaMaxSpeed,
#             ihaMaxAltitude=ihaMaxAltitude,
#         )
#         # create column in the database

#         iha.save()
#         return redirect("/show")
#     else:
#         return render(request, "insert.html")


# # retrieve iha
# def show_iha(request):
#     iha = IHA.objects.all()
#     # print all iha in the database
#     # print(iha)
#     return render(request, "show.html", {"iha": iha})


# # update iha
# def edit_iha(request, pk):
#     iha = IHA.objects.get(id=pk)
#     if request.method == "POST":
#         iha.ihaID = request.POST.get("ihaID")
#         iha.ihaName = request.POST.get("ihaName")
#         iha.ihaCommunicationRange = request.POST.get("ihaCommunicationRange")
#         iha.ihaHover = request.POST.get("ihaHover")
#         iha.ihaLength = request.POST.get("ihaLength")
#         iha.ihaWingSpan = request.POST.get("ihaWingSpan")
#         iha.ihaMaxSpeed = request.POST.get("ihaMaxSpeed")
#         iha.ihaMaxAltitude = request.POST.get("ihaMaxAltitude")
#         iha.save()
#         return redirect("/show")
#     else:
#         return render(request, "edit.html", {"iha": iha})


# # delete iha
# def remove_iha(request, pk):
#     iha = IHA.objects.get(id=pk)
#     if request.method == "POST":
#         iha.delete()
#         return redirect("/show")

#     context = {"iha": iha}
#     return render(request, "delete.html", context)
