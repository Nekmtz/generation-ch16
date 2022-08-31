const suma = require('../js/suma');


//pedir un valor esperado
//comparar el valor con el resultado

test('sumar 1 + 4 debe ser 5',() => {

    expect(suma( 1 , 4 )).toBe(5);
});

test('sumar 1 +4 no debe ser 0',() => {

    expect(suma( 1 , 4 )).not.toBe(0);
});