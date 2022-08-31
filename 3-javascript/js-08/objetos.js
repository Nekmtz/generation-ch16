let obj ={

    nombre: "nek",
    edad: 23,
    apellido: "fufufu",
    correo: "asdf123@gmail.com",

    // nombreCompleto: function() {
    //     return this.nombre + " " +this.apellido;
    // }
    idioma: "es",
    get leng () {
        return this.idioma.toUpperCase();
    }
    
   
    
    }
    console.log(obj.leng);
    
    obj.tel = 23456;
    obj.tel2 = 2345678432;
    console.log(obj);
    // console.log(obj.nombreCompleto());
console.log(typeof(obj.nombreCompleto));


///for in 
for (varPropiedad in obj){
 console.log(obj[varPropiedad]);

}

let personaString = JSON.stringify(obj);
console.log(personaString);



