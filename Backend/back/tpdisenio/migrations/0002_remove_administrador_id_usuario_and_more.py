# Generated by Django 5.1.2 on 2024-10-17 19:25

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tpdisenio', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='administrador',
            name='id_usuario',
        ),
        migrations.RemoveField(
            model_name='bedel',
            name='id_usuario',
        ),
        migrations.AddField(
            model_name='administrador',
            name='usuario_ptr',
            field=models.OneToOneField(db_column='id_usuario', default='bedel1', on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='tpdisenio.usuario'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='bedel',
            name='usuario_ptr',
            field=models.OneToOneField(db_column='id_usuario', default='bedel1', on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='tpdisenio.usuario'),
            preserve_default=False,
        ),
    ]
