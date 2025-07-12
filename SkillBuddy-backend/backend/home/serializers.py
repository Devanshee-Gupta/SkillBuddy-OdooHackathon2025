from rest_framework.serializers import ModelSerializer
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
