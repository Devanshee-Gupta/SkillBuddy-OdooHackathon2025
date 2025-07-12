from django.db import models
from django.contrib.auth.hashers import make_password
from django.core.validators import RegexValidator,EmailValidator

# USER MODEL
class User(models.Model):

    UserId=models.AutoField(primary_key=True)
    FirstName=models.CharField(max_length=32)
    LastName=models.CharField(max_length=32)
    Email = models.EmailField(
        validators=[
            EmailValidator(message='Enter a valid email address.')
        ],
        unique=True
    )
    Password = models.CharField(
        max_length=4096,
        validators=[
            RegexValidator(
                regex=r'^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{5,}$',
                message='Password must contain atleast 1 uppercase letter, 1 special character, and 1 number and be atleast 5 characters long.',
                code='invalid_password_format'
            ),
        ]
    )
    Address = models.TextField(max_length=100,null=True)
    ProfilePhoto=models.ImageField(upload_to='images/',default='images/default.jpg',blank=True,null=True)
    
    ProfileType_Choices = (
    ("public", "public"),
    ("private", "private"),
    )
    ProfileType=models.CharField(max_length=7,choices=ProfileType_Choices,default="public")
    
    AvailStart = models.DateTimeField(null=True, blank=True)
    AvailDeadline = models.DateTimeField(null=True, blank=True)

    def save(self, *args, **kwargs):
        # Check if the password is not already hashed
        if not self.Password.startswith(('pbkdf2_sha256$', 'bcrypt$', 'argon2$')):
            # Hash the password before saving
            self.Password = make_password(self.Password)
        super().save(*args, **kwargs)

    class Meta:
        db_table = 'user'



# ADMIN MODEL
class Admin(models.Model):

    AdminId=models.AutoField(primary_key=True)
    FirstName=models.CharField(max_length=32)
    LastName=models.CharField(max_length=32)
    Email = models.EmailField(
        validators=[
            EmailValidator(message='Enter a valid email address.')
        ],
        unique=True
    )
    
    class Meta:
        db_table = 'admin'
    
# SKILL MODEL
class Skill(models.Model):
    SkillId=models.AutoField(primary_key=True)
    SkillName = models.CharField(max_length=40)
    Desc=models.TextField(max_length=1200)
    isApproved = models.BooleanField(default=True)

    class Meta:
        db_table = 'skill'
    
# USERSKILL MODEL
class UserSkill(models.Model):
    UserSkillId=models.AutoField(primary_key=True)
    UserId = models.ForeignKey(User,on_delete=models.CASCADE,related_name="user_skills")
    SkillId = models.ForeignKey(Skill,on_delete=models.CASCADE,related_name="user_skills")
    
    SkillType_Choices = (
    ("offered", "offered"),
    ("wanted", "wanted"),
    )
    SkillType=models.CharField(max_length=7,choices=SkillType_Choices)
    
    class Meta:
        db_table = 'userskill'
        unique_together = (('UserId', 'SkillId'),)

# SWAPREQUEST MODEL
class SwapRequest(models.Model):
    SwapId=models.AutoField(primary_key=True)
    RequesterId=models.ForeignKey(User,on_delete=models.CASCADE,related_name="swap_requests_sent")
    ReceiverId=models.ForeignKey(User,on_delete=models.CASCADE,related_name="swap_requests_received")
    SkillOfferedId = models.ForeignKey(Skill,on_delete=models.CASCADE,related_name="swap_requests_offeredskills")
    SkillWantedId = models.ForeignKey(Skill,on_delete=models.CASCADE,related_name="swap_requests_wantedskills")
    
    STATUS_CHOICES = (
    ("pending", "pending"),
    ("accepted", "accepted"),
    ("rejected", "rejected"),
    )
    Status=models.CharField(max_length=8,choices=STATUS_CHOICES,default="pending")

    class Meta:
        db_table = 'swaprequest'


# FEEDBACK MODEL
class Feedback(models.Model):
    FeedbackId=models.AutoField(primary_key=True)
    SwapId=models.ForeignKey(SwapRequest,on_delete=models.CASCADE,related_name="feedbacks")
    GiverId=models.ForeignKey(User,on_delete=models.CASCADE,related_name="feedbacks_given")
    ReceiverId=models.ForeignKey(User,on_delete=models.CASCADE,related_name="feedbacks_received")
    Rating=models.IntegerField()
    ReviewComment=models.TextField(max_length=1200)
    CreatedAt=models.DateTimeField(auto_now_add=True)  

    class Meta:
        db_table = 'feedback'


    