from django import forms
from django.forms import fields
from .models import Contents, Title

class QuestionForm(forms.Form):
    class Meta :
        model = Title #사용할 모델
        fields = ['schedule'] #titleForm에서 사용할 Title 속성

class ContentsForm(forms.Form):
    class Meta :
        model = Contents
        fields = ['contents']