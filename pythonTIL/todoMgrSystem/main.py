from todo.exception import *
from todo.template import *
from todo.views import *


while True :
    menu_display()
    menu = menu_select()
    if menu == 1 : #전체목록보기
        scheduleList = getAllschedules()
        list_display(scheduleList)

    elif menu == 2 : #등록하기
        schedule = input_display()
        try : 
            register(schedule)
            message_display(schedule.id+"등록성공")
        except DuplicateError as error:
            message_display(error)

    elif menu == 3 : #수정하기
        id = id_input_display("수정")
        try : 
            schedule = getSchedule(id)
            new_schedule = update_input_display(id)
            update(new_schedule)
            message_display(id+" 수정성공")
        except NotFoundError as error :
            message_display(error)

    elif menu == 4 : #삭제하기
        id = id_input_display("삭제")
        try : 
            remove(id)
            message_display(id + "삭제 성공")
        except NotFoundError as error :
            message_display(error)

    elif menu == 0 : #종료하기
        message_display("일정관리시스템을 종료합니다.")
        break

    else :
        print()
        message_display("1,2,3,4, 선택하세요")


