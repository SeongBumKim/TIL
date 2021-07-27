# Generated by Django 3.2.5 on 2021-07-13 07:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Schedule',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Schedule_title', models.CharField(max_length=200)),
                ('Schedule_contents', models.CharField(max_length=4000)),
                ('Schedule_date', models.DateField(verbose_name='schedule date')),
            ],
        ),
    ]
