
const urlPokemon ="https://pokeapi.co/api/v2/pokemon/"
 

//////////////////elementos del DOM/////////////////////////7

const imgPokemon = document.getElementById ("img-pokemon")
// console.log(imgPokemon);

const idPokemon= document.getElementById ("id-pokemon")
const nombrePokemon= document.getElementById ("nombre-pokemon")
// console.log(nombrePokemon);
console.log(idPokemon);

const listaHabilidades = document.getElementById ("lista-habilidades")
// console.log(listaHabilidades);

const listaTipos = document.getElementById ("listaTipos");
// console.log(listaTipos);

const formulario = document.getElementById ("buscadorpokemon");
console.log(formulario);
///////////////////////////////EVENTOS


formulario.addEventListener("submit", (e) => {


   e.preventDefault()

   console.log("boton");
const inputPokemon = document.getElementById ("buscar")
console.log(inputPokemon.value);


const nuevaBusqueda = urlPokemon + inputPokemon.value; 
console.log(nuevaBusqueda);


obtenerPokemon(nuevaBusqueda);


})

 ////////////////////////////////////////7//función

 async function obtenerPokemon (url){
try{
const respuesta = await fetch (url)
const datos = await respuesta.json()

// console.log(datos);
// console.log(datos.forms[0].name);
// console.log(datos.abilities);
console.log(datos.id);
// console.log(datos.types);
// console.log(datos.sprites.other["official-artwork"].front_default);
 



 const pokemon ={

    nombre: datos.forms[0].name,
    habilidad:datos.abilities,
    numero: datos.id,
    tipo: datos.types,
    imagen: datos.sprites.other["official-artwork"].front_default
 }
///imagen-nombre-id
imgPokemon.src = pokemon.imagen;
idPokemon.textContent = `Id ${pokemon.numero}`
nombrePokemon.textContent=  pokemon.nombre;

///habilidades

console.log(pokemon.habilidad.length);


let template = ``


for (let i=0; i<pokemon.habilidad.length; i++){
   
   const nombreHabilidad =pokemon.habilidad[i].ability.name;
   console.log(nombreHabilidad );

   template +=`<li class="list-group-item"> ${nombreHabilidad}</li>`

}
 listaHabilidades.innerHTML = template; 





 ////tipos
console.log(pokemon.tipo);

let templateTipos = ` `

pokemon.tipo.forEach((tipo) =>{

const nombreTipo =tipo.type.name
console.log(nombreTipo);

templateTipos += `<li class="list-group-item"> ${nombreTipo}</li>`
/// para agregar en lugar de sustituir poner el "+="
})
listaTipos.innerHTML = templateTipos;

} catch (e){
   alert ("ese no es un pokemon, chavo")

}

 }

