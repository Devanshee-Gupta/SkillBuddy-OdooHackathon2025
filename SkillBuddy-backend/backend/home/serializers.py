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