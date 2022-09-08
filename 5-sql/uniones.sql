USE tienda;
INSERT INTO clientes (nombre, apellido, telefono, direccion)
VALUES ('Pedro', 'Páramo', '555555234', 'Comala'),
('Raul', 'Sanchez', '555555234', 'Hidalgo'),
('Victor', 'Fernández', '555555234', 'Comala'),
('Magali', 'Quiroz', '555555234', 'CDMX'),
('María', 'Vargas', '555555234', 'CDMX'),
('Marina', 'Pardo', '555555234', 'CDMX');

SELECT * FROM tienda.compra;
SELECT * FROM clientes;
-- inner join
-- explicita
SELECT *
FROM clientes
INNER JOIN compra
ON clientes.cliente_id = compra.cliente_id;

INSERT INTO compra(cliente_id, fecha_compra, total, cantidad_productos)
values (3, '2022-09-06', 300.50, 2);

SELECT 
clientes.cliente_id,
 clientes.nombre,
 compra.*
 FROM clientes
 INNER JOIN compra 
 ON clientes.cliente_id = compra.cliente_id;
 
 -- union implicita 
 SELECT * 
 FROM clientes, compra;
 
 -- left join
 SELECT * 
 FROM clientes
 left join compra
  ON clientes.cliente_id = compra.cliente_id;
 
-- right join 
 SELECT * 
 FROM clientes
 right join compra
  ON clientes.cliente_id = compra.cliente_id;
  
  
 -- mostrar direcciones de cada pais
 USE  sakila;
 
 SELECT
 address.address,
 city.city,
 city.city_id
 FROM address
 INNER JOIN city
 ON address.city_id = city.city_id;

 -- 
 SELECT 
 country.country AS pais,
 address.address AS direccion,
 city.city AS ciudad
 FROM country
 INNER join city ON city.country_id = country.country_id
 INNER JOIN address ON address.city_id = city.city_id;
 
 DROP DATABASE generation;