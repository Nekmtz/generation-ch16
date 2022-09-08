
const urlPokemon ="https://pokeapi.co/api/v2/pokemon/45"
 

//elementos del DOM

const imgPokemon = document.getElementById ("img-pokemon")
console.log(imgPokemon);

const idPokemon= document.getElementById ("id-pokemon")
const nombrePokemon= document.getElementById ("nombre-pokemon")
console.log(nombrePokemon);
console.log(idPokemon);


 //función

 async function obtenerPokemon (url){

const respuesta = await fetch (url)
const datos = await respuesta.json()

// console.log(datos);
// console.log(datos.forms[0].name);
// console.log(datos.abilities);
// console.log(datos.id);
// console.log(datos.types);
// console.log(datos.sprites.other["official-artwork"].front_default);
 



 const pokemon ={

    nombre: datos.forms[0].name,
    habilidad:datos.abilities,
    numero: datos.id,
    tipo: datos.types,
    imagen: datos.sprites.other["official-artwork"].front_default
 }


imgPokemon.src = pokemon.imagen;
idPokemon.textContent = datos.id
nombrePokemon.textContent=  datos.forms[0].name;
 }
 obtenerPokemon(urlPokemon)