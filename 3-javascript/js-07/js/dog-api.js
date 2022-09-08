
///url para consumir//
const urlAleatorios = "https://dog.ceo/api/breeds/image/random"

///elementos para el dom
//// traer img
const imagenPerrito = document.getElementById("img-perrito");
console.log(imagenPerrito);
////traer boton


const btn = document.getElementById ("btnperrito");
//////agregar evento
btn.addEventListener("click", () =>{
console.log("boton presionado");

// agrgar la funvcionalidad
obtenerPerritos(urlAleatorios)
})


 async function obtenerPerritos (url){

    const respuesta = await fetch (url)
    const datos = await respuesta.json ()

    console.log(datos);
    console.log(datos.message);
    console.log(datos.status);
imagenPerrito.src = datos.message
}

obtenerPerritos (urlAleatorios)