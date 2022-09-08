// alert ("hola");
"use strict"
//permite usar js de forma estricta

/* tipos de variables */
let a;
const b=0;
var c;

//string
let cadena="hola";

//numero
let numero = 1;
let numero1 = 134;
let numero2 = 45;

//platillas literales 
console.log(`esto es una cadema ${5+4}`);

// } es para poder hacer la operación y que no solo lo imprima textualmente  `

let nombre = `nekito`

console.log("mi nombre es " + nombre );
console.log(`yo me llamo ${nombre}`);

//arreglos
let arr =[1,2,34,5,];
let arr2 = new Array ("b", 2);
console.log(arr2);



//objetos

const persona ={nombre: "nekito",
 edad: 23,
hobbies:[ "leer", 
"dormir", 
"estar vivo", 
"no querer estar vivo",],  
auto: {
    modelo: "no hay :c",
    year: "q no hay >:v",
    marca: "usted no entiende???",
},

saludar: function(){
    return "hsaludar"
}
};

console.log(`minombre es ${persona.nombre} y mis hobbies son ${persona.hobbies} tambien tengo ${persona.edad} años sin bañarme xdddd`);

console.log( `la acción q realizo es: ${persona.saludar()}`);


















