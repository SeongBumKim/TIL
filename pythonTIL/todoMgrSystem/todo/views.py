from todo.models import *
from todo.exception import *

schedules = []

def is_exist(id):
    for index, schedule in enumerate(schedules):
        if schedule.id == id:
            return index
    return -1

def getAllschedules() :
    return schedules

def register(schedule) : 
    index = is_exist(schedule.id)
    if index > -1:
        raise DuplicateError(schedule.id)
    schedules.append(schedule)

def getSchedule(id) :
    NotFoundError(id)
    index = is_exist(id)
    if index == -1 :
        raise NotFoundError(id)
    return schedules[index]

def update(schedule) :
    index = is_exist(schedule.id)
    if index == -1:
        raise NotFoundError(schedule.id)
    schedules[index] = schedule


def remove(id) :
    index = is_exist(id)
    if index == -1 :
        raise NotFoundError(id)
    return schedules[index]