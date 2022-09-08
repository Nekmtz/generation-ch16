// function miFuncion (a,b){

// return (a +b )

// }

// let resultado = miFuncion (3,6);
// console.log( " el resultado es " + resultadp);

/// funcion anonima o expresión

let suma = function (a, b ) {
    return (a+ b);
};
let res =suma (2,3) (3,3);
console.log( res);

// resta

let resta = function (a, b ) {
    return (a - b);
};
let resultado1 = resta (2,3);
console.log( resultado1);
 // multiplicación
 
let multiplicación = function (a, b ) {
    return (a * b);
};
let resultado2 = multiplicación (2,3);
console.log( resultado2);


/// self invoking

(function (a, b, c, d)  {
console.log("el resutlado es " + (a + b - c + d));

}

) (3,4,5,6);



