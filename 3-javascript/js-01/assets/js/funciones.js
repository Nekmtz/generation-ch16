// let a = prompt ("ingresa un numero"); 

// function miSuma (a,b){

// let resultado = (a,b);
// console.log("la suma es " + resultado);
// }
// miSuma(a,3);



// function miSuma2 (a,b){

//     console.log("la suma es " + (a + b));
//     }
//     miSuma(2,3);



    function miPrudcto(a,b){

       return (a * b);
        }

        console.log("el producto es " + miPrudcto(4, 5));

        let a = prompt ("ingresa un numero");
        let b = prompt ("ingresa un numero distinto");

    function miResta(a,b){


        return (a - b);
         }
 res = miResta(a, b);

         console.log("la resta es  " + res);

         let c = prompt ("ingresa un numero distinto");

         function miProd(res,c){


            return (res * c);
             }
     prod = miProd(res, c);
    
             console.log("el producto es es  " + prod);

//// operación de división

             let d = prompt ("ingresa un numero distinto");

         function miDiv(prod, d){


            return ( prod/d);
             }
     div = miDiv(prod, d);
    
             console.log(" la división es  " + prod);


/// primera función que arroge el nombre completo 3 variables


let nombre = prompt ("ingresa tu nombre  con un espacio al final");
let apellido = prompt ("ingresa tu apellido paterno con un espacio al final" );
let apelldo2 = prompt ("ingresa tu apellido materno con un espacio al final");

function miNombre(nombre , apellido , apelldo2){


   return ( nombre + apellido + apelldo2);
    }
nombrecito = miNombre( nombre , apellido , apelldo2);

    console.log(" mi nombre es " + nombrecito );
