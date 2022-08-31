// const palindromo = (palabra) =>{
// let palabraInvertida = palabra.split("").reverse().join("");


// if (palabra === palabraInvertida){
//     return "es palindromo"
// }else{
//     return "no es palindrmo"
// }
// }


// console.log(palindromo('generation'));



////operador ternario

const palindromo = (palabra) =>{
    if (typeof palabra === 'number' ) return "no es una palabra";
    let palabraInvertida = palabra.split("").reverse().join("");
    
  return palabra === palabraInvertida ? "es un palindromo" : "no es"; 

    
}    
    console.log(palindromo('generation'));



    module.exports = palindromo;
