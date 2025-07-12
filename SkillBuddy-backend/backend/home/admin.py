from django.contrib import admin
from home.models import *

# Register your custom user model with the admin site
admin.site.register(User)
admin.site.register(Admin)
admin.site.register(Skill)
admin.site.register(UserSkill)
admin.site.register(SwapRequest)
admin.site.register(Feedback)