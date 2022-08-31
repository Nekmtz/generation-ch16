/// crear un elemento

const imagen = document.createElement("img");
 console.log(imagen);


 //modificar los atributos del elemento
 imagen.src = 'https://placeimg.com/200/200/animals';
 imagen.alt ="animales";
//le insertamos un elemento padre
 document.body.appendChild (imagen);
document.body.insertAdjacentElement("afterbegin", imagen);

//forma correcta de crear e inserat un elemento 
//1. crear el elemento padre (el que contendrá a la imagen)
//2. seleccionar el elemento padre
const padreImg = document.getElementById ("padreImg");
//3. crear el elemento 
const imagen2 = document.createElement ("img");
//4. modificar los atributos del elemento
imagen2.src = 'https://placeimg.com/200/200/nature';
 imagen2.alt ="naturaleza";
 ///5. insetar elemento
 document.body.appendChild (imagen2);
/// forEach
 const frutas =["T", "M", "Man", "l", "G", "Me"];
 const listaFrutas = document.getElementById ("frutas");
console.log(listaFrutas);
 frutas.forEach((element) => {
    const li = document.createElement ("li");
    li.textContent = element
    listaFrutas.appendChild(li);
 } );


 //forma 2

//  frutas.forEach((el)=>{
// listaFrutas.innerHTML += `<li> ${el}</li>`;  

//  });

