# Generated by Django 3.0.5 on 2021-01-01 01:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('social_auth', '0003_auto_20201231_2225'),
    ]

    operations = [
        migrations.AddField(
            model_name='profilemodel',
            name='avatar_url',
            field=models.CharField(blank=True, max_length=256, null=True),
        ),
    ]
