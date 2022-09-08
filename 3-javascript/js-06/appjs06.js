// console.log(document.ATTRIBUTE_NODE);

//getElementById()

console.log(document.getElementById("parrafo1"));

const parrafo1= document.getElementById("parrafo1");

console.log(parrafo1.textContent);

parrafo1.textContent = "asdfghkjgfdsdfjkjkgddfjgdf";

console.log(parrafo1.textContent);
console.log(parrafo1.style);

parrafo1.style.color ="red";
parrafo1.style.backgroundColor ="gray";




//queryselector

const parrafo2 = document.querySelector(".parrafo");

console.log(parrafo2.textContent);

parrafo2.textContent += "holaadr oenfenwkerjf qoerngqo34noqi34 oqiwenfjlwerngfoj3nn ernefn";

console.log(parrafo2.textContent);

//querySelectorAll
const parrafos =document.querySelectorAll ("p");
console.log(parrafos[2]);
parrafos [2].style.fontSize = "2rem"


//modificar los atributos de html

const enlace = document.getElementById ("enlace");
console.log(enlace);
 enlace.style.fontSize = "2rem";

 enlace.href ="https://generationinitiative.zoom.us/j/3575897136?pwd=dER0UUlhekdON1piMU1hcjYrYkhpZz09#success"
 enlace.target = "_blank";
 enlace.textContent = " ya no es gogle es zum xdddd"

parrafos [0].style.backgroundColor = "black";
parrafos[1].textContent += "holaadr oenfenwkerjf qoerngqo34noqi34 oqiwenfjlwerngfoj3nn ernefn";
enlace.textContent += "troliado";

enlace.style.color = "green";


//remplazar codigo
const parrafo4 = document.getElementById ("parrafo4");
console.log(parrafo4.nodeName);
console.log(parrafo4.textContent);
console.log(parrafo4.innerHTML); //muestra el html en el interior del elemento
console.log(parrafo4.outerHTML);//muestra el html, incluyendo al elemento

parrafo4.textContent += '<a href="http://google.com"> enlace </a>'
parrafo4.innerHTML += '<a href="http://google.com"> enlace </a>'
//remplaza parte del elemento
parrafo4.outerHTML += '<a href="http://google.com"> enlace </a>'
// remplaza al elemento 
console.log( parrafo4.classList.contains("elemento"));

const cambiarColor = () => {
    //se agrega la clase  os equita la clase 
    parrafo4.classList.toggle("elemento");

}
console.log( parrafo4.classList.contains("elemento"));
