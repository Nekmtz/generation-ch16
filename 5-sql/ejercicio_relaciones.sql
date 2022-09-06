
CREATE DATABASE ejercicio_relaciones;
USE ejercicio_relaciones;
CREATE TABLE instructor (
instructor_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(255) NOT NULL, 
edad INT NOT NULL, 
cumpleanios DATE NOT NULL, 
RFC varchar(255) NOT NULL, 
supervisor VARCHAR(255) NOT NULL, 
sesiones VARCHAR(255) NOT NULL);

CREATE TABLE cohorte(
cohorte12_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
alumno_id INT NOT NULL,
instructor_id INT NOT NULL,
numero_alumnos INT NOT NULL,
horario VARCHAR(255) NOT NULL,
tipo_sesiones VARCHAR(255) NOT NULL,
ciudad VARCHAR(255) NOT NULL
);
CREATE TABLE direccion(
alumno_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
calle VARCHAR(255) NOT NULL,
pais VARCHAR(255) NOT NULL,
cp INT NOT NULL 
);
CREATE TABLE alumno(
alumno_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(255) NOT NULL,
edad INT NOT NULL,
CURP VARCHAR(255) NOT NULL,
RFC VARCHAR(255),
nivel_ingles VARCHAR (255) NOT NULL,
amonestaciones INT NOT NULL 
);
CREATE TABLE equipo(
alumno_id INT NOT NULL  AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(255) NOT NULL,
cantidad_integrantes INT NOT NULL,
logo VARCHAR(255) NOT NULL
);

SELECT * FROM equipo;
SELECT * FROM cohorte;
SELECT * FROM instructor;
SELECT * FROM alumno;
SELECT * FROM direccion;


DROP TABLE instructor;
DROP TABLE cohorte;
DROP TABLE direccion;
DROP TABLE alumno;
 
ALTER TABLE alumno
ADD CONSTRAINT fk_cohorte_alumno
FOREIGN KEY (alumno_id)
REFERENCES cohorte (alumno_id);

ALTER TABLE cohorte
ADD CONSTRAINT fk_cohorte_instructor
FOREIGN KEY (instructor_id)
REFERENCES instructor (instructor_id);

ALTER TABLE alumno
ADD CONSTRAINT fk_alumno_direccion
FOREIGN KEY (alumno_id)
REFERENCES  direccion (alumno_id);

ALTER TABLE instructor
DROP FOREIGN KEY fk_cohorte_instructor;


ALTER TABLE  alumno
ADD CONSTRAINT fk_alumno_equipo
FOREIGN KEY (alumno_id)
REFERENCES equipo (alumno_id);

ALTER TABLE equipo
DROP FOREIGN KEY fk_alumno_equipo;

INSERT INTO instructor(nombre, edad, cumpleanios, RFC,supervisor,sesiones )
VALUES ('Raul', 35, '2022-04-06', 'SAMRA051280C34', 'marina', 'las mas pros de todo, aca campechano');
