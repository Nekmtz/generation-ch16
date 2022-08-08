let texto = "asdfghjkjhgfdsa ola asdfghjhgfd"
let buscar =/ola/;
let busccar = /[1]/;
let busccar2 = /[eo]/;

console.log(buscar.test (texto));
console.log(busccar.test (texto));
console.log(busccar2.test (texto));

let texto2 = "0=4"
let busccar3 = /[1-5]/;
console.log(busccar3.test (texto2));

let texto3 = "usuario@servidor.com"

let buscarCorreo = /[\w] + [@]{1}[\w] + \. [a-z]{2,3}/;




// expresion regular 

//funcion construcutra del objeto
//var re =new RegExp ()

