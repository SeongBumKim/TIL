from django.db import models
from django.db.models.deletion import CASCADE

class Title(models.Model):
    schedule_title = models.CharField(max_length=200)
    pub_date = models.DateField('schedule date')

    def __str__(self):
        return self.schedule_title

class Contents(models.Model):
    schedule_contents = models.CharField(max_length=4000)
    schedule = models.ForeignKey(Title, on_delete=CASCADE)



