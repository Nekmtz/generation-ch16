class persona {

constructor (nombre, apellido){

this._nombre = "pur de  "
this._apellido = "patos"

}
get nombre (){
    return this._nombre;
}
set _nombre(nombre){

    this._nombre = nombre;
}

}

let persona1 = new persona(jose, perez);
console.log(persona1);


let persona2 = new persona(ana, cruz);
console.log(persona2);
