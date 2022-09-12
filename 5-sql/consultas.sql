USE akan;

 -- agregar datos
 SELECT * FROM artistas;
INSERT INTO artistas (nombre, apellido, categoria, ciudad, correo, link_fb, link_ig, link_tiktok, link_spotify, telefono)
VALUES ('jesu','rojas','fotografia', 'CDMX', 'jesu@gmail.com','link' , 'link','link' , null, '5511223388'),
('jannethe','woodoh','pintura', 'CDMX', 'janete@gmail.com', null , 'link','link' , null, '5533445588');

SELECT * FROM usuario;
INSERT INTO usuario(email, nombre_usuario, apellido, direccion, id_registro, telefono)
VALUES ('arturo123@gmail.com', 'Arturo_Emoxxo', 'Lopez', 'calle a numero 2 C.P 56000', 1, '5519497165'),
('oscar456@gmail.com', 'Oscar', 'Avila', 'calle c numero d C.P 56001', 2, '7222478012'),
('pilar789@gmail.com', 'Pilar', 'Ramirez', 'calle e numero f C.P 56002', 3,  '5585768481');



-- agregar productos
SELECT * FROM productos;
INSERT INTO productos(id_producto,artista_id,nombre_producto,precio,descripcion)
VALUES(1,1,"Collar azul",75.5,"Collar hecho a mano"),
(2,2,"Collar rosa",80,"Collar hecho a mano");


SELECT * FROM registro;
INSERT INTO registro
(nombre_usuario, email, contraseña, fecha_nacimiento)
VALUES ( 'Sophi', 'sophiaReyes@gmail.com', 'reyes11', '1992-02-07'),
('Leandro', 'lean@gmail.com', 'leanRA', '1998-01-11'),
('Natalia', 'natt7@gmail.com', '77natt', '1990-03-07');



SELECT * FROM metodo_pago;
INSERT INTO metodo_pago 
(id_pago,id_pedido,id_cliente,tipo_pago,num_tarjeta,year_tarjeta,mes_tarjeta,ccv)
VALUES (1,7, 9, 'Tarjeta', '1234567890123456', 2025, 08,123),
(2,8, 10, 'Tarjeta', '1234567890111111', 2023, 01,111); -- falta id_pedido


SELECT * FROM detalle_de_pedido;
INSERT INTO detalle_de_pedido (id_producto,id_cliente, precio_por_unidad, descripcion_del_pedido, total_compra, cantidad)
VALUES (1, 9, 250,"Collar azul",250,1),
(1, 10, 250,"Collar azul",250,1);

SELECT * FROM envio;
INSERT INTO envio (id_pedido,id_cliente,registro_envio)
VALUES (7,1,'1001'),
(8,9,'1002');




