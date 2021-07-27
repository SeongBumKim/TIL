from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .models import Title,  Contents
from django.template import loader
from django.http import Http404
from django.urls import reverse
from django.http.response import HttpResponseRedirect
from .forms import *


def index(request):
    latest_schedule_title = Title.objects.all().order_by('-pub_date')
    # template = loader.get_template('todos/index.html')
    context = {
        'latest_schedule_title': latest_schedule_title,
    }
    return render(request, 'todos/index.html', context)

def list(request, title_id):
    title = get_object_or_404(Title,pk=title_id)
    try:
        input_contents = title.contents_list.set(pk=request.POST['contents'])
    except (KeyError, Title.DoesNotExist):
        return render(request, 'polls/detail.html', {
            'title': title,
            'error_message': "You didn't input a contents.",
        })
    else:
        input_contents.save()
        #redirect - result.html template select
        return HttpResponseRedirect(reverse('results', args=(title.id,)))

def detail(request, title_id):
    try:
        title = Title.objects.get(pk=title_id)
    except Title.DoesNotExist:
        raise Http404("Schedule does not exist")
    return render(request, 'todos/detail.html', {'schedule': title})

# def detail(request, Schedule_contents):
#     return HttpResponse("You're lokking at Schedule detail %s" %Schedule_contents)

# def detail(request, question_id):
#     question = get_object_or_404(Question, pk=question_id)
#     return render(request, 'polls/detail.html', {'question': question})

# def index(request):
#     latest_schedule_list = Schedule.objects.order_by('-pub_date')[:5]
#     output = ', '.join([q.question_text for q in latest_schedule_list])
#     return HttpResponse(output)
