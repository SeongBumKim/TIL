from django.http.response import HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from .models import Question, Choice
from django.urls import reverse
# Create your views here.
#/polls/요청시 latest_question_list에 Question의 모든데이터를 select all 에 저장 
# templates - index.html select (latest_question_list전달)
def index(request):
    #입력값 검증
    #business method 호출: question목록 가져오기
    #                     select * from polls_question order by DECS pub_date
    latest_question_list = Question.objects.all().order_by('-pub_date')
    #일정범위에 data 저장
    context = {'latest_question_list': latest_question_list}
    #template select
    return render(request, 'polls/index.html', context)

#/polls/요청시 id에 해당하는 choice 항목 출력하고
#vote button 출력
def detail(request, question_id):
    #입력값 검증 : question_id
    #business method 호출: question_id에 해당하는 question 값 호출
    
    #question = Question.objects.get(question_id)
    question = get_object_or_404(Question,pk=question_id)

    #일정범위에 데이터 저장 - question
    #template select - polls/detail.html
    context = {'question': question}
    return render(request, "polls/detail.html",context)

#/polls/id/vote 요청시 id의 vote add한 후 결과페이지로 redirect
def vote(request, question_id):
    #입력값검증
    #business logic 호출 : question_id의 Question객체
    question = get_object_or_404(Question,pk=question_id)

    #request choice_id에 해당하는 vote조희 - 증가 - 수정
    try:
        selected_choice = question.choice_set.get(pk=request.POST['choice'])
    except (KeyError, Choice.DoesNotExist):
        return render(request, 'polls/detail.html', {
            'question': question,
            'error_message': "You didn't select a choice.",
        })
    else:
        selected_choice.votes += 1
        selected_choice.save()
        #redirect - result.html template select
        return HttpResponseRedirect(reverse('results', args=(question.id,)))


#/polls/id/results/ 요청시 id에 해당되는 vote 결과 출력
def results(request, question_id):
    question = get_object_or_404(Question,pk=question_id)
    #일정 범위에 데이터 저장, template select
    context = {'question': question}
    return render(request,'polls/results.html', context)
