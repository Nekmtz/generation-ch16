
///url para consumir//
const urlAleatorios = "https://api.thecatapi.com/v1/images/search"
console.log(typeof(urlAleatorios));
///elementos para el dom
//// traer img
const imagenCat = document.getElementById("img-cat");
console.log(imagenCat);
////traer boton


const btn = document.getElementById ("btncat");
//////agregar evento
btn.addEventListener("click", () =>{
console.log("boton presionado");

// agrgar la funvcionalidad
obtenerGatos(urlAleatorios)
})


 async function obtenerGatos (urlAleatorios){

    const respuesta = await fetch (urlAleatorios)
    const datos = await respuesta.json ()
console.log(datos);
   
imagenCat.src=datos[0].url;
}

obtenerGatos (urlAleatorios)