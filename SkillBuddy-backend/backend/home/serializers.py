from rest_framework.serializers import ModelSerializer,SerializerMethodField
from home.models import *

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class AdminSerializer(ModelSerializer):
    class Meta:
        model = Admin
        fields = '__all__'

class SkillSerializer(ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'

class UserSkillSerializer(ModelSerializer):
    class Meta:
        model = UserSkill
        fields = '__all__'

class SwapRequestSerializer(ModelSerializer):
    class Meta:
        model = SwapRequest
        fields = '__all__'
                          
class FeedbackSerializer(ModelSerializer):
    class Meta:
        model = Feedback
        fields = '__all__'    


class UserListSerializer(ModelSerializer):
    SkillsOffered = SerializerMethodField()
    SkillsWanted = SerializerMethodField()
    ProfilePhotoURL = SerializerMethodField()

    class Meta:
        model = User
        fields = ['UserId', 'FirstName', 'LastName', 'ProfilePhotoURL', 'SkillsOffered', 'SkillsWanted']

    def get_SkillsOffered(self, user):
        return list(user.user_skills.filter(SkillType='offered').values_list('SkillId__SkillName', flat=True))

    def get_SkillsWanted(self, user):
        return list(user.user_skills.filter(SkillType='wanted').values_list('SkillId__SkillName', flat=True))

    def get_ProfilePhotoURL(self, user):
        request = self.context.get('request')
        if user.ProfilePhoto:
            return request.build_absolute_uri(user.ProfilePhoto.url)
        return None
    
# RECEIVED REQUESTS DATA FOR A USER
class ReceivedSwapRequestSerializer(ModelSerializer):
    RequesterId = SerializerMethodField()
    RequesterFirstName = SerializerMethodField()
    RequesterLastName = SerializerMethodField()
    RequesterSkillsOffered = SerializerMethodField()
    RequesterSkillsWanted = SerializerMethodField()

    class Meta:
        model = SwapRequest
        fields = [
            'SwapId',
            'RequesterId',
            'RequesterFirstName',
            'RequesterLastName',
            'Status',
            'RequesterSkillsOffered',
            'RequesterSkillsWanted',
            'RequesterPhotoURL',
        ]

    def get_RequesterId(self, obj):
        return obj.RequesterId.UserId

    def get_RequesterFirstName(self, obj):
        return obj.RequesterId.FirstName

    def get_RequesterLastName(self, obj):
        return obj.RequesterId.LastName

    def get_RequesterSkillsOffered(self, obj):
        return list(
            obj.RequesterId.user_skills
                .filter(SkillType='offered')
                .values_list('SkillId__SkillName', flat=True)
        )

    def get_RequesterSkillsWanted(self, obj):
        return list(
            obj.RequesterId.user_skills
                .filter(SkillType='wanted')
                .values_list('SkillId__SkillName', flat=True)
        )
    
    def get_RequesterPhotoURL(self, obj):
        request = self.context.get('request')
        return request.build_absolute_uri(obj.RequesterId.ProfilePhoto.url)


# SENT REQUESTS DATA BY A USER
class SentSwapRequestSerializer(ModelSerializer):
    ReceiverId = SerializerMethodField()
    ReceiverFirstName = SerializerMethodField()
    ReceiverLastName = SerializerMethodField()
    ReceiverPhotoURL = SerializerMethodField()
    ReceiverSkillsOffered = SerializerMethodField()
    ReceiverSkillsWanted = SerializerMethodField()

    class Meta:
        model = SwapRequest
        fields = [
            'SwapId',
            'ReceiverId',
            'ReceiverFirstName',
            'ReceiverLastName',
            'Status',
            'ReceiverSkillsOffered',
            'ReceiverSkillsWanted',
            'ReceiverPhotoURL',
        ]

    def get_ReceiverId(self, obj):
        return obj.ReceiverId.UserId

    def get_ReceiverFirstName(self, obj):
        return obj.ReceiverId.FirstName

    def get_ReceiverLastName(self, obj):
        return obj.ReceiverId.LastName


    def get_ReceiverSkillsOffered(self, obj):
        return list(
            obj.ReceiverId.user_skills
                .filter(SkillType='offered')
                .values_list('SkillId__SkillName', flat=True)
        )

    def get_ReceiverSkillsWanted(self, obj):
        return list(
            obj.ReceiverId.user_skills
                .filter(SkillType='wanted')
                .values_list('SkillId__SkillName', flat=True)
        )
    
    def get_ReceiverPhotoURL(self, obj):
        request = self.context.get('request')
        return request.build_absolute_uri(obj.ReceiverId.ProfilePhoto.url)
