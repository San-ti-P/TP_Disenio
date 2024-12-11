from ..models import Docente

class GestorDocente():

    def alta_docente(self, docente_DTO): 
        docente = Docente(id_docente=docente_DTO.get_id_docente(), apellido=docente_DTO.get_apellido(), nombre=docente_DTO.get_nombre(), correo_contacto=docente_DTO.get_correo_contacto(), activo=True, fecha_baja=None)
        return docente

    def obtener_docentes(self):
        docentes = [
            Docente(id_docente=1, apellido="Scagnetti", nombre="Olga", correo_contacto="oscagnetti@frsf.utn.edu.ar"),
            Docente(id_docente=2, apellido="Ramirez", nombre="Sandra", correo_contacto="scramirez@frsf.utn.edu.ar"),
            Docente(id_docente=3, apellido="Dlugovitzky", nombre="Fabio", correo_contacto="fduglovi@frsf.utn.edu.ar"),
            Docente(id_docente=4, apellido="Budini", nombre="Francisco", correo_contacto="fgbudini@frsf.utn.edu.ar"),
            Docente(id_docente=5, apellido="Enrique", nombre="Claudio", correo_contacto="cenrique@frsf.utn.edu.ar"),
            Docente(id_docente=6, apellido="Gomez", nombre="Laura", correo_contacto="lgomez@frsf.utn.edu.ar"),
            Docente(id_docente=7, apellido="Martinez", nombre="Carlos", correo_contacto="cmartinez@frsf.utn.edu.ar"),
            Docente(id_docente=8, apellido="Fernandez", nombre="Maria", correo_contacto="mfernandez@frsf.utn.edu.ar"),
            Docente(id_docente=9, apellido="Lopez", nombre="Jose", correo_contacto="jlopez@frsf.utn.edu.ar"),
            Docente(id_docente=10, apellido="Perez", nombre="Ana", correo_contacto="aperez@frsf.utn.edu.ar"),
            Docente(id_docente=11, apellido="Garcia", nombre="Luis", correo_contacto="lgarcia@frsf.utn.edu.ar"),
            Docente(id_docente=12, apellido="Rodriguez", nombre="Marta", correo_contacto="mrodriguez@frsf.utn.edu.ar"),
            Docente(id_docente=13, apellido="Sanchez", nombre="Juan", correo_contacto="jsanchez@frsf.utn.edu.ar"),
            Docente(id_docente=14, apellido="Gonzalez", nombre="Lucia", correo_contacto="lgonzalez@frsf.utn.edu.ar"),
            Docente(id_docente=15, apellido="Hernandez", nombre="Pedro", correo_contacto="phernandez@frsf.utn.edu.ar"),
            Docente(id_docente=16, apellido="Diaz", nombre="Sofia", correo_contacto="sdiaz@frsf.utn.edu.ar"),
            Docente(id_docente=17, apellido="Moreno", nombre="Miguel", correo_contacto="mmoreno@frsf.utn.edu.ar"),
            Docente(id_docente=18, apellido="Alvarez", nombre="Carmen", correo_contacto="calvarez@frsf.utn.edu.ar"),
            Docente(id_docente=19, apellido="Romero", nombre="Jorge", correo_contacto="jromero@frsf.utn.edu.ar"),
            Docente(id_docente=20, apellido="Torres", nombre="Elena", correo_contacto="etorres@frsf.utn.edu.ar"),
            Docente(id_docente=21, apellido="Ruiz", nombre="Raul", correo_contacto="rruiz@frsf.utn.edu.ar"),
            Docente(id_docente=22, apellido="Vazquez", nombre="Patricia", correo_contacto="pvazquez@frsf.utn.edu.ar"),
            Docente(id_docente=23, apellido="Castro", nombre="Fernando", correo_contacto="fcastro@frsf.utn.edu.ar"),
            Docente(id_docente=24, apellido="Ortiz", nombre="Isabel", correo_contacto="iortiz@frsf.utn.edu.ar"),
            Docente(id_docente=25, apellido="Jimenez", nombre="Rosa", correo_contacto="rjimenez@frsf.utn.edu.ar"),
            Docente(id_docente=26, apellido="Serrano", nombre="Alberto", correo_contacto="aserrano@frsf.utn.edu.ar"),
            Docente(id_docente=27, apellido="Ramos", nombre="Teresa", correo_contacto="tramos@frsf.utn.edu.ar"),
            Docente(id_docente=28, apellido="Blanco", nombre="Ricardo", correo_contacto="rblanco@frsf.utn.edu.ar"),
            Docente(id_docente=29, apellido="Molina", nombre="Cristina", correo_contacto="cmolina@frsf.utn.edu.ar"),
            Docente(id_docente=30, apellido="Suarez", nombre="Antonio", correo_contacto="asuarez@frsf.utn.edu.ar"),
            Docente(id_docente=31, apellido="Morales", nombre="Beatriz", correo_contacto="bmorales@frsf.utn.edu.ar"),
            Docente(id_docente=32, apellido="Ortega", nombre="Pablo", correo_contacto="portega@frsf.utn.edu.ar"),
            Docente(id_docente=33, apellido="Delgado", nombre="Angela", correo_contacto="adelgado@frsf.utn.edu.ar"),
            Docente(id_docente=34, apellido="Gil", nombre="Roberto", correo_contacto="rgil@frsf.utn.edu.ar"),
            Docente(id_docente=35, apellido="Marin", nombre="Marta", correo_contacto="mmarin@frsf.utn.edu.ar"),
            Docente(id_docente=36, apellido="Iglesias", nombre="Francisco", correo_contacto="figlesias@frsf.utn.edu.ar"),
            Docente(id_docente=37, apellido="Santos", nombre="Laura", correo_contacto="lsantos@frsf.utn.edu.ar"),
            Docente(id_docente=38, apellido="Cruz", nombre="Javier", correo_contacto="jcruz@frsf.utn.edu.ar"),
            Docente(id_docente=39, apellido="Flores", nombre="Ana", correo_contacto="aflores@frsf.utn.edu.ar"),
            Docente(id_docente=40, apellido="Herrera", nombre="Luis", correo_contacto="lherrera@frsf.utn.edu.ar"),
            Docente(id_docente=41, apellido="Peña", nombre="Carmen", correo_contacto="cpena@frsf.utn.edu.ar"),
            Docente(id_docente=42, apellido="Cabrera", nombre="Jose", correo_contacto="jcabrera@frsf.utn.edu.ar"),
            Docente(id_docente=43, apellido="Rojas", nombre="Maria", correo_contacto="mrojas@frsf.utn.edu.ar"),
            Docente(id_docente=44, apellido="Reyes", nombre="Pedro", correo_contacto="preyes@frsf.utn.edu.ar"),
            Docente(id_docente=45, apellido="Mendez", nombre="Lucia", correo_contacto="lmendez@frsf.utn.edu.ar"),
            Docente(id_docente=46, apellido="Medina", nombre="Miguel", correo_contacto="mmedina@frsf.utn.edu.ar"),
            Docente(id_docente=47, apellido="Vega", nombre="Sofia", correo_contacto="svega@frsf.utn.edu.ar"),
            Docente(id_docente=48, apellido="Campos", nombre="Raul", correo_contacto="rcampos@frsf.utn.edu.ar"),
            Docente(id_docente=49, apellido="Fuentes", nombre="Patricia", correo_contacto="pfuentes@frsf.utn.edu.ar"),
            Docente(id_docente=50, apellido="Carrillo", nombre="Fernando", correo_contacto="fcarrillo@frsf.utn.edu.ar"),
            Docente(id_docente=51, apellido="Caballero", nombre="Isabel", correo_contacto="icaballero@frsf.utn.edu.ar"),
            Docente(id_docente=52, apellido="Nieto", nombre="Rosa", correo_contacto="rnieto@frsf.utn.edu.ar"),
            Docente(id_docente=53, apellido="Cortes", nombre="Alberto", correo_contacto="acortes@frsf.utn.edu.ar"),
            Docente(id_docente=54, apellido="Castillo", nombre="Teresa", correo_contacto="tcastillo@frsf.utn.edu.ar"),
            Docente(id_docente=55, apellido="Silva", nombre="Ricardo", correo_contacto="rsilva@frsf.utn.edu.ar"),
            Docente(id_docente=56, apellido="Rios", nombre="Cristina", correo_contacto="crios@frsf.utn.edu.ar"),
            Docente(id_docente=57, apellido="Soto", nombre="Antonio", correo_contacto="asoto@frsf.utn.edu.ar"),
            Docente(id_docente=58, apellido="Dominguez", nombre="Beatriz", correo_contacto="bdominguez@frsf.utn.edu.ar"),
            Docente(id_docente=59, apellido="Vargas", nombre="Pablo", correo_contacto="pvargas@frsf.utn.edu.ar"),
            Docente(id_docente=60, apellido="Arias", nombre="Angela", correo_contacto="aarias@frsf.utn.edu.ar"),
            Docente(id_docente=61, apellido="Mora", nombre="Roberto", correo_contacto="rmora@frsf.utn.edu.ar"),
            Docente(id_docente=62, apellido="Sierra", nombre="Marta", correo_contacto="msierra@frsf.utn.edu.ar"),
            Docente(id_docente=63, apellido="Bravo", nombre="Francisco", correo_contacto="fbravo@frsf.utn.edu.ar"),
            Docente(id_docente=64, apellido="Paredes", nombre="Laura", correo_contacto="lparedes@frsf.utn.edu.ar"),
            Docente(id_docente=65, apellido="Gallardo", nombre="Javier", correo_contacto="jgallardo@frsf.utn.edu.ar"),
            Docente(id_docente=66, apellido="Rangel", nombre="Ana", correo_contacto="arangel@frsf.utn.edu.ar"),
            Docente(id_docente=67, apellido="Montero", nombre="Luis", correo_contacto="lmontero@frsf.utn.edu.ar"),
            Docente(id_docente=68, apellido="Navarro", nombre="Carmen", correo_contacto="cnavarro@frsf.utn.edu.ar"),
            Docente(id_docente=69, apellido="Lorenzo", nombre="Jose", correo_contacto="jlorenzo@frsf.utn.edu.ar"),
            Docente(id_docente=70, apellido="Rivas", nombre="Maria", correo_contacto="mrivas@frsf.utn.edu.ar"),
            Docente(id_docente=71, apellido="Espinoza", nombre="Pedro", correo_contacto="pespinoza@frsf.utn.edu.ar"),
            Docente(id_docente=72, apellido="Benitez", nombre="Lucia", correo_contacto="lbenitez@frsf.utn.edu.ar"),
            Docente(id_docente=73, apellido="Farina", nombre="Miguel", correo_contacto="mfarina@frsf.utn.edu.ar"),
            Docente(id_docente=74, apellido="Ponce", nombre="Sofia", correo_contacto="sponce@frsf.utn.edu.ar"),
            Docente(id_docente=75, apellido="Cordero", nombre="Raul", correo_contacto="rcordero@frsf.utn.edu.ar"),
            Docente(id_docente=76, apellido="Luna", nombre="Patricia", correo_contacto="pluna@frsf.utn.edu.ar"),
            Docente(id_docente=77, apellido="Maldonado", nombre="Fernando", correo_contacto="fmaldonado@frsf.utn.edu.ar"),
            Docente(id_docente=78, apellido="Velasco", nombre="Isabel", correo_contacto="ivelasco@frsf.utn.edu.ar"),
            Docente(id_docente=79, apellido="Escobar", nombre="Rosa", correo_contacto="rescobar@frsf.utn.edu.ar"),
            Docente(id_docente=80, apellido="Santiago", nombre="Alberto", correo_contacto="asantiago@frsf.utn.edu.ar"),
            Docente(id_docente=81, apellido="Palacios", nombre="Teresa", correo_contacto="tpalacios@frsf.utn.edu.ar"),
            Docente(id_docente=82, apellido="Villar", nombre="Ricardo", correo_contacto="rvillar@frsf.utn.edu.ar"),
            Docente(id_docente=83, apellido="Mendez", nombre="Cristina", correo_contacto="cmendez@frsf.utn.edu.ar"),
            Docente(id_docente=84, apellido="Sosa", nombre="Antonio", correo_contacto="asosa@frsf.utn.edu.ar"),
            Docente(id_docente=85, apellido="Guerrero", nombre="Beatriz", correo_contacto="bguerrero@frsf.utn.edu.ar"),
            Docente(id_docente=86, apellido="Avila", nombre="Pablo", correo_contacto="pavila@frsf.utn.edu.ar"),
            Docente(id_docente=87, apellido="Pena", nombre="Angela", correo_contacto="apena@frsf.utn.edu.ar"),
            Docente(id_docente=88, apellido="Rios", nombre="Roberto", correo_contacto="rrios@frsf.utn.edu.ar"),
            Docente(id_docente=89, apellido="Cano", nombre="Marta", correo_contacto="mcano@frsf.utn.edu.ar"),
            Docente(id_docente=90, apellido="Lara", nombre="Francisco", correo_contacto="flara@frsf.utn.edu.ar"),
            Docente(id_docente=91, apellido="Mendoza", nombre="Laura", correo_contacto="lmendoza@frsf.utn.edu.ar"),
            Docente(id_docente=92, apellido="Salinas", nombre="Javier", correo_contacto="jsalinas@frsf.utn.edu.ar"),
            Docente(id_docente=93, apellido="Aguilar", nombre="Ana", correo_contacto="aaguilar@frsf.utn.edu.ar"),
            Docente(id_docente=94, apellido="Vargas", nombre="Luis", correo_contacto="lvargas@frsf.utn.edu.ar"),
            Docente(id_docente=95, apellido="Castro", nombre="Carmen", correo_contacto="ccastro@frsf.utn.edu.ar"),
            Docente(id_docente=96, apellido="Ortega", nombre="Jose", correo_contacto="jortega@frsf.utn.edu.ar"),
            Docente(id_docente=97, apellido="Santos", nombre="Maria", correo_contacto="msantos@frsf.utn.edu.ar"),
            Docente(id_docente=98, apellido="Ramos", nombre="Pedro", correo_contacto="pramos@frsf.utn.edu.ar"),
            Docente(id_docente=99, apellido="Lopez", nombre="Lucia", correo_contacto="llopez@frsf.utn.edu.ar"),
            Docente(id_docente=100, apellido="Lopez", nombre="Ana", correo_contacto="alopez@frsf.utn.edu.ar")
        ]
        return docentes