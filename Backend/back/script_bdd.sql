TRUNCATE public."Usuario", public."Bedel", public."Administrador", public."Periodo", public."AulaInformatica", public."AulaMultimedio", public."AulaSinRecursosAdicionales", public."Aula" CASCADE;

-- INSERT INTO public."Usuario" (id_usuario, contrasenia, nombre, apellido, activo, fecha_baja) VALUES 
-- ('utn-000000', '$2b$12$AGJJjVaYiowu/07AGLEVtOaxijElrlKC0JWnxzPmARm8t.1qB.1Uu', 'Marcos', 'Debona', true, NULL),
-- ('utn-000001', '$2b$12$.lnzsK8emAnoLZtx6ORh/Omvx71ZHkfaxnTKXC7.1dX3sKdej9PgW', 'Gonzalo', 'Gaitan', true, NULL),
-- ('utn-111111', '$2b$12$J89rWnokcsCohybni/dIfuGUy3OHaNsktdusWvxSeAvfdCfwA2Dea', 'Gustavo', 'Flores', true, NULL),
-- ('utn-222222', '$2b$12$HCCSuOju9LUd4.aJKeiNbOPqTDawl2n12VKheJgtPATYyoWDkkfS2', 'Ramiro', 'Arrizabalaga', true, NULL),
-- ('utn-333333', '$2b$12$MAW/vQIItlUlNIRwdWRU3uXvM0eTnp9fFGUxXhvZKK0YEmBfbu1Eq', 'Laura', 'Cristante', true, NULL),
-- ('utn-444444', '$2b$12$7zai9wdKrBBPQ1.3wQ2IUOIeU9x6bj5Uhl4ZBc0k7KQ/4cJEyQ4cC', 'Carlos', 'Sosa', true, NULL),
-- ('utn-555555', '$2b$12$fAGHnAjT9IxX2oHC398QdOspH4KsdLDg1LQmHv0edeuwZ3NmWn4ou', 'Darío', 'Carvajal', true, NULL),
-- ('utn-666666', '$2b$12$HbhyA5LQEU.igQ7ZSH2pberIo1EmtC8rOz0vzQN6P5uR28bAJKy6m', 'Ana', 'Martinez', true, NULL),
-- ('utn-777777', '$2b$12$18dG/3V5XajSyEQR8lpfIuOsixMgShILKvHjOlP02mUrmE7aJW0R.', 'Pedro', 'Gomez', true, NULL),
-- ('utn-888888', '$2b$12$7V2IhGvQS.SIH9aBQWZW7exv7Ur3AQcpWRilIhZykxfZczq14cGwO', 'Lucia', 'Perez', true, NULL),
-- ('utn-999999', '$2b$12$seQm4nUM2KkUYcopuSiQvOP8dHaMh8QGp/r8agiM5qD1tOwzxxjbK', 'Juan', 'Lopez', true, NULL),
-- ('utn-101010', '$2b$12$QObdc0hk7iazkzsfzJzEZ.WF3WtNI4VfYNr.s8lvro947wPCjsStK', 'Sofia', 'Garcia', true, NULL);


-- INSERT INTO public."Administrador" (id_usuario) VALUES 
-- ('utn-000000'),
-- ('utn-000001');

-- INSERT INTO public."Bedel" (id_usuario, turno) VALUES 
-- ('utn-111111', 'Maniana'),
-- ('utn-222222', 'Tarde'),
-- ('utn-333333', 'Noche'),
-- ('utn-444444', 'Maniana'),
-- ('utn-555555', 'Tarde'),
-- ('utn-666666', 'Noche'),
-- ('utn-777777', 'Maniana'),
-- ('utn-888888', 'Tarde'),
-- ('utn-999999', 'Noche'),
-- ('utn-101010', 'Maniana');

--{'utn-000000', 'admin1&Pass'}
--{'utn-000001', 'admin2&Pass'}
--{'utn-111111', 'pass#Bedel1'} 
--{'utn-222222', 'pass#Bedel2'}
--{'utn-333333', 'pass#Bedel3'}
--{'utn-444444', 'pass#Bedel4'}
--{'utn-555555', 'pass#Bedel5'}
--{'utn-666666', 'pass#Bedel6'}
--{'utn-777777', 'pass#Bedel7'}
--{'utn-888888', 'pass#Bedel8'}
--{'utn-999999', 'pass#Bedel9'}
--{'utn-101010', 'pass#Bedel10'}


INSERT INTO public."Periodo" (id_periodo, tipo, anio, fecha_inicio, fecha_fin, activo, fecha_baja) VALUES (1, 'Anual', 2024, '2024-03-11', '2024-11-29', true, NULL);
INSERT INTO public."Periodo" (id_periodo, tipo, anio, fecha_inicio, fecha_fin, activo, fecha_baja) VALUES (2, 'Primer Cuatrimestre', 2024, '2024-03-11', '2024-07-05', true, NULL);
INSERT INTO public."Periodo" (id_periodo, tipo, anio, fecha_inicio, fecha_fin, activo, fecha_baja) VALUES (3, 'Segundo Cuatrimestre', 2024, '2024-08-06', '2024-11-29', true, NULL);
INSERT INTO public."Periodo" (id_periodo, tipo, anio, fecha_inicio, fecha_fin, activo, fecha_baja) VALUES (4, 'Primer Cuatrimestre', 2025, '2025-03-10', '2025-07-04', true, NULL);
INSERT INTO public."Periodo" (id_periodo, tipo, anio, fecha_inicio, fecha_fin, activo, fecha_baja) VALUES (5, 'Segundo Cuatrimestre', 2025, '2025-08-05', '2025-11-28', true, NULL);
INSERT INTO public."Periodo" (id_periodo, tipo, anio, fecha_inicio, fecha_fin, activo, fecha_baja) VALUES (6, 'Anual', 2025, '2025-03-10', '2025-11-28', true, NULL);

INSERT INTO public."Usuario" (id_usuario, contrasenia, nombre, apellido, activo, fecha_baja) VALUES 
('utn-000001', '$2b$12$Fpw6E5wSVyLIku251oJ1mu28bZshNhAQNHTTf.Qx7qNHLvXULu5wW', 'Arvin', 'Scofield', true, NULL),
('utn-000002', '$2b$12$u.TRcD8gMfKw9g.Dmxq6SOXDaQNnrcbOdVo7co0uguviRl7fJvLnm', 'Cort', 'Nuzzi', true, NULL),
('utn-000003', '$2b$12$JWmWrthNmXwycdiZtMpbze0yqwffWqc8Reo/zFfrQO6NUwaofkP5K', 'Ebba', 'Hamby', true, NULL),
('utn-000004', '$2b$12$SGik5wT0SbivK97IBDg/HOgAw0gZwj5nF8c59dh2kO8co5MRFcEDu', 'Scarlet', 'McGrah', true, NULL),
('utn-000005', '$2b$12$vW0H2jBCjRs6vgw4rJFvGeB4E5uXZmucSSuual2xg2/wQKOQ8B/jK', 'Andreas', 'Rayworth', true, NULL),
('utn-000006', '$2b$12$RaiVWm40gIKMRXZYL38VleVJCps2BXc0vykhYzSZAfSv6FaKuaLP.', 'Melina', 'Denver', true, NULL),
('utn-000007', '$2b$12$iOpvQS8S1EQbzvaTz.zQuObJT7vatzeDStbxotOHYafv2jxUsBbsi', 'Vernen', 'Abramino', true, NULL),
('utn-000008', '$2b$12$NZzQR3oO7hEWsmpxOfMFHuP8To/NRYOdfGTaYaFUiLwibZVvcxDY.', 'Sebastiano', 'McMyler', true, NULL),
('utn-000009', '$2b$12$D5xnA3//JZe2mMpju0CkWeE4.33iqoXKkBxbl4zHnYg/F.Kvn73ya', 'Sofia', 'Lamburn', true, NULL),
('utn-000010', '$2b$12$fFEelMVzd7JEmmPsbU3aSOHwn09CjbenkdyK8ngB6ea1FDxqoYzny', 'Elonore', 'McBryde', true, NULL),
('utn-000011', '$2b$12$M9WMMp2/YJmn479EPWBBiOPF5ygatCQ3cPsqFFZkH3tg2Lu82yEiG', 'Rosmunda', 'Bahl', true, NULL),
('utn-000012', '$2b$12$UVCVzQqsZQWaNSVmkEl7uenvTQQHjYneZsuid4eK2/bZzmY.r34CG', 'Tiffie', 'Nurse', true, NULL),
('utn-000013', '$2b$12$mP1B71Fq/UWkrSa8g2iQKuqzQniQ0i9DjphNlYv33PmA2zsrS32G6', 'Sibyl', 'Pawel', true, NULL),
('utn-000014', '$2b$12$xC71Cmpdo.kfnMJjbJRDT.vFxPI.VOXH3TWl7EhvowjHcSkjbnGiu', 'Win', 'Zeal', true, NULL),
('utn-000015', '$2b$12$Nl3FmEHXnytj2MEjLPmsMe6K//bat1ecOqsM/H4B/ljtJzBPPHGky', 'Magdalen', 'Judkin', true, NULL),
('utn-000016', '$2b$12$pzA3eL2sbjQRWISYCP3JtO.xr53.umisggGGgydWVaOXHSzi46heq', 'Chan', 'Jellis', true, NULL),
('utn-000017', '$2b$12$IVhn0Ro32y2E3zJ/4gDnVObNzN3AL811lPo3MzU2dS5lZGTlMcsbS', 'Herb', 'Rex', true, NULL),
('utn-000018', '$2b$12$mHmrBRDWIU1lGBxAEIVpSuPyQNJJM4aqAMh55UrwIEmLUByryunvy', 'Tiffany', 'Verrell', true, NULL),
('utn-000019', '$2b$12$mV36qy7LvORDcIwB.n7uqut4OWjg97nK/qnyC4t31aP2bts5JPWoS', 'Ines', 'Tinson', true, NULL),
('utn-000020', '$2b$12$6Mk73kkv/sngTzpyxvsmee9CslngYtc6jZZCLimmKgue6Wg5iUVuq', 'Keen', 'Howitt', true, NULL),
('utn-000021', '$2b$12$2cUqa3fwc3tseMqFSzbvjev2vhjdnGaIkRE4IcoK.sE9xrBPPJkxy', 'Krystle', 'Lehrer', true, NULL),
('utn-000022', '$2b$12$B5kJYliNxBvZfJpNf9idaulbJgY10egBgaqu8eGo9UIE44pOLJivS', 'Abbey', 'Agett', true, NULL),
('utn-000023', '$2b$12$BsJ6o3KAeVaph41d8zYFO.JhNftzMlzlnRWhToODycqQW64aeHuWO', 'Pembroke', 'Alyonov', true, NULL),
('utn-000024', '$2b$12$hsiE4nVbY7W5POXF.mwpXeKrmxeW7FneZ3iPJprxIMRUCihIEcGLS', 'Gradeigh', 'Cestard', true, NULL),
('utn-000025', '$2b$12$al/LawmwBpYA25tfyEyc7uurc8cv7kbQBQlvEDlqYFBctqE4WTkm2', 'Fin', 'Revan', true, NULL),
('utn-000026', '$2b$12$d3DMive86LIPBzKPS1Yc3OQXUTs5npV2yIlyLHSIkfftiAPVRHLUK', 'Blanch', 'Beades', true, NULL),
('utn-000027', '$2b$12$LP9K589UCkaZahQTP5U0.OSwqGWcUgJfpeFxn0h2nd0xTwdPupM5K', 'Herve', 'Saynor', true, NULL),
('utn-000028', '$2b$12$8PqdxKUY4DbqhV0iNYVpUO7hqT79c2Q7FZMxB1lKcTFHTMzrdFlNS', 'Gaile', 'Chantler', true, NULL),
('utn-000029', '$2b$12$pYsuV0/ggysev6hg7YPka.4gOoMvXo.0vefwzFx9EhQOBg29xyfIC', 'Kessiah', 'Gaymer', true, NULL),
('utn-000030', '$2b$12$6wU8YK5h0RYXVlrnPEj0.ua6ibcYVnabslwp9v3n3eNML9VuJrJUy', 'Gordan', 'Gamble', true, NULL),
('utn-000031', '$2b$12$G.1swjupWVZuL7lSS4NyRuUQnIDqxvla.MTb1r/aDR42WGEDVUMMG', 'Neill', 'Gillard', true, NULL),
('utn-000032', '$2b$12$ligmZaEKz9BBwXDfA0Fvr.ysN46/9shFSrGE2OgT3KQFpdSS5ghfC', 'Clovis', 'Shankle', true, NULL),
('utn-000033', '$2b$12$5JYPQBToEgWRBs8WzPcs3u7NSJjIW1khXDPqeNTRnSantBF/agB1i', 'Alvira', 'Sympson', true, NULL),
('utn-000034', '$2b$12$VWmZ35rFlq0w9LV03dYnB.NzvYcGuBwD9ieNq06ucHnuH5p8hUyam', 'Lonni', 'Hugle', true, NULL),
('utn-000035', '$2b$12$gkhFQxbsHCPxL0I5HkgT3.WWtC/WylIMOUIT5b5fOfkmDlgm.vO6a', 'Ambrosius', 'Trenholm', true, NULL),
('utn-000036', '$2b$12$XWawH.u7ZbJ6O9sZXOluNuB9j9xRHWtbBo/wiJ1Y4QRqrzKe5qCZ2', 'Odella', 'Bhar', true, NULL),
('utn-000037', '$2b$12$xNe11N5eBEI3Y6Mbj0vBvuDa3DFOzCxPI9fANHOVgIl2T35uaQwSi', 'Hasheem', 'Hylands', true, NULL),
('utn-000038', '$2b$12$LLyh5U6CuhGaY/uEtBC/0ei.O9Yjd6YEr/rpmxr6jXfIheDaqqbzi', 'Nicoline', 'Harrhy', true, NULL),
('utn-000039', '$2b$12$Qv2rBXb0w6nFBxUJCQ.OLOlSIl9JyMe0F9whBB.rxTMVen5C.YVb.', 'Dmitri', 'Brimming', true, NULL),
('utn-000040', '$2b$12$/wRINqPrKE82oyDbYBBl..yyDKVrAbfuTMXaZBiSXTTb9e0mny1Oq', 'Poppy', 'Lehrer', true, NULL),
('utn-000041', '$2b$12$5UtfoPN.nXHoU8EzE1PQd.kC8C8CUa.L2W7wl7yXIXN.zcmVr4In2', 'Christabel', 'Zebedee', true, NULL),
('utn-000042', '$2b$12$nMktixNdUCq6LrJmU6I6s.yKaMupoiXZKEVKOxrZzZJtHOSDz8VGC', 'Orelia', 'Brass', true, NULL),
('utn-000043', '$2b$12$NX3bjAE31C9ywFqcCcyQ1uXZ4Tqz6EgMnD2u7C8w6k7aa.QLplGiO', 'Moore', 'Normanvell', true, NULL),
('utn-000044', '$2b$12$y4YdZhPxlc.yZHhfLzYHO.dhdAaxZfJYnH7Ya/40.h3RhPeE/1Zue', 'Simonette', 'Spratley', true, NULL),
('utn-000045', '$2b$12$7rBvwfaFN7hKNN13cA3AlufxaVhUqOzi82bn1ziHIHuV/ZmMFypTK', 'Devi', 'De Banke', true, NULL),
('utn-000046', '$2b$12$nrDGhSGYe20jGATrJ7sIq.sgdXH6CxUWwbMB.PApm.u2MCT8EvXjq', 'Sascha', 'Biswell', true, NULL),
('utn-000047', '$2b$12$Wu1EgPBeshvuAxBuEUzJCe2wMvXtD/b/wyBNda33Aqn2ln6YyVHxa', 'Rivkah', 'Grealish', true, NULL),
('utn-000048', '$2b$12$cGWPoz/XaD5FQh4ACam.KOqQeeOmixcQeakqArnGmM4iTEf.o0hlO', 'Hildegaard', 'Gossart', true, NULL),
('utn-000049', '$2b$12$RtlKn92P4mzP0iAIjF9iTO6hGswGWaqM/S.3sWDmMTVEShwoYlyWS', 'Shawn', 'Ferier', true, NULL),
('utn-000050', '$2b$12$fYO3Ezvje9.KfI4AneYkkucluHsURrITpT76t6h6dUHj.4GMrcbkm', 'Creight', 'Duigenan', true, NULL),
('utn-000051', '$2b$12$9yX8PyYqq2DtUnziQ1j0XeafPyxiAgYeZ0FTtHXIQVDGm/VFEbn6C', 'Chaunce', 'Sheddan', true, NULL),
('utn-000052', '$2b$12$cm.qUGIbX9lMCPjcYm7FzOR.Srzgn.PGTay3pbwbLfxcaonkKMCkC', 'Aloisia', 'Besset', true, NULL),
('utn-000053', '$2b$12$6zmlDqN.Z42y4Ahja3wd1e9cEjdmKhtv2boNHP6WvFraNe/kKb.NK', 'Celia', 'Chaundy', true, NULL),
('utn-000054', '$2b$12$hT1mAN9TFqxzBrkTrgjhIeDWMMzPSsBS4.SqPMTgjo3Y3HD8yzO/e', 'Lamont', 'Guiel', true, NULL),
('utn-000055', '$2b$12$szIhpIjSiXBGvfN0QONDYerQHJlpQBoP/Qdzhh0QZ7vFr4EHdeCTi', 'Maje', 'Bountiff', true, NULL),
('utn-000056', '$2b$12$ydoXicAENEgyu7PhOlflPeQIpJdxTLpu40vtIezRxgzsJL0myJtLW', 'Patric', 'Boner', true, NULL),
('utn-000057', '$2b$12$Jst97zt/eMtY331iwqrdpey3w8N8X6nn.XwW2wJDpNS6rEv/5BDwC', 'Vasili', 'Catling', true, NULL),
('utn-000058', '$2b$12$EJcthWh7knJOuYjLK/BDGOgleXQQpGo.tDIkAKnIBbm8.joTCZC5O', 'Caria', 'Barkhouse', true, NULL),
('utn-000059', '$2b$12$HLzElP6bMod7KOYwW/d2qeP5/b6vdUCLe5kS81Mk3MmBnMSsu15me', 'Leda', 'Lansbury', true, NULL),
('utn-000060', '$2b$12$Ia2Y5yTLXc./GDYdV2mUYORDf.LZb4veS0xNuXkto1I8LxHRK/WAe', 'Bendicty', 'Guiver', true, NULL),
('utn-000061', '$2b$12$kESlfEM/QmKb.YRPv84lvOTVwQAZRv4/3Siy4WGSRu6cU/45GCV0O', 'Stuart', 'Mugleston', true, NULL),
('utn-000062', '$2b$12$1OaXdD0Th00/72NS8mCJ2uT0xOcl8g91.KtJP012Vmykw.vrUulde', 'Babbie', 'Giuroni', true, NULL),
('utn-000063', '$2b$12$nc5xKQZ0LtE7BFsRkmlCPuhiE0zmSY4XEd0POZJQ7GOpeq1vbPwXe', 'Joella', 'MacGahey', true, NULL),
('utn-000064', '$2b$12$D0mY2Dhbc/MT.ffoSKtsou93XmY6tH1KSuohT49b3KZB7bKwZsKma', 'Justinian', 'Pina', true, NULL),
('utn-000065', '$2b$12$8r6AXr7af3ih4fr4ZRIOOuUHOUiJxpNTsH3cPKrg/9NWU2t0U7StK', 'Chaddy', 'Watkins', true, NULL),
('utn-000066', '$2b$12$.wVNiAGQfaenSG1neJSTm.9rmTwxu95tnmhzszyrWydD6wEZZlvX2', 'Maurits', 'Tiplady', true, NULL),
('utn-000067', '$2b$12$eTPnQF2e1zcufb9GkqSB3.6ie9Wz2.czfAm2QMU.Og2rib6d5IAXC', 'Beverly', 'Forsdicke', true, NULL),
('utn-000068', '$2b$12$TqRerLA0wB/444J9W6eZuOE9l3NDpt/fOHaMaRadgJu4TMLmO13Ay', 'Evita', 'Petrolli', true, NULL),
('utn-000069', '$2b$12$XnoHzf6ujKWVjTLy.fniPeeTQTBsTCGI6/CuDBEaao64WW2b5C8pm', 'Willard', 'Medina', true, NULL),
('utn-000070', '$2b$12$xL/apA2zp1KEIXYltmjAZOybuUV42Rfe1DJiu.PwihSmaiUrS1Nga', 'Rog', 'Sebring', true, NULL),
('utn-000071', '$2b$12$xdIq2KJwP/2v4blhy2Nm/O3GO2X.7lDAz32g4H.Y6EHYep9a9p1iu', 'Maxine', 'Fibbitts', true, NULL),
('utn-000072', '$2b$12$RyDpxW0Zfunu3BMESbMf5ehxMJCLQvOoEvo9bVBNWjG36mUkYa2Yu', 'Peria', 'Marson', true, NULL),
('utn-000073', '$2b$12$XXq5x4zwPuPBrgqdVu71v.7TrITp32PdlDuxaND8ekcWRvvthrA1W', 'Jania', 'Threader', true, NULL),
('utn-000074', '$2b$12$GzI0jQMABNRlKnEVHAc98.OEL8P1Bjdt2WPen7dreqNnh9.Jyzl9C', 'Mame', 'Kabsch', true, NULL),
('utn-000075', '$2b$12$osScE1v9l52vqgGNdKeQneAW9LzkOXKl7Qh5Tusp9bXBpgHxH2kxC', 'Ettore', 'Guarin', true, NULL),
('utn-000076', '$2b$12$Rcjm/fiyHG53vsvM02T8seTN6XQrfOW5LbKOTLPiwoMUb/6y363Iy', 'Ethelind', 'Blint', true, NULL),
('utn-000077', '$2b$12$ptaVmwVYbGe9Q9v1ZMM6m.448EU0/5yIrTf7UObYNALgobC6.hmm.', 'Ruy', 'Van Daalen', true, NULL),
('utn-000078', '$2b$12$6boitn6VSGqwU7NUmITJze7jpZVpTECWbYenivvPfn7HleLTKoaCO', 'Delaney', 'Keary', true, NULL),
('utn-000079', '$2b$12$V9s92hjQzXKBpXsskT4PE.tncYJOf8Yb4V4PJbey3v7W5kNme8TX2', 'Morlee', 'Locarno', true, NULL),
('utn-000080', '$2b$12$w5gZxDv5ZKX2/XMK5bSL4.CmAOQQMTS8lM3coEJYAp4W1aFs3zwGS', 'Carine', 'Grieves', true, NULL),
('utn-000081', '$2b$12$38GitiumOP0LZgZtCis2lePytlcOvH537T3CZtrB7hcCuTjMcizmm', 'Edgar', 'Wholesworth', true, NULL),
('utn-000082', '$2b$12$f.FRSNRQyrNBlVlurSyfr.zTJv/8Y5sANFdjF1kp.AJFvT0YwB9e2', 'Bobbee', 'Varrow', true, NULL),
('utn-000083', '$2b$12$naM/hz/n3uoQv40zgaEtD.5t4Az5U9gI0UBFhj7dblqW76740wSiK', 'Alix', 'St. Clair', true, NULL),
('utn-000084', '$2b$12$NS8.HyrHL3AkCjmerum1CuEdCXWJnZyVWGpUDaj6CMqu96smfVbcq', 'Kendall', 'Baccup', true, NULL),
('utn-000085', '$2b$12$CWPML2djn0DVpMqrLD9mp.y4DxHwE8u09ZHsp5MGTmB1ygBnzTqMS', 'Keri', 'Anniwell', true, NULL),
('utn-000086', '$2b$12$OXVT6nnH4Hli2lvDaReFeuxzdiZscBNiAw5mxZ5W5pNQ9Yy7MC9iW', 'Dorry', 'Guerin', true, NULL),
('utn-000087', '$2b$12$FpIUwMKYj/5O1nZle1tPg.wnepuhe/Tq4tsiGr.yaD94X9UFg7kom', 'Norine', 'Brownill', true, NULL),
('utn-000088', '$2b$12$Cr7FCEEfugRM7VUKPD/csuR/sBFB7craquhQ35xKIHn7CrOSfYEoS', 'Florry', 'Caustick', true, NULL),
('utn-000089', '$2b$12$fYS7v0yMZp3/JxuJLI9Imei33nj8Q..yLh9DCK3lRYkUAyBy9b03m', 'Laure', 'Wiseman', true, NULL),
('utn-000090', '$2b$12$F3S/8gsPh23Of2NNTbr7d.6BWJohY1w0f8tApmSHrwpG/8FUHZW6m', 'Aloysius', 'Wannell', true, NULL),
('utn-000091', '$2b$12$U9Gq3lAMkgUUrQqq.sV0FefN0vfKASqaPZqdjS8599Pwo9ThNDwYG', 'Lovell', 'Bailiss', true, NULL),
('utn-000092', '$2b$12$0.5nd0vSew1k615ahqKvvO.Dx32G/t6Fh5L2Oo9z/lFMwf28ASlCO', 'Rhodie', 'Gellett', true, NULL),
('utn-000093', '$2b$12$iKiZn57mO.6yXLBLj/b2eOCMETbmi0Bns22f8R0n5r7nigxMzu0qG', 'Waylon', 'Prangle', true, NULL),
('utn-000094', '$2b$12$.rC6XZjeH1uwDlJzDAEHbeH73DQphMsGWgW/lShmoxphAOAMrMq/u', 'Saudra', 'Hawe', true, NULL),
('utn-000095', '$2b$12$UvPT7aZ7uAM/B1Cf0rvmoO2y8NpfbdwqX4eHw8u8MUcprEblP1Xay', 'Eloise', 'Layton', true, NULL),
('utn-000096', '$2b$12$RuTp3lZbKUaYUzVlbvPTQ.7sOi5as8zQMITYlO9Ww8qsGRyf77bim', 'Katrina', 'McGloughlin', true, NULL),
('utn-000097', '$2b$12$HSGpBzI46455ltviTC.5Pulh2I0TSahFknQunQwIvkpX0vWpE5Kii', 'Job', 'Scholtis', true, NULL),
('utn-000098', '$2b$12$xrUk/E7/HlKIDJD.UtphIeFzf28No21rpYLzqu7lpLR54v1vUoMfu', 'Hailee', 'Chagg', true, NULL),
('utn-000099', '$2b$12$45EPVt6vLju6.wtKEqYAMe6Uu9SyPLLlXfIMSt2L6bsjRArh7bqRO', 'Peggie', 'Sotheby', true, NULL),
('utn-000100', '$2b$12$Oau/dDQx795Bskvvy7Rwo.IJeMCB5UuA2tRhG/u9c6unY6ZMXhoYW', 'Luis', 'Martinez', true, NULL);

--      ID        CONTRASENIA
-- {'utn-000001', '$2b$12$Fpw6E5wSVyLIku251oJ1mu28bZshNhAQNHTTf.Qx7qNHLvXULu5wW'}
-- {'utn-000002', '$2b$12$u.TRcD8gMfKw9g.Dmxq6SOXDaQNnrcbOdVo7co0uguviRl7fJvLnm'}
-- {'utn-000003', '$2b$12$JWmWrthNmXwycdiZtMpbze0yqwffWqc8Reo/zFfrQO6NUwaofkP5K'}
-- {'utn-000004', '$2b$12$SGik5wT0SbivK97IBDg/HOgAw0gZwj5nF8c59dh2kO8co5MRFcEDu'}
-- {'utn-000005', '$2b$12$vW0H2jBCjRs6vgw4rJFvGeB4E5uXZmucSSuual2xg2/wQKOQ8B/jK'}
-- {'utn-000006', '$2b$12$RaiVWm40gIKMRXZYL38VleVJCps2BXc0vykhYzSZAfSv6FaKuaLP.'}
-- {'utn-000007', '$2b$12$iOpvQS8S1EQbzvaTz.zQuObJT7vatzeDStbxotOHYafv2jxUsBbsi'}
-- {'utn-000008', '$2b$12$NZzQR3oO7hEWsmpxOfMFHuP8To/NRYOdfGTaYaFUiLwibZVvcxDY.'}
-- {'utn-000009', '$2b$12$D5xnA3//JZe2mMpju0CkWeE4.33iqoXKkBxbl4zHnYg/F.Kvn73ya'}
-- {'utn-000010', '$2b$12$fFEelMVzd7JEmmPsbU3aSOHwn09CjbenkdyK8ngB6ea1FDxqoYzny'}
-- {'utn-000011', '$2b$12$M9WMMp2/YJmn479EPWBBiOPF5ygatCQ3cPsqFFZkH3tg2Lu82yEiG'}
-- {'utn-000012', '$2b$12$UVCVzQqsZQWaNSVmkEl7uenvTQQHjYneZsuid4eK2/bZzmY.r34CG'}
-- {'utn-000013', '$2b$12$mP1B71Fq/UWkrSa8g2iQKuqzQniQ0i9DjphNlYv33PmA2zsrS32G6'}
-- {'utn-000014', '$2b$12$xC71Cmpdo.kfnMJjbJRDT.vFxPI.VOXH3TWl7EhvowjHcSkjbnGiu'}
-- {'utn-000015', '$2b$12$Nl3FmEHXnytj2MEjLPmsMe6K//bat1ecOqsM/H4B/ljtJzBPPHGky'}
-- {'utn-000016', '$2b$12$pzA3eL2sbjQRWISYCP3JtO.xr53.umisggGGgydWVaOXHSzi46heq'}
-- {'utn-000017', '$2b$12$IVhn0Ro32y2E3zJ/4gDnVObNzN3AL811lPo3MzU2dS5lZGTlMcsbS'}
-- {'utn-000018', '$2b$12$mHmrBRDWIU1lGBxAEIVpSuPyQNJJM4aqAMh55UrwIEmLUByryunvy'}
-- {'utn-000019', '$2b$12$mV36qy7LvORDcIwB.n7uqut4OWjg97nK/qnyC4t31aP2bts5JPWoS'}
-- {'utn-000020', '$2b$12$6Mk73kkv/sngTzpyxvsmee9CslngYtc6jZZCLimmKgue6Wg5iUVuq'}
-- {'utn-000021', '$2b$12$2cUqa3fwc3tseMqFSzbvjev2vhjdnGaIkRE4IcoK.sE9xrBPPJkxy'}
-- {'utn-000022', '$2b$12$B5kJYliNxBvZfJpNf9idaulbJgY10egBgaqu8eGo9UIE44pOLJivS'}
-- {'utn-000023', '$2b$12$BsJ6o3KAeVaph41d8zYFO.JhNftzMlzlnRWhToODycqQW64aeHuWO'}
-- {'utn-000024', '$2b$12$hsiE4nVbY7W5POXF.mwpXeKrmxeW7FneZ3iPJprxIMRUCihIEcGLS'}
-- {'utn-000025', '$2b$12$al/LawmwBpYA25tfyEyc7uurc8cv7kbQBQlvEDlqYFBctqE4WTkm2'}
-- {'utn-000026', '$2b$12$d3DMive86LIPBzKPS1Yc3OQXUTs5npV2yIlyLHSIkfftiAPVRHLUK'}
-- {'utn-000027', '$2b$12$LP9K589UCkaZahQTP5U0.OSwqGWcUgJfpeFxn0h2nd0xTwdPupM5K'}
-- {'utn-000028', '$2b$12$8PqdxKUY4DbqhV0iNYVpUO7hqT79c2Q7FZMxB1lKcTFHTMzrdFlNS'}
-- {'utn-000029', '$2b$12$pYsuV0/ggysev6hg7YPka.4gOoMvXo.0vefwzFx9EhQOBg29xyfIC'}
-- {'utn-000030', '$2b$12$6wU8YK5h0RYXVlrnPEj0.ua6ibcYVnabslwp9v3n3eNML9VuJrJUy'}
-- {'utn-000031', '$2b$12$G.1swjupWVZuL7lSS4NyRuUQnIDqxvla.MTb1r/aDR42WGEDVUMMG'}
-- {'utn-000032', '$2b$12$ligmZaEKz9BBwXDfA0Fvr.ysN46/9shFSrGE2OgT3KQFpdSS5ghfC'}
-- {'utn-000033', '$2b$12$5JYPQBToEgWRBs8WzPcs3u7NSJjIW1khXDPqeNTRnSantBF/agB1i'}
-- {'utn-000034', '$2b$12$VWmZ35rFlq0w9LV03dYnB.NzvYcGuBwD9ieNq06ucHnuH5p8hUyam'}
-- {'utn-000035', '$2b$12$gkhFQxbsHCPxL0I5HkgT3.WWtC/WylIMOUIT5b5fOfkmDlgm.vO6a'}
-- {'utn-000036', '$2b$12$XWawH.u7ZbJ6O9sZXOluNuB9j9xRHWtbBo/wiJ1Y4QRqrzKe5qCZ2'}
-- {'utn-000037', '$2b$12$xNe11N5eBEI3Y6Mbj0vBvuDa3DFOzCxPI9fANHOVgIl2T35uaQwSi'}
-- {'utn-000038', '$2b$12$LLyh5U6CuhGaY/uEtBC/0ei.O9Yjd6YEr/rpmxr6jXfIheDaqqbzi'}
-- {'utn-000039', '$2b$12$Qv2rBXb0w6nFBxUJCQ.OLOlSIl9JyMe0F9whBB.rxTMVen5C.YVb.'}
-- {'utn-000040', '$2b$12$/wRINqPrKE82oyDbYBBl..yyDKVrAbfuTMXaZBiSXTTb9e0mny1Oq'}
-- {'utn-000041', '$2b$12$5UtfoPN.nXHoU8EzE1PQd.kC8C8CUa.L2W7wl7yXIXN.zcmVr4In2'}
-- {'utn-000042', '$2b$12$nMktixNdUCq6LrJmU6I6s.yKaMupoiXZKEVKOxrZzZJtHOSDz8VGC'}
-- {'utn-000043', '$2b$12$NX3bjAE31C9ywFqcCcyQ1uXZ4Tqz6EgMnD2u7C8w6k7aa.QLplGiO'}
-- {'utn-000044', '$2b$12$y4YdZhPxlc.yZHhfLzYHO.dhdAaxZfJYnH7Ya/40.h3RhPeE/1Zue'}
-- {'utn-000045', '$2b$12$7rBvwfaFN7hKNN13cA3AlufxaVhUqOzi82bn1ziHIHuV/ZmMFypTK'}
-- {'utn-000046', '$2b$12$nrDGhSGYe20jGATrJ7sIq.sgdXH6CxUWwbMB.PApm.u2MCT8EvXjq'}
-- {'utn-000047', '$2b$12$Wu1EgPBeshvuAxBuEUzJCe2wMvXtD/b/wyBNda33Aqn2ln6YyVHxa'}
-- {'utn-000048', '$2b$12$cGWPoz/XaD5FQh4ACam.KOqQeeOmixcQeakqArnGmM4iTEf.o0hlO'}
-- {'utn-000049', '$2b$12$RtlKn92P4mzP0iAIjF9iTO6hGswGWaqM/S.3sWDmMTVEShwoYlyWS'}
-- {'utn-000050', '$2b$12$fYO3Ezvje9.KfI4AneYkkucluHsURrITpT76t6h6dUHj.4GMrcbkm'}
-- {'utn-000051', '$2b$12$9yX8PyYqq2DtUnziQ1j0XeafPyxiAgYeZ0FTtHXIQVDGm/VFEbn6C'}
-- {'utn-000052', '$2b$12$cm.qUGIbX9lMCPjcYm7FzOR.Srzgn.PGTay3pbwbLfxcaonkKMCkC'}
-- {'utn-000053', '$2b$12$6zmlDqN.Z42y4Ahja3wd1e9cEjdmKhtv2boNHP6WvFraNe/kKb.NK'}
-- {'utn-000054', '$2b$12$hT1mAN9TFqxzBrkTrgjhIeDWMMzPSsBS4.SqPMTgjo3Y3HD8yzO/e'}
-- {'utn-000055', '$2b$12$szIhpIjSiXBGvfN0QONDYerQHJlpQBoP/Qdzhh0QZ7vFr4EHdeCTi'}
-- {'utn-000056', '$2b$12$ydoXicAENEgyu7PhOlflPeQIpJdxTLpu40vtIezRxgzsJL0myJtLW'}
-- {'utn-000057', '$2b$12$Jst97zt/eMtY331iwqrdpey3w8N8X6nn.XwW2wJDpNS6rEv/5BDwC'}
-- {'utn-000058', '$2b$12$EJcthWh7knJOuYjLK/BDGOgleXQQpGo.tDIkAKnIBbm8.joTCZC5O'}
-- {'utn-000059', '$2b$12$HLzElP6bMod7KOYwW/d2qeP5/b6vdUCLe5kS81Mk3MmBnMSsu15me'}
-- {'utn-000060', '$2b$12$Ia2Y5yTLXc./GDYdV2mUYORDf.LZb4veS0xNuXkto1I8LxHRK/WAe'}
-- {'utn-000061', '$2b$12$kESlfEM/QmKb.YRPv84lvOTVwQAZRv4/3Siy4WGSRu6cU/45GCV0O'}
-- {'utn-000062', '$2b$12$1OaXdD0Th00/72NS8mCJ2uT0xOcl8g91.KtJP012Vmykw.vrUulde'}
-- {'utn-000063', '$2b$12$nc5xKQZ0LtE7BFsRkmlCPuhiE0zmSY4XEd0POZJQ7GOpeq1vbPwXe'}
-- {'utn-000064', '$2b$12$D0mY2Dhbc/MT.ffoSKtsou93XmY6tH1KSuohT49b3KZB7bKwZsKma'}
-- {'utn-000065', '$2b$12$8r6AXr7af3ih4fr4ZRIOOuUHOUiJxpNTsH3cPKrg/9NWU2t0U7StK'}
-- {'utn-000066', '$2b$12$.wVNiAGQfaenSG1neJSTm.9rmTwxu95tnmhzszyrWydD6wEZZlvX2'}
-- {'utn-000067', '$2b$12$eTPnQF2e1zcufb9GkqSB3.6ie9Wz2.czfAm2QMU.Og2rib6d5IAXC'}
-- {'utn-000068', '$2b$12$TqRerLA0wB/444J9W6eZuOE9l3NDpt/fOHaMaRadgJu4TMLmO13Ay'}
-- {'utn-000069', '$2b$12$XnoHzf6ujKWVjTLy.fniPeeTQTBsTCGI6/CuDBEaao64WW2b5C8pm'}
-- {'utn-000070', '$2b$12$xL/apA2zp1KEIXYltmjAZOybuUV42Rfe1DJiu.PwihSmaiUrS1Nga'}
-- {'utn-000071', '$2b$12$xdIq2KJwP/2v4blhy2Nm/O3GO2X.7lDAz32g4H.Y6EHYep9a9p1iu'}
-- {'utn-000072', '$2b$12$RyDpxW0Zfunu3BMESbMf5ehxMJCLQvOoEvo9bVBNWjG36mUkYa2Yu'}
-- {'utn-000073', '$2b$12$XXq5x4zwPuPBrgqdVu71v.7TrITp32PdlDuxaND8ekcWRvvthrA1W'}
-- {'utn-000074', '$2b$12$GzI0jQMABNRlKnEVHAc98.OEL8P1Bjdt2WPen7dreqNnh9.Jyzl9C'}
-- {'utn-000075', '$2b$12$osScE1v9l52vqgGNdKeQneAW9LzkOXKl7Qh5Tusp9bXBpgHxH2kxC'}
-- {'utn-000076', '$2b$12$Rcjm/fiyHG53vsvM02T8seTN6XQrfOW5LbKOTLPiwoMUb/6y363Iy'}
-- {'utn-000077', '$2b$12$ptaVmwVYbGe9Q9v1ZMM6m.448EU0/5yIrTf7UObYNALgobC6.hmm.'}
-- {'utn-000078', '$2b$12$6boitn6VSGqwU7NUmITJze7jpZVpTECWbYenivvPfn7HleLTKoaCO'}
-- {'utn-000079', '$2b$12$V9s92hjQzXKBpXsskT4PE.tncYJOf8Yb4V4PJbey3v7W5kNme8TX2'}
-- {'utn-000080', '$2b$12$w5gZxDv5ZKX2/XMK5bSL4.CmAOQQMTS8lM3coEJYAp4W1aFs3zwGS'}
-- {'utn-000081', '$2b$12$38GitiumOP0LZgZtCis2lePytlcOvH537T3CZtrB7hcCuTjMcizmm'}
-- {'utn-000082', '$2b$12$f.FRSNRQyrNBlVlurSyfr.zTJv/8Y5sANFdjF1kp.AJFvT0YwB9e2'}
-- {'utn-000083', '$2b$12$naM/hz/n3uoQv40zgaEtD.5t4Az5U9gI0UBFhj7dblqW76740wSiK'}
-- {'utn-000084', '$2b$12$NS8.HyrHL3AkCjmerum1CuEdCXWJnZyVWGpUDaj6CMqu96smfVbcq'}
-- {'utn-000085', '$2b$12$CWPML2djn0DVpMqrLD9mp.y4DxHwE8u09ZHsp5MGTmB1ygBnzTqMS'}
-- {'utn-000086', '$2b$12$OXVT6nnH4Hli2lvDaReFeuxzdiZscBNiAw5mxZ5W5pNQ9Yy7MC9iW'}
-- {'utn-000087', '$2b$12$FpIUwMKYj/5O1nZle1tPg.wnepuhe/Tq4tsiGr.yaD94X9UFg7kom'}
-- {'utn-000088', '$2b$12$Cr7FCEEfugRM7VUKPD/csuR/sBFB7craquhQ35xKIHn7CrOSfYEoS'}
-- {'utn-000089', '$2b$12$fYS7v0yMZp3/JxuJLI9Imei33nj8Q..yLh9DCK3lRYkUAyBy9b03m'}
-- {'utn-000090', '$2b$12$F3S/8gsPh23Of2NNTbr7d.6BWJohY1w0f8tApmSHrwpG/8FUHZW6m'}
-- {'utn-000091', '$2b$12$U9Gq3lAMkgUUrQqq.sV0FefN0vfKASqaPZqdjS8599Pwo9ThNDwYG'}
-- {'utn-000092', '$2b$12$0.5nd0vSew1k615ahqKvvO.Dx32G/t6Fh5L2Oo9z/lFMwf28ASlCO'}
-- {'utn-000093', '$2b$12$iKiZn57mO.6yXLBLj/b2eOCMETbmi0Bns22f8R0n5r7nigxMzu0qG'}
-- {'utn-000094', '$2b$12$.rC6XZjeH1uwDlJzDAEHbeH73DQphMsGWgW/lShmoxphAOAMrMq/u'}
-- {'utn-000095', '$2b$12$UvPT7aZ7uAM/B1Cf0rvmoO2y8NpfbdwqX4eHw8u8MUcprEblP1Xay'}
-- {'utn-000096', '$2b$12$RuTp3lZbKUaYUzVlbvPTQ.7sOi5as8zQMITYlO9Ww8qsGRyf77bim'}
-- {'utn-000097', '$2b$12$HSGpBzI46455ltviTC.5Pulh2I0TSahFknQunQwIvkpX0vWpE5Kii'}
-- {'utn-000098', '$2b$12$xrUk/E7/HlKIDJD.UtphIeFzf28No21rpYLzqu7lpLR54v1vUoMfu'}
-- {'utn-000099', '$2b$12$45EPVt6vLju6.wtKEqYAMe6Uu9SyPLLlXfIMSt2L6bsjRArh7bqRO'}
-- {'utn-000100', '$2b$12$Oau/dDQx795Bskvvy7Rwo.IJeMCB5UuA2tRhG/u9c6unY6ZMXhoYW'}


INSERT INTO public."Administrador" (id_usuario) VALUES
('utn-000001'),
('utn-000002'),
('utn-000003'),
('utn-000004'),
('utn-000005');


INSERT INTO public."Bedel" (id_usuario, turno) VALUES
('utn-000006', 'Maniana'),
('utn-000007', 'Tarde'),
('utn-000008', 'Noche'),
('utn-000009', 'Maniana'),
('utn-000010', 'Tarde'),
('utn-000011', 'Noche'),
('utn-000012', 'Maniana'),
('utn-000013', 'Tarde'),
('utn-000014', 'Noche'),
('utn-000015', 'Maniana'),
('utn-000016', 'Tarde'),
('utn-000017', 'Tarde'),
('utn-000018', 'Tarde'),
('utn-000019', 'Tarde'),
('utn-000020', 'Tarde'),
('utn-000021', 'Tarde'),
('utn-000022', 'Tarde'),
('utn-000024', 'Tarde'),
('utn-000025', 'Tarde'),
('utn-000027', 'Tarde'),
('utn-000028', 'Maniana'),
('utn-000029', 'Maniana'),
('utn-000030', 'Maniana'),
('utn-000031', 'Maniana'),
('utn-000032', 'Maniana'),
('utn-000033', 'Maniana'),
('utn-000034', 'Maniana'),
('utn-000035', 'Maniana'),
('utn-000036', 'Maniana'),
('utn-000037', 'Tarde'),
('utn-000038', 'Tarde'),
('utn-000039', 'Tarde'),
('utn-000040', 'Tarde'),
('utn-000041', 'Tarde'),
('utn-000042', 'Tarde'),
('utn-000043', 'Tarde'),
('utn-000044', 'Tarde'),
('utn-000045', 'Tarde'),
('utn-000046', 'Tarde'),
('utn-000047', 'Tarde'),
('utn-000048', 'Tarde'),
('utn-000049', 'Tarde'),
('utn-000050', 'Maniana'),
('utn-000051', 'Maniana'),
('utn-000052', 'Maniana'),
('utn-000053', 'Maniana'),
('utn-000054', 'Maniana'),
('utn-000055', 'Maniana'),
('utn-000056', 'Maniana'),
('utn-000057', 'Maniana'),
('utn-000058', 'Noche'),
('utn-000059', 'Noche'),
('utn-000060', 'Noche'),
('utn-000061', 'Noche'),
('utn-000062', 'Noche'),
('utn-000063', 'Noche'),
('utn-000064', 'Noche'),
('utn-000065', 'Noche'),
('utn-000066', 'Noche'),
('utn-000067', 'Noche'),
('utn-000068', 'Noche'),
('utn-000069', 'Noche'),
('utn-000070', 'Noche'),
('utn-000071', 'Noche'),
('utn-000072', 'Noche'),
('utn-000073', 'Noche'),
('utn-000074', 'Noche'),
('utn-000075', 'Noche'),
('utn-000076', 'Noche'),
('utn-000077', 'Noche'),
('utn-000078', 'Noche'),
('utn-000079', 'Noche'),
('utn-000080', 'Noche'),
('utn-000081', 'Noche'),
('utn-000082', 'Noche'),
('utn-000083', 'Noche'),
('utn-000084', 'Noche'),
('utn-000085', 'Maniana'),
('utn-000086', 'Maniana'),
('utn-000087', 'Maniana'),
('utn-000088', 'Maniana'),
('utn-000089', 'Maniana'),
('utn-000090', 'Maniana'),
('utn-000091', 'Maniana'),
('utn-000092', 'Maniana'),
('utn-000093', 'Maniana'),
('utn-000094', 'Maniana'),
('utn-000095', 'Maniana'),
('utn-000096', 'Maniana'),
('utn-000097', 'Tarde'),
('utn-000098', 'Noche'),
('utn-000099', 'Maniana'),
('utn-000100', 'Tarde');

-- ================================================================================

INSERT INTO public."Aula" (nro_aula, capacidad, piso, aire_acondicionado, estado_aula, activo, fecha_baja) VALUES
('Laboratorio 1', 40, 'Tercer Piso', true, 'Habilitado', true, NULL),
('Laboratorio 2', 35, 'Tercer Piso', true, 'Habilitado', true, NULL),
('Laboratorio 3', 40, 'Tercer Piso', true, 'Habilitado', true, NULL),
('Laboratorio 4', 30, 'Segundo Piso', true, 'Habilitado', true, NULL),
('Laboratorio 5', 35, 'Tercer Piso', true, 'Habilitado', true, NULL),
('Laboratorio 6', 35, 'Tercer Piso', true, 'Habilitado', true, NULL),
('Laboratorio 7', 35, 'Segundo Piso', true, 'Habilitado', true, NULL),
('Laboratorio 8', 35, 'Tercer Piso', true, 'Habilitado', true, NULL),
('Laboratorio 9', 35, 'Tercer Piso', true, 'Habilitado', true, NULL),
('Laboratorio 10', 35, 'Tercer Piso', true, 'Habilitado', true, NULL),
('Aula Multimedios 1', 50, 'Segundo Piso', true, 'Habilitado', true, NULL),
('Aula Multimedios 2', 50, 'Primer Piso', true, 'Habilitado', true, NULL),
('Aula Multimedios 3', 50, 'Primer Piso', true, 'Habilitado', true, NULL),
('Aula Multimedios 4', 50, 'Segundo Piso', true, 'Habilitado', true, NULL),
('Aula Multimedios 5', 50, 'Primer Piso', true, 'Habilitado', true, NULL),
('Aula Multimedios 6', 50, 'Primer Piso', true, 'Habilitado', true, NULL),
('Aula Multimedios 7', 50, 'Segundo Piso', true, 'Habilitado', true, NULL),
('Aula Multimedios 8', 50, 'Primer Piso', true, 'Habilitado', true, NULL),
('Aula Multimedios 9', 50, 'Primer Piso', true, 'Habilitado', true, NULL),
('Aula Multimedios 10', 50, 'Primer Piso', true, 'Habilitado', true, NULL),
('Aula 17', 60, 'Primer Piso', true, 'Habilitado', true, NULL),
('Aula 18', 60, 'Segundo Piso', true, 'Habilitado', true, NULL),
('Aula 19', 60, 'Primer Piso', true, 'Habilitado', true, NULL),
('Aula 20', 60, 'Primer Piso', true, 'Habilitado', true, NULL),
('Aula 21', 60, 'Segundo Piso', true, 'Habilitado', true, NULL),
('Aula 22', 60, 'Primer Piso', true, 'Habilitado', true, NULL),
('Aula 23', 60, 'Segundo Piso', true, 'Habilitado', true, NULL),
('Aula 24', 60, 'Primer Piso', true, 'Habilitado', true, NULL),
('Aula 25', 60, 'Segundo Piso', true, 'Habilitado', true, NULL),
('Museo de Materiales', 60, 'Primer Piso', false, 'Habilitado', true, NULL);

INSERT INTO public."AulaInformatica" (nro_aula, "cant_PCs", canion) VALUES
('Laboratorio 1', 20, true),
('Laboratorio 2', 25, false),
('Laboratorio 3', 20, false),
('Laboratorio 4', 25, true),
('Laboratorio 5', 25, false),
('Laboratorio 6', 25, true),
('Laboratorio 7', 25, false),
('Laboratorio 8', 25, true),
('Laboratorio 9', 25, false),
('Laboratorio 10', 25, true);

INSERT INTO public."AulaMultimedio" (nro_aula, televisor, canion, ventilador, computadora) VALUES
('Aula Multimedios 1', true, true, true, false),
('Aula Multimedios 2', true, true, true, true),
('Aula Multimedios 3', true, true, true, false),
('Aula Multimedios 4', true, true, true, true),
('Aula Multimedios 5', true, true, true, false),
('Aula Multimedios 6', true, true, true, true),
('Aula Multimedios 7', true, true, true, false),
('Aula Multimedios 8', true, true, true, true),
('Aula Multimedios 9', true, true, true, false),
('Aula Multimedios 10', true, true, true, true);

INSERT INTO public."AulaSinRecursosAdicionales" (nro_aula, ventilador) VALUES
('Aula 17', false),
('Aula 18', false),
('Aula 19', true),
('Aula 20', true),
('Aula 21', true),
('Aula 22', true),
('Aula 23', true),
('Aula 24', true),
('Aula 25', true),
('Museo de Materiales', false);