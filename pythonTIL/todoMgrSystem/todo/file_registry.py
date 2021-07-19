from os import read
from views import *
from models import *
import os.path

listdat = "C:\Users\ghdig\OneDrive\Desktop\python workspace\MSAcloud\todoMgrSystem\list.dat"

def save_file(schedules) :
    save_file = open(listdat, "w")
    for i in schedules:
        save_file.write("{0},{1},{2},{3},{4}\n".format(i.id, i.title, i.contents, i.date, i.done))
    save_file.close()

def init_data_load():
    schedules = []
    fileExist = os.path.isfile(listdat)
    if fileExist :
        read_file = open(listdat, "r")
        while(True) :
            data = read_file.readline()
            dataList = data.split(",")
            schedule = None
            schedule = Todo(dataList[1], dataList[2], dataList[3],dataList[4],dataList[5])
            schedules.append(schedule)

            if not data : break
        read_file.close()