#id, title, contents, date, done
class Todo :
    def __init__(self, id, title, contents, date, done) :
        self.id = id #int
        self.title = title #str
        self.contents = contents #str
        self.date = date #str
        self.done = done #boll

    def info(self) :
        return self.id+ " : " +self.title+ " : " +self.contents+ " : " +self.date+ " : " +self.done
