let condicion = "C";
if(condicion === "A"){
console.log( "entro en la condicion A");


} else if (condicion === "B"){

    console.log( "entro en la condicion A");

} else if (condicion === "C"){

    console.log( "entro en la condicion C");

} else {

    console.log("no cumple");
}
///funcion 
function dividir (a,b) {

if (b === 0) {
    console.log("no se puede maistro");

} 
else { (a/b) 
console.log( a/ b );
}

dividir (2,0)
}


//switch
///se usa para evaluar expresioes

let nuevaCondicion = "hola";
switch(nuevaCondicion){
    case "hola":
console.log("buenos dias ");
console.log("tas chido mano?")
break

case "adios":
    console.log("nos vemos")
    break
    default:
        console.log("no te cacho mano")

}
 
// calcuculadora
let elegir = prompt ("que operación quieres?");
switch (elegir) {
    case "sumar":
        console.log("vamos a sumar");
        break
case "restar":
        console.log("vamos a restar");
        break
case "multiplicar":
        console.log("vamos a multiplicar");
        break;
 case "divir":
            console.log("vamos a dividr");
            
    default:
        console.log( "ke?");
        break;
}