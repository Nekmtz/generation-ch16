USE generation;

SELECT Students.*, Countries.name country FROM Students INNER JOIN Countries ON Students.nationality = Countries.idCountries;

SELECT * FROM students;

SELECT * FROM idtypes;
  -- 1
SELECT
 idtypes.name,
 students.name
 FROM idtypes
 INNER JOIN students ON idtypes.id_idTypes = students.IdType_id;
  -- 2
SELECT
 students.name
 FROM students
 INNER JOIN students ON idtypes.id_idTypes = students.IdType_id; 
 
 
 