# Generated by Django 5.1.4 on 2024-12-06 20:25

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('id_usuario', models.CharField(max_length=10, primary_key=True, serialize=False)),
                ('contrasenia', models.BinaryField(max_length=60)),
                ('nombre', models.CharField(max_length=30)),
                ('apellido', models.CharField(max_length=30)),
                ('activo', models.BooleanField(default=True)),
                ('fecha_baja', models.DateField(blank=True, default=None, null=True)),
            ],
            options={
                'db_table': 'Usuario',
            },
        ),
        migrations.CreateModel(
            name='Aula',
            fields=[
                ('nro_aula', models.CharField(max_length=25, primary_key=True, serialize=False)),
                ('capacidad', models.PositiveSmallIntegerField()),
                ('piso', models.CharField(max_length=20)),
                ('aire_acondicionado', models.BooleanField()),
                ('estado_aula', models.CharField(choices=[('Habilitado', 'Habilitado'), ('Deshabilitado', 'Deshabilitado')], max_length=15)),
                ('activo', models.BooleanField(default=True)),
                ('fecha_baja', models.DateField(blank=True, default=None, null=True)),
            ],
            options={
                'db_table': 'Aula',
            },
        ),
        migrations.CreateModel(
            name='Docente',
            fields=[
                ('id_docente_historia', models.AutoField(primary_key=True, serialize=False)),
                ('id_docente', models.IntegerField()),
                ('nombre', models.CharField(max_length=30)),
                ('apellido', models.CharField(max_length=30)),
                ('correo_contacto', models.EmailField(max_length=50)),
                ('activo', models.BooleanField(default=True)),
                ('fecha_baja', models.DateField(blank=True, default=None, null=True)),
            ],
            options={
                'db_table': 'Docente',
            },
        ),
        migrations.CreateModel(
            name='Periodo',
            fields=[
                ('id_periodo', models.AutoField(primary_key=True, serialize=False)),
                ('tipo', models.CharField(choices=[('Anual', 'Anual'), ('Primer Cuatrimestre', 'Primer Cuatrimestre'), ('Segundo Cuatrimestre', 'Segundo Cuatrimestre')], max_length=25)),
                ('anio', models.IntegerField()),
                ('fecha_inicio', models.DateField()),
                ('fecha_fin', models.DateField()),
                ('activo', models.BooleanField(default=True)),
                ('fecha_baja', models.DateField(blank=True, default=None, null=True)),
            ],
            options={
                'db_table': 'Periodo',
            },
        ),
        migrations.CreateModel(
            name='TipoPizarron',
            fields=[
                ('id_tipo_pizarron', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=20)),
                ('descripcion', models.CharField(max_length=50)),
                ('activo', models.BooleanField(default=True)),
                ('fecha_baja', models.DateField(blank=True, default=None, null=True)),
            ],
            options={
                'db_table': 'TipoPizarron',
            },
        ),
        migrations.CreateModel(
            name='Administrador',
            fields=[
                ('usuario_ptr', models.OneToOneField(db_column='id_usuario', on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='tpdisenio.usuario')),
            ],
            options={
                'db_table': 'Administrador',
            },
            bases=('tpdisenio.usuario',),
        ),
        migrations.CreateModel(
            name='Bedel',
            fields=[
                ('usuario_ptr', models.OneToOneField(db_column='id_usuario', on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='tpdisenio.usuario')),
                ('turno', models.CharField(choices=[('Maniana', 'Maniana'), ('Tarde', 'Tarde'), ('Noche', 'Noche')], max_length=10)),
            ],
            options={
                'db_table': 'Bedel',
            },
            bases=('tpdisenio.usuario',),
        ),
        migrations.CreateModel(
            name='AulaInformatica',
            fields=[
                ('aula_ptr', models.OneToOneField(db_column='nro_aula', on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='tpdisenio.aula')),
                ('cant_PCs', models.PositiveSmallIntegerField()),
                ('canion', models.BooleanField()),
            ],
            options={
                'db_table': 'AulaInformatica',
            },
            bases=('tpdisenio.aula',),
        ),
        migrations.CreateModel(
            name='AulaMultimedio',
            fields=[
                ('aula_ptr', models.OneToOneField(db_column='nro_aula', on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='tpdisenio.aula')),
                ('televisor', models.BooleanField()),
                ('canion', models.BooleanField()),
                ('ventilador', models.BooleanField()),
                ('computadora', models.BooleanField()),
            ],
            options={
                'db_table': 'AulaMultimedio',
            },
            bases=('tpdisenio.aula',),
        ),
        migrations.CreateModel(
            name='AulaSinRecursosAdicionales',
            fields=[
                ('aula_ptr', models.OneToOneField(db_column='nro_aula', on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='tpdisenio.aula')),
                ('ventilador', models.BooleanField()),
            ],
            options={
                'db_table': 'AulaSinRecursosAdicionales',
            },
            bases=('tpdisenio.aula',),
        ),
        migrations.CreateModel(
            name='Actividad',
            fields=[
                ('id_actividad_historia', models.AutoField(primary_key=True, serialize=False)),
                ('id_actividad', models.IntegerField()),
                ('nombre', models.CharField(max_length=40)),
                ('descripcion', models.CharField(max_length=100)),
                ('activo', models.BooleanField(default=True)),
                ('fecha_baja', models.DateField(blank=True, default=None, null=True)),
                ('docente', models.ForeignKey(db_column='id_docente', on_delete=django.db.models.deletion.PROTECT, to='tpdisenio.docente')),
            ],
            options={
                'db_table': 'Actividad',
            },
        ),
        migrations.CreateModel(
            name='Reserva',
            fields=[
                ('id_reserva', models.AutoField(primary_key=True, serialize=False)),
                ('cantidad_alumnos', models.PositiveSmallIntegerField()),
                ('fecha_solicitud', models.DateField()),
                ('tipo', models.CharField(choices=[('Esporadica', 'Esporadica'), ('Periodica', 'Periodica')], max_length=15)),
                ('activo', models.BooleanField(default=True)),
                ('fecha_baja', models.DateField(blank=True, default=None, null=True)),
                ('actividad', models.ForeignKey(db_column='id_actividad', on_delete=django.db.models.deletion.PROTECT, to='tpdisenio.actividad')),
                ('periodo', models.ForeignKey(blank=True, db_column='id_periodo', null=True, on_delete=django.db.models.deletion.PROTECT, to='tpdisenio.periodo')),
                ('usuario', models.ForeignKey(db_column='id_usuario', on_delete=django.db.models.deletion.PROTECT, to='tpdisenio.usuario')),
            ],
            options={
                'db_table': 'Reserva',
            },
        ),
        migrations.CreateModel(
            name='Reservacion',
            fields=[
                ('id_reservacion', models.AutoField(primary_key=True, serialize=False)),
                ('fecha', models.DateField()),
                ('duracion', models.PositiveSmallIntegerField()),
                ('dia', models.CharField(choices=[('Lunes', 'Lunes'), ('Martes', 'Martes'), ('Miercoles', 'Miercoles'), ('Jueves', 'Jueves'), ('Viernes', 'Viernes'), ('Sabado', 'Sabado'), ('Domingo', 'Domingo')], max_length=12)),
                ('hora_inicio', models.TimeField()),
                ('activo', models.BooleanField(default=True)),
                ('fecha_baja', models.DateField(blank=True, default=None, null=True)),
                ('aula', models.ForeignKey(db_column='nro_aula', on_delete=django.db.models.deletion.PROTECT, to='tpdisenio.aula')),
                ('reserva', models.ForeignKey(db_column='id_reserva', on_delete=django.db.models.deletion.PROTECT, to='tpdisenio.reserva')),
            ],
            options={
                'db_table': 'Reservacion',
            },
        ),
        migrations.CreateModel(
            name='Tiene',
            fields=[
                ('id', models.CharField(max_length=10, primary_key=True, serialize=False)),
                ('nro_aula', models.ForeignKey(db_column='nro_aula', on_delete=django.db.models.deletion.CASCADE, to='tpdisenio.aula')),
                ('id_tipo_pizarron', models.ForeignKey(db_column='id_tipo_pizarron', on_delete=django.db.models.deletion.CASCADE, to='tpdisenio.tipopizarron')),
            ],
            options={
                'db_table': 'Tiene',
            },
        ),
        migrations.AddField(
            model_name='aula',
            name='tiene_pizarrones',
            field=models.ManyToManyField(related_name='aulas', through='tpdisenio.Tiene', to='tpdisenio.tipopizarron'),
        ),
    ]
