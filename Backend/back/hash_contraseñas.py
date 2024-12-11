import bcrypt

pares ={
    'utn-000001': 'Password#001'
    ,'utn-000002': 'Password#002'
    ,'utn-000003': 'Password#003'
    ,'utn-000004': 'Password#004'
    ,'utn-000005': 'Password#005'
    ,'utn-000006': 'Password#006'
    ,'utn-000007': 'Password#007'
    ,'utn-000008': 'Password#008'
    ,'utn-000009': 'Password#009'
    ,'utn-000010': 'Password#010'
    ,'utn-000011': 'Password#011'
    ,'utn-000012': 'Password#012'
    ,'utn-000013': 'Password#013'
    ,'utn-000014': 'Password#014'
    ,'utn-000015': 'Password#015'
    ,'utn-000016': 'Password#016'
    ,'utn-000017': 'Password#017'
    ,'utn-000018': 'Password#018'
    ,'utn-000019': 'Password#019'
    ,'utn-000020': 'Password#020'
    ,'utn-000021': 'Password#021'
    ,'utn-000022': 'Password#022'
    ,'utn-000023': 'Password#023'
    ,'utn-000024': 'Password#024'
    ,'utn-000025': 'Password#025'
    ,'utn-000026': 'Password#026'
    ,'utn-000027': 'Password#027'
    ,'utn-000028': 'Password#028'
    ,'utn-000029': 'Password#029'
    ,'utn-000030': 'Password#030'
    ,'utn-000031': 'Password#031'
    ,'utn-000032': 'Password#032'
    ,'utn-000033': 'Password#033'
    ,'utn-000034': 'Password#034'
    ,'utn-000035': 'Password#035'
    ,'utn-000036': 'Password#036'
    ,'utn-000037': 'Password#037'
    ,'utn-000038': 'Password#038'
    ,'utn-000039': 'Password#039'
    ,'utn-000040': 'Password#040'
    ,'utn-000041': 'Password#041'
    ,'utn-000042': 'Password#042'
    ,'utn-000043': 'Password#043'
    ,'utn-000044': 'Password#044'
    ,'utn-000045': 'Password#045'
    ,'utn-000046': 'Password#046'
    ,'utn-000047': 'Password#047'
    ,'utn-000048': 'Password#048'
    ,'utn-000049': 'Password#049'
    ,'utn-000050': 'Password#050'
    ,'utn-000051': 'Password#051'
    ,'utn-000052': 'Password#052'
    ,'utn-000053': 'Password#053'
    ,'utn-000054': 'Password#054'
    ,'utn-000055': 'Password#055'
    ,'utn-000056': 'Password#056'
    ,'utn-000057': 'Password#057'
    ,'utn-000058': 'Password#058'
    ,'utn-000059': 'Password#059'
    ,'utn-000060': 'Password#060'
    ,'utn-000061': 'Password#061'
    ,'utn-000062': 'Password#062'
    ,'utn-000063': 'Password#063'
    ,'utn-000064': 'Password#064'
    ,'utn-000065': 'Password#065'
    ,'utn-000066': 'Password#066'
    ,'utn-000067': 'Password#067'
    ,'utn-000068': 'Password#068'
    ,'utn-000069': 'Password#069'
    ,'utn-000070': 'Password#070'
    ,'utn-000071': 'Password#071'
    ,'utn-000072': 'Password#072'
    ,'utn-000073': 'Password#073'
    ,'utn-000074': 'Password#074'
    ,'utn-000075': 'Password#075'
    ,'utn-000076': 'Password#076'
    ,'utn-000077': 'Password#077'
    ,'utn-000078': 'Password#078'
    ,'utn-000079': 'Password#079'
    ,'utn-000080': 'Password#080'
    ,'utn-000081': 'Password#081'
    ,'utn-000082': 'Password#082'
    ,'utn-000083': 'Password#083'
    ,'utn-000084': 'Password#084'
    ,'utn-000085': 'Password#085'
    ,'utn-000086': 'Password#086'
    ,'utn-000087': 'Password#087'
    ,'utn-000088': 'Password#088'
    ,'utn-000089': 'Password#089'
    ,'utn-000090': 'Password#090'
    ,'utn-000091': 'Password#091'
    ,'utn-000092': 'Password#092'
    ,'utn-000093': 'Password#093'
    ,'utn-000094': 'Password#094'
    ,'utn-000095': 'Password#095'
    ,'utn-000096': 'Password#096'
    ,'utn-000097': 'Password#097'
    ,'utn-000098': 'Password#098'
    ,'utn-000099': 'Password#099'
    ,'utn-000100': 'Password#100'
}

lineas = [
    "('utn-000001', 'Password#123', 'Arvin', 'Scofield', true, NULL),",
"('utn-000002', 'Password#123', 'Cort', 'Nuzzi', true, NULL),",
"('utn-000003', 'Password#123', 'Ebba', 'Hamby', true, NULL),",
"('utn-000004', 'Password#123', 'Scarlet', 'McGrah', true, NULL),",
"('utn-000005', 'Password#123', 'Andreas', 'Rayworth', true, NULL),",
"('utn-000006', 'Password#123', 'Melina', 'Denver', true, NULL),",
"('utn-000007', 'Password#123', 'Vernen', 'Abramino', true, NULL),",
"('utn-000008', 'Password#123', 'Sebastiano', 'McMyler', true, NULL),",
"('utn-000009', 'Password#123', 'Sofia', 'Lamburn', true, NULL),",
"('utn-000010', 'Password#123', 'Elonore', 'McBryde', true, NULL),",
"('utn-000011', 'Password#123', 'Rosmunda', 'Bahl', true, NULL),",
"('utn-000012', 'Password#123', 'Tiffie', 'Nurse', true, NULL),",
"('utn-000013', 'Password#123', 'Sibyl', 'Pawel', true, NULL),",
"('utn-000014', 'Password#123', 'Win', 'Zeal', true, NULL),",
"('utn-000015', 'Password#123', 'Magdalen', 'Judkin', true, NULL),",
"('utn-000016', 'Password#123', 'Chan', 'Jellis', true, NULL),",
"('utn-000017', 'Password#123', 'Herb', 'Rex', true, NULL),",
"('utn-000018', 'Password#123', 'Tiffany', 'Verrell', true, NULL),",
"('utn-000019', 'Password#123', 'Ines', 'Tinson', true, NULL),",
"('utn-000020', 'Password#123', 'Keen', 'Howitt', true, NULL),",
"('utn-000021', 'Password#123', 'Krystle', 'Lehrer', true, NULL),",
"('utn-000022', 'Password#123', 'Abbey', 'Agett', true, NULL),",
"('utn-000023', 'Password#123', 'Pembroke', 'Alyonov', true, NULL),",
"('utn-000024', 'Password#123', 'Gradeigh', 'Cestard', true, NULL),",
"('utn-000025', 'Password#123', 'Fin', 'Revan', true, NULL),",
"('utn-000026', 'Password#123', 'Blanch', 'Beades', true, NULL),",
"('utn-000027', 'Password#123', 'Herve', 'Saynor', true, NULL),",
"('utn-000028', 'Password#123', 'Gaile', 'Chantler', true, NULL),",
"('utn-000029', 'Password#123', 'Kessiah', 'Gaymer', true, NULL),",
"('utn-000030', 'Password#123', 'Gordan', 'Gamble', true, NULL),",
"('utn-000031', 'Password#123', 'Neill', 'Gillard', true, NULL),",
"('utn-000032', 'Password#123', 'Clovis', 'Shankle', true, NULL),",
"('utn-000033', 'Password#123', 'Alvira', 'Sympson', true, NULL),",
"('utn-000034', 'Password#123', 'Lonni', 'Hugle', true, NULL),",
"('utn-000035', 'Password#123', 'Ambrosius', 'Trenholm', true, NULL),",
"('utn-000036', 'Password#123', 'Odella', 'Bhar', true, NULL),",
"('utn-000037', 'Password#123', 'Hasheem', 'Hylands', true, NULL),",
"('utn-000038', 'Password#123', 'Nicoline', 'Harrhy', true, NULL),",
"('utn-000039', 'Password#123', 'Dmitri', 'Brimming', true, NULL),",
"('utn-000040', 'Password#123', 'Poppy', 'Lehrer', true, NULL),",
"('utn-000041', 'Password#123', 'Christabel', 'Zebedee', true, NULL),",
"('utn-000042', 'Password#123', 'Orelia', 'Brass', true, NULL),",
"('utn-000043', 'Password#123', 'Moore', 'Normanvell', true, NULL),",
"('utn-000044', 'Password#123', 'Simonette', 'Spratley', true, NULL),",
"('utn-000045', 'Password#123', 'Devi', 'De Banke', true, NULL),",
"('utn-000046', 'Password#123', 'Sascha', 'Biswell', true, NULL),",
"('utn-000047', 'Password#123', 'Rivkah', 'Grealish', true, NULL),",
"('utn-000048', 'Password#123', 'Hildegaard', 'Gossart', true, NULL),",
"('utn-000049', 'Password#123', 'Shawn', 'Ferier', true, NULL),",
"('utn-000050', 'Password#123', 'Creight', 'Duigenan', true, NULL),",
"('utn-000051', 'Password#123', 'Chaunce', 'Sheddan', true, NULL),",
"('utn-000052', 'Password#123', 'Aloisia', 'Besset', true, NULL),",
"('utn-000053', 'Password#123', 'Celia', 'Chaundy', true, NULL),",
"('utn-000054', 'Password#123', 'Lamont', 'Guiel', true, NULL),",
"('utn-000055', 'Password#123', 'Maje', 'Bountiff', true, NULL),",
"('utn-000056', 'Password#123', 'Patric', 'Boner', true, NULL),",
"('utn-000057', 'Password#123', 'Vasili', 'Catling', true, NULL),",
"('utn-000058', 'Password#123', 'Caria', 'Barkhouse', true, NULL),",
"('utn-000059', 'Password#123', 'Leda', 'Lansbury', true, NULL),",
"('utn-000060', 'Password#123', 'Bendicty', 'Guiver', true, NULL),",
"('utn-000061', 'Password#123', 'Stuart', 'Mugleston', true, NULL),",
"('utn-000062', 'Password#123', 'Babbie', 'Giuroni', true, NULL),",
"('utn-000063', 'Password#123', 'Joella', 'MacGahey', true, NULL),",
"('utn-000064', 'Password#123', 'Justinian', 'Pina', true, NULL),",
"('utn-000065', 'Password#123', 'Chaddy', 'Watkins', true, NULL),",
"('utn-000066', 'Password#123', 'Maurits', 'Tiplady', true, NULL),",
"('utn-000067', 'Password#123', 'Beverly', 'Forsdicke', true, NULL),",
"('utn-000068', 'Password#123', 'Evita', 'Petrolli', true, NULL),",
"('utn-000069', 'Password#123', 'Willard', 'Medina', true, NULL),",
"('utn-000070', 'Password#123', 'Rog', 'Sebring', true, NULL),",
"('utn-000071', 'Password#123', 'Maxine', 'Fibbitts', true, NULL),",
"('utn-000072', 'Password#123', 'Peria', 'Marson', true, NULL),",
"('utn-000073', 'Password#123', 'Jania', 'Threader', true, NULL),",
"('utn-000074', 'Password#123', 'Mame', 'Kabsch', true, NULL),",
"('utn-000075', 'Password#123', 'Ettore', 'Guarin', true, NULL),",
"('utn-000076', 'Password#123', 'Ethelind', 'Blint', true, NULL),",
"('utn-000077', 'Password#123', 'Ruy', 'Van Daalen', true, NULL),",
"('utn-000078', 'Password#123', 'Delaney', 'Keary', true, NULL),",
"('utn-000079', 'Password#123', 'Morlee', 'Locarno', true, NULL),",
"('utn-000080', 'Password#123', 'Carine', 'Grieves', true, NULL),",
"('utn-000081', 'Password#123', 'Edgar', 'Wholesworth', true, NULL),",
"('utn-000082', 'Password#123', 'Bobbee', 'Varrow', true, NULL),",
"('utn-000083', 'Password#123', 'Alix', 'St. Clair', true, NULL),",
"('utn-000084', 'Password#123', 'Kendall', 'Baccup', true, NULL),",
"('utn-000085', 'Password#123', 'Keri', 'Anniwell', true, NULL),",
"('utn-000086', 'Password#123', 'Dorry', 'Guerin', true, NULL),",
"('utn-000087', 'Password#123', 'Norine', 'Brownill', true, NULL),",
"('utn-000088', 'Password#123', 'Florry', 'Caustick', true, NULL),",
"('utn-000089', 'Password#123', 'Laure', 'Wiseman', true, NULL),",
"('utn-000090', 'Password#123', 'Aloysius', 'Wannell', true, NULL),",
"('utn-000091', 'Password#123', 'Lovell', 'Bailiss', true, NULL),",
"('utn-000092', 'Password#123', 'Rhodie', 'Gellett', true, NULL),",
"('utn-000093', 'Password#123', 'Waylon', 'Prangle', true, NULL),",
"('utn-000094', 'Password#123', 'Saudra', 'Hawe', true, NULL),",
"('utn-000095', 'Password#123', 'Eloise', 'Layton', true, NULL),",
"('utn-000096', 'Password#123', 'Katrina', 'McGloughlin', true, NULL),",
"('utn-000097', 'Password#123', 'Job', 'Scholtis', true, NULL),",
"('utn-000098', 'Password#123', 'Hailee', 'Chagg', true, NULL),",
"('utn-000099', 'Password#123', 'Peggie', 'Sotheby', true, NULL),",
"('utn-000100', 'Password#123', 'Luis', 'Martinez', true, NULL);"
]

comments = []
for user in pares.keys():
    contrasenia = pares[user]
    hash_contrasenia = bcrypt.hashpw(contrasenia.encode('utf-8'), bcrypt.gensalt())
    comments.append("{'"+user+"', "+str(hash_contrasenia)[1:]+'}')

for i in range(len(lineas)):
    linea = lineas[i]
    print(linea[:15]+comments[i][15:-1]+linea[29:])

for c in comments:
    print(c)