//Variable que simula los pedidos
const saludo = "Hola mundo";
const datos = [
    {
    nombre: "Jonathan",
    apellido : "Vazquez"
    },
    {
    nombre: "Jonathan",
    apellido : "Vazquez"
    },
    {
    nombre: "Jonathan",
    apellido : "Vazquez"    
    }
]

console.log(saludo);

//Funcion para simular una petición

function obtenerDatos (){

return new Promise( (resolve, reject) => {

    setTimeout( () =>{

        if (true){
        resolve (datos)
        }else{
            reject("no se puedemano")
        }
    }, 2000)
})

}

obtenerDatos().then((datos) =>{

    console.log(datos);
}).catch( (error) =>{
console.log(error);

})


///forma 2 funciones asincronas

async function funcionAsincrona(){

    //resolver promesa fallida 

    try{

        const datos = await obtenerDatos()
        console.log(datos);
    }catch (error) {
        console.log(error + "ups mano");

    }
  


}

funcionAsincrona()
