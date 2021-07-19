from todo.models import *

def menu_display():
    print("====== 일정관리 시스템 ======")
    print("1. 전체목록보기(날짜, 일정제목)")
    print("2. 등록하기")
    print("3. 수정하기")
    print("4. 삭제하기")
    print("0. 종료")


def input_display():
        id = input("아이디 : ")
        title = input("일정제목 : ")
        contents = input("내용 : ")
        date = input("날짜 : ")
        done = input("완료여부 : (Y,N)")
        return Todo(id, title, contents, date, done)

def list_display(schedules):
    print("=== 전체 일정 ===")
    for schedule in schedules :
        print(schedule.info())


def update_input_display(id):
    title = input("일정제목 : ")
    contents = input("내용 : ")
    date = input("날짜 : ")
    done = input("완료여부 : (Y,N)")
    return Todo(id, title, contents, date, done)

def message_display(message):
    print(message)

def id_input_display(command):
    id = input("{0} id는 ?".format(command))
    return id

def menu_select():
    menu = int(input("메뉴를 선택하세요 : "))
    return menu


#    self.id = id #int
#        self.title = title #str
#        self.contents = contents #str
#        self.date = date #str
#        self.done = done #boll