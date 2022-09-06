USE world;

SELECT * FROM country;
SELECT Name, population FROM country ORDER BY population DESC;
SELECT * FROM country WHERE Name='mexico';

SELECT distinct continent FROM country;

SELECT * FROM Country WHERE LifeExpectancy < 50 ORDER BY LifeExpectancy ASC;
