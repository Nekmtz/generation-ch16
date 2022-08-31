const url = "https://dog.ceo/api/breeds/image/random"

// respuesta a la petición

fetch(url).then((respuesta) => {
console.log(respuesta);

})



//obtener la información de la petición

fetch(url)
.then((respuesta) => respuesta.json ())
.then ((datos) =>{
console.log(datos);

}).catch((error) => {
    console.log(error);
})

console.log( "forma 2");
///forma 2

async function obtenerPerritos (){

    try{
    const respuesta =await fetch (url);
    const datos = await respuesta.json()
    console.log(datos);
    } catch (error) {
 
        console.log(error);

    }
}

