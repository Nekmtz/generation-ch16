USE world;

SELECT * FROM country;
SELECT Name, population FROM country ORDER BY population DESC;
SELECT * FROM country WHERE Name='mexico';

SELECT distinct continent FROM country;

SELECT * FROM Country WHERE LifeExpectancy < 50 ORDER BY LifeExpectancy ASC;
SELECT * FROM country WHERE continent = 'Asia' OR continent = 'Europe';

SELECT * FROM country WHERE continent IN ('Asia', 'Europe', 'North America') ORDER BY continent;

SELECT * FROM country WHERE indepYear IS NULL;
SELECT * FROM country WHERE Name LIKE '%as';
SELECT * FROM country WHERE Name LIKE '%e__a';
