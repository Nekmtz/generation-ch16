USE sakila;
SELECT customer_id, amount FROM payment;
SELECT COUNT(*) AS ' cantidad de filas' FROM payment;

SELECT COUNT(*) AS ' cantidad de paises' FROM world.country;

 -- cantidad de rentas x trabajador 
	SELECT COUNT(*) AS ' cantidad de transacciones' FROM payment WHERE staff_id =1;

 -- cantidad de clientes distintos
 SELECT COUNT(DISTINCT customer_id) FROM payment;
 
 SELECT SUM(amount) FROM payment ;

SELECT customer_id, count(*) FROM payment GROUP BY customer_id  ORDER BY COUNT(*) ASC;

 -- cual cliente gastó mas?
SELECT customer_id, SUM(amount) FROM payment GROUP BY customer_id ORDER BY SUM(amount) DESC;


 -- promedio
 SELECT AVG (amount) AS promedio FROM payment;
 
 -- cliente que gastó más
 SELECT customer_id, AVG(amount) AS promediocliente FROM payment GROUP BY customer_id ORDER BY promediocliente DESC;

SELECT * FROM language;
SELECT * FROM actor;
SELECT * FROM  film; -- tiene relación con language_id
SELECT * FROM film_actor; -- tiene relación con id_actory film_id
SELECT * FROM film_category; -- tiene relacion film_id 

SELECT  name FROM  language WHERE language_id = 5;  
SELECT  title FROM film WHERE lenguage_id = 5; 


-- titulos x idioma
SELECT title AS nombredelamubi, name FROM film AS idioma, language;

-- monto de un dia en especifico
SELECT customer_id, SUM(amount) AS total_dia FROM payment WHERE payment_date BETWEEN '2005-06-15 00:00:00' AND '2005-06-15 23:59:59' GROUP BY customer_id ORDER BY total_dia DESC;
 




