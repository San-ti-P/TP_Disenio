TRUNCATE public."Usuario", public."Bedel", public."Administrador" CASCADE;

INSERT INTO public."Usuario" (id_usuario, contrasenia, nombre, apellido, activo, fecha_baja) VALUES 
('utn-000000', '$2b$12$AGJJjVaYiowu/07AGLEVtOaxijElrlKC0JWnxzPmARm8t.1qB.1Uu', 'Marcos', 'Debona', true, NULL),
('utn-000001', '$2b$12$.lnzsK8emAnoLZtx6ORh/Omvx71ZHkfaxnTKXC7.1dX3sKdej9PgW', 'Gonzalo', 'Gaitan', true, NULL),
('utn-111111', '$2b$12$J89rWnokcsCohybni/dIfuGUy3OHaNsktdusWvxSeAvfdCfwA2Dea', 'Gustavo', 'Flores', true, NULL),
('utn-222222', '$2b$12$HCCSuOju9LUd4.aJKeiNbOPqTDawl2n12VKheJgtPATYyoWDkkfS2', 'Ramiro', 'Arrizabalaga', true, NULL),
('utn-333333', '$2b$12$MAW/vQIItlUlNIRwdWRU3uXvM0eTnp9fFGUxXhvZKK0YEmBfbu1Eq', 'Laura', 'Cristante', true, NULL),
('utn-444444', '$2b$12$7zai9wdKrBBPQ1.3wQ2IUOIeU9x6bj5Uhl4ZBc0k7KQ/4cJEyQ4cC', 'Carlos', 'Sosa', true, NULL),
('utn-555555', '$2b$12$fAGHnAjT9IxX2oHC398QdOspH4KsdLDg1LQmHv0edeuwZ3NmWn4ou', 'Darío', 'Carvajal', true, NULL),
('utn-666666', '$2b$12$HbhyA5LQEU.igQ7ZSH2pberIo1EmtC8rOz0vzQN6P5uR28bAJKy6m', 'Ana', 'Martinez', true, NULL),
('utn-777777', '$2b$12$18dG/3V5XajSyEQR8lpfIuOsixMgShILKvHjOlP02mUrmE7aJW0R.', 'Pedro', 'Gomez', true, NULL),
('utn-888888', '$2b$12$7V2IhGvQS.SIH9aBQWZW7exv7Ur3AQcpWRilIhZykxfZczq14cGwO', 'Lucia', 'Perez', true, NULL),
('utn-999999', '$2b$12$seQm4nUM2KkUYcopuSiQvOP8dHaMh8QGp/r8agiM5qD1tOwzxxjbK', 'Juan', 'Lopez', true, NULL),
('utn-101010', '$2b$12$QObdc0hk7iazkzsfzJzEZ.WF3WtNI4VfYNr.s8lvro947wPCjsStK', 'Sofia', 'Garcia', true, NULL);


INSERT INTO public."Administrador" (id_usuario) VALUES 
('utn-000000'),
('utn-000001');

INSERT INTO public."Bedel" (id_usuario, turno) VALUES 
('utn-111111', 'Maniana'),
('utn-222222', 'Tarde'),
('utn-333333', 'Noche'),
('utn-444444', 'Maniana'),
('utn-555555', 'Tarde'),
('utn-666666', 'Noche'),
('utn-777777', 'Maniana'),
('utn-888888', 'Tarde'),
('utn-999999', 'Noche'),
('utn-101010', 'Maniana');

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
