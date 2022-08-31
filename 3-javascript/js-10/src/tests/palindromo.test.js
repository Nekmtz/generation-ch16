const palindromo = require ('../js/palindromo');

describe('pruebas de la funcion palindromo', ()=>{

test('debe regresar "es un palindromo" si ingresamos ojo', () =>{
let  mensaje = "es un palindromo";
let palabra = "ojo";

expect( palindromo(palabra) ).toBe(mensaje);
} )


test(' no debe regresar "es un palindromo" al ingresar generation', () =>{
let mensaje = "es un palindromo";
let palabra = "generation";

expect(palindromo(palabra)).not.toBe(mensaje)

})

test(' debe regresar "no es una palabra" al ingresar valor', () =>{
    let mensaje = "no es una palabra";
    let valor = 2;
expect(palindromo(valor)).toBe(mensaje)

})

} );