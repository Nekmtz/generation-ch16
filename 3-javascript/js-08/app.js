let cadena = "esto es una cadena de texto"
console.log(typeof(cadena));
let cadenaObj = new String ("esto es una cade obj");
console.log(typeof(cadenaObj));

console.log(cadena);
console.log(cadenaObj);

///tipo numerico
let numero = 234;
let numeroObj = new Number (23456);
console.log(numero);
console.log(numeroObj);

let arreglo = [1,2,3,4,5];
console.log(arreglo);

let arreglo1 = new Array (1,2,3,4,5);
console.log(arreglo1);


///predefinidos 

let tiempo = new Date();
console.log(tiempo);
console.log(typeof(tiempo));
console.log(Math);

let objLiteral ={

nombre: "nek",
edad: 23,

}

let objetoConstructor = new Object();
objetoConstructor.nombre = "papure"
objetoConstructor.edad = 23
objetoConstructor.casa = "afa"
console.log(objLiteral);
console.log(objetoConstructor);

