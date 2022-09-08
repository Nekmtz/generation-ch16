//alert ("hola");

/// las doce casas


//casa de tauro, es un array 
// let carreritas = ["lucia", "Roberto", "Maria", "jesus", "Andrea", "jose"]
// console.log(carreritas);

// carreritas.unshift ("federico");
// carreritas.pop ("jose");

// carreritas.splice (3,4,"Maria");


// carreritas.splice (5,2,"Andrea");


// carreritas.splice (5,5,"jesus");


// carreritas.splice (2,0, "Cristóbal", "Fernando", "Armando");
// console.log( "al final de la carrera las posiciones del primer al ultim lugar fueron " + carreritas);


/// 2

// const pesoPayasos = 112
// const pesoMuñecas = 75
// let ventaPayasos = prompt("Ingresa el número de payasos")
// let ventaMuñecas = prompt("Ingresa el número de muñecas")
// let pesoPack = ((pesoMuñecas * ventaMuñecas) + (pesoPayasos * ventaPayasos))

// numeroPacks= (pesoPack / 1000)

// if (numeroPacks < 1){
//     alert("Se enviara 1 paquete");
// }else if (numeroPacks > 1){
//    alert("Se enviaran "+ numeroPacks + " paquetes");
// }

// alert("El peso total de paquetes es: " + pesoPack + " gramos");


//// 4 /
// let num=Math.floor(Math.random()*100);

// let adivina=1*prompt("¿Qué número crees que es? ");
// let salir=0;
// while (adivina!==num && salir!==1){
//     if (adivina>num){
//         adivina=1*prompt("el núm ingresado "+adivina+" es muy grande \n¿Qué número crees que es? ");
//     }else if(adivina<num){
//         adivina=1*prompt("el núm ingresado "+adivina+" es muy peque \n¿Qué número crees que es? ");
//     }else{
//         salir=1*prompt("Ingresa 1 para salir");
//     }
// }

// if (adivina==num){
//     alert("Acertaste");
// }





// cancer, calculadora 

let gradosCentigrados = Number(prompt ("ingrese los grados"))
console.log(typeof(gradosCentigrados));
let unidadGrado = prompt ("ingreese la unidad de los grados y la converción (c-f, c-k, k-f...) ")

console.log(typeof(grados));

switch (unidadGrado){
case "c-f":

alert ("son " + (gradosCentigrados * 1.8 + 32) + " grados farenheit" )
break
case "c-k":
alert ("son " + (gradosCentigrados + 275.15) + " grados kelvin" )
break

case "k-c":
    let kace = function (gradosCentigrados, b ) {
        return (gradosCentigrados - b);
    };
    let resultado1 = kace (gradosCentigrados, 275);
    alert (resultado1);
    break
}




// function convertir 
