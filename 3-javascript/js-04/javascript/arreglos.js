//areglos
// colección de elemetos 
//cada elemeto ocupa una psoción
//esta posición se le conoce como indice y comienza ne 0

let arr =[1,2,3,4]
console.log(arr);

//propiedades- describen
//metodos- acciones que pueden relaizar
console.log(arr[2]);

arr [4] = 190;
console.log(arr);
arr [4] = "ola";
console.log(arr)

 ///metodos de arreglos
 const arreglo = ["adios"];

 arreglo.push(2, 3, 5);
 arreglo.push("ola");
let num = 500;

arreglo.push(num);

console.log(arreglo);

arreglo.unshift("a","b");
console.log(arreglo);

console.log(typeof(arreglo [1]));
//quitar al final
let dato1 = arreglo.pop();
console.log(arreglo);

//quitar al inicio
arreglo.shift();
console.log(arreglo);
let dato2 = arreglo.shift();
console.log(dato2);
console.log(arreglo);

 ///quitar cachos en cualquier parte, remplazar o insertar
// (de donde, cantidad de elementos a afectar, que se va aponer) 
 arreglo.splice(0,0, "pepepep", 3, 2);//añadir

 console.log(arreglo);
 arreglo.splice(3,0, "nuebo",);//añadir
 console.log(arreglo);

 ////// cortar partes y son lo que guarda, lo que esté afuera se va
  let dato3 =arreglo.slice(0,3);
  console.log(arreglo);
  console.log(dato3);

