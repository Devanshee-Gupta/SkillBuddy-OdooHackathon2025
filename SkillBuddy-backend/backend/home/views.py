from django.shortcuts import get_object_or_404
from home.serializers import *
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.sessions.models import Session
from django.contrib.auth.hashers import check_password
from django.utils import timezone
from home.serializers import UserListSerializer
from rest_framework.pagination import PageNumberPagination
from rest_framework.exceptions import NotFound

# Create your views here.

@api_view(['GET'])
def index(request):
    return Response({"message":"server running"},status.HTTP_200_OK)


@csrf_exempt
def validation(data):
    session_key=data
    if session_key=="":
        return False
    queryset=Session.objects.filter(session_key=session_key)
    if len(queryset)>0:
        temp=queryset[0]
        if queryset[0].expire_date<timezone.now():
            return False
        if temp.session_key==session_key:
            return True 
    return False


@csrf_exempt
@api_view(['POST'])
def signup(request):
    data = request.data
    serializer = UserSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message":"User created successfully"},status.HTTP_201_CREATED)
    else:
        return Response({"error":serializer.errors},status.HTTP_400_BAD_REQUEST)

@csrf_exempt
@api_view(['POST'])
def signin(request):
    response={}
    if request.data['Email']=='':
        response['success']=False
        response['error']='Email Id required'
        return Response(response,status.HTTP_400_BAD_REQUEST)
    
    if request.data['Password']=='':
        response['success']=False
        response['error']='Password required'
        return Response(response,status.HTTP_400_BAD_REQUEST)
    
    Email=request.data['Email']
    Password=request.data['Password']
    user=User.objects.filter(Email=Email).first()
    if not user:
        response={
        "success": False,
        "error": "User does not exist",
        }
        return Response(response,status.HTTP_401_UNAUTHORIZED)
    
    if Email == user.Email and check_password(Password, user.Password):
        request.session['Email'] = Email
        request.session.create()
        session_key = request.session.session_key

        response={
            "success": True,
            "message": "User successfully authenticated",
            "session_key":session_key,
        }

        return Response(response,status.HTTP_200_OK)
    else:
        response={
            "success": False,
            "error": "Invalid credentials",
        }
    return Response(response,status.HTTP_401_UNAUTHORIZED)



class SafePageNumberPagination(PageNumberPagination):
    def paginate_queryset(self, queryset, request, view=None):
        try:
            return super().paginate_queryset(queryset, request, view)
        except NotFound:
            # Instead of raising, just return empty list
            self.page = None
            return []

# HOME PAGE - ALL USERS DATA
csrf_exempt
@api_view(['POST'])
def get_all_users_paginated(request):
    session_key = request.data.get("session_key")

    if not validation(session_key):
        return Response({
            "success": False,
            "error": "Please login"
        }, status=status.HTTP_401_UNAUTHORIZED)

    users = User.objects.all().order_by('UserId')

    paginator = SafePageNumberPagination()
    paginator.page_size = 5

    result_page = paginator.paginate_queryset(users, request)
    
    if paginator.page is None:
        # Invalid page — handle manually
        return Response({
            "count": users.count(),
            "next": None,
            "previous": None,
            "results": []
        }, status=status.HTTP_200_OK)

    serializer = UserListSerializer(result_page, many=True, context={'request': request})

    return paginator.get_paginated_response(serializer.data)


# EDIT PROFILE
@csrf_exempt
@api_view(['POST'])
def editprofile(request):
    data=request.data.copy()
    session_key=request.data["session_key"]

    if(not validation(session_key)):
        response={
                "success": False,
                "error": "Please login"
            }
        return Response(response,status.HTTP_401_UNAUTHORIZED)
    
    session = Session.objects.get(session_key=session_key)
    session_data = session.get_decoded()
    email=session_data['Email']
    user = get_object_or_404(User, Email=email)
    serializer = UserSerializer(user, data=data, partial=True)

    if serializer.is_valid():
        serializer.save()
        return Response({"message":"Profile updated successfully"},status.HTTP_200_OK)
    else:
        return Response({"error":serializer.errors},status.HTTP_400_BAD_REQUEST)
    
# get SENT REQUESTS DATA FOR A USER
@csrf_exempt
@api_view(['POST'])
def get_sent_requests(request):
    session_key = request.data.get("session_key")

    if not validation(session_key):
        return Response({
            "success": False,
            "error": "Please login"
        }, status=status.HTTP_401_UNAUTHORIZED)

    session = Session.objects.get(session_key=session_key)
    session_data = session.get_decoded()
    email = session_data['Email']
    user = User.objects.get(Email=email)

    sent_requests = SwapRequest.objects.filter(RequesterId=user).order_by('-SwapId')

    serializer = SentSwapRequestSerializer(sent_requests, many=True, context={'request': request})

    return Response(serializer.data, status=status.HTTP_200_OK)

# DELETE PROFILE PHOTO
@csrf_exempt
@api_view(['DELETE'])
def deleteprofile(request):
    session_key = request.data.get("session_key")

    if not validation(session_key):
        return Response({
            "success": False,
            "error": "Please login"
        }, status=status.HTTP_401_UNAUTHORIZED)

    session = Session.objects.get(session_key=session_key)
    session_data = session.get_decoded()
    email = session_data['Email']
    user = get_object_or_404(User, Email=email)

    if user.ProfilePhoto and user.ProfilePhoto.name != 'images/default.jpg':
        user.ProfilePhoto.delete(save=False) 

    # Set to default path
    data = {"ProfilePhoto": 'images/default.jpg'}

    serializer = UserSerializer(user, data=data, partial=True)

    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Profile photo deleted successfully"}, status=status.HTTP_200_OK)
    else:
        return Response({"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    
# get RECEIVED REQUESTS DATA FOR A USER
@csrf_exempt
@api_view(['POST'])
def get_received_requests(request):
    session_key = request.data.get("session_key")

    if not validation(session_key):
        return Response({
            "success": False,
            "error": "Please login"
        }, status=status.HTTP_401_UNAUTHORIZED)

    session = Session.objects.get(session_key=session_key)
    session_data = session.get_decoded()
    email = session_data['Email']
    user = User.objects.get(Email=email)

    received_requests = SwapRequest.objects.filter(ReceiverId=user).order_by('-SwapId')

    serializer = ReceivedSwapRequestSerializer(received_requests, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)



