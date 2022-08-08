//sort ()

//ordenar los elemetos de un arreglo

const arr = ["X", "A", "H", "a", "W", "b"];

arr.sort();
console.log(arr);

const arr2 = ["Hola", "adiós", "bienvenido", "Calle"];
console.log(arr2);

arr2.sort();
console.log(arr2);


const arr3 = [1,2,5,2,5,353,453,23,21,1]
arr3.sort((a,b) => b -a); //ordena numeros de mayor amenor
console.log(arr3);

arr3.sort((a,b) => a -b); //ordena numeros de menor a mayor 
console.log(arr3);



//función declarada
//hoisting
//un proceso de reacomodo automatico del codigo
function sumar (a,b){
return a+ b;
}
console.log(sumar (5,7));

let a =2;
console.log(a);

///funcion expresada, no tiene hoisting

const multiplicar = function(a,b){
    return a*b;
}
console.log(multiplicar(3,5));


///funcion flecha
const dividir =(a,b)=>{

    return a/b;

}
console.log(dividir (10,2));

const dividir1 =(a,b)=>  a/b;
console.log(dividir1 (10,2));/// es el mismo resultado q arriba

/// forEach()

//es un ciclo que recorre en automatico todo el arreglo 

const arrNumeros = [1,3,455,6,3,2,463,2,1,5,6,2,45,3];
console.log(arrNumeros);

// for(let i=0; i<arrNumeros.length; i++){

//     arrNumeros[i] =arrNumeros[i] *2;
// }
// console.log(arrNumeros);

arrNumeros.forEach((elemento,index, arr) => console.log(elemento = elemento*2))

console.log("olaasdfgfdsa");

