function saludar (){

    alert ("ola");
}
function mandar (){

    alert ("eres tonto o q???");
}

//adeventlistener
const boton =document.getElementById ("boton");
console.log(boton);



boton.addEventListener("click",(evento) =>{

    // alert ("ayperro")
    console.log(evento.target);
} )

const formulario = document.getElementById ("form");

formulario.addEventListener ("submit", (e) => {
e.preventDefault ();
alert(formulario)
 console.log(formulario [0].value);

})