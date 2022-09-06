CREATE DATABASE generation;
USE generation;
CREATE TABLE cohorte_16(
alumno_ID INT NOT NULL auto_increment PRIMARY KEY,
nombre CHAR (50) NOT NULL,
apellido CHAR (50) NOT NULL,
companieros CHAR (50) NOT NULL,
direccion VARCHAR (150) NOT NULL,
proyecto VARCHAR (150) NOT NULL
);
SELECT * FROM cohorte_16;
INSERT INTO cohorte_16 (nombre, apellido, companieros, direccion, proyecto)
VALUES ('vic','sanchez', 7, 'hidalgo', 'java' ),
('jona','vazques', 6, 'cdmx', 'javaScript' ),
('Raul','sanchez', 4, 'guadalajara', 'javaScript'),
('magali','quiroz', 7, 'cdmx', 'javaScript' ),
('maria','Vargas', 7, 'cdmx', 'javaScript' );
SELECT * FROM cohorte_16;
DELETE FROM cohorte_16 
WHERE alumno_id = 3;
SELECT * FROM cohorte_16;
UPDATE cohorte_16
SET nombre= 'marina',
apellido = 'pardo'
WHERE alumno_id = 5;
SELECT * FROM cohorte_16;

SET nombre = REPLACE (nombre,'magali', 'roberta');

SELECT nombre, apellido FROM cohorte_16;

SELECT nombre,apellido  FROM cohorte_16 ORDER BY apellido DESC;