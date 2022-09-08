show databases;

create database tienda;

USE tienda;

DROP DATABASE tienda;

CREATE TABLE clientes(
cliente_id INT NOT NULL AUTO_INCREMENT KEY,
nombre CHAR (50) NOT NULL,
apellido CHAR (50) NOT NULL,
telefono CHAR (50) NOT NULL,
direccion VARCHAR (150) NOT NULL
);
INSERT INTO clientes (nombre, apellido, telefono, direccion)
VALUES ('pedro', 'paramo', '1234455', 'Comala'),
('raul', 'sanchez', '12332455', 'cdmx'),
('vic', 'san', '12323245', 'edomex');

SELECT * FROM clientes;
DELETE  FROM clientes
WHERE cliente_id = '2';

