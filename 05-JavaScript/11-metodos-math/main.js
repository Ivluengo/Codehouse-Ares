//? El objeto Math está disponible directamente en el core de JavaScript

//* Propiedades de Math
/*
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045 (constante de Euler)
console.log(Math.SQRT2); // 1.4142135623730951 (raíz cuadrada de 2)

//* Métodos del objeto Math

Math.sqrt(16); // 4 --> Raíz cuadrada de un número
Math.abs(-20); // 20 --> Valor absoluto de un número.

const potencia = 2 ** 3; // 8 --> potencia de un número (2 elevado a 3)
Math.pow(2, 3); // 8

console.log(Math.round(5.4999999)) // 5  Round redondea de forma natural
console.log(Math.round(5.5000000)) // 6

console.log(Math.ceil(5.1)); // 6 Redondea al alza siempre
console.log(Math.floor(5.999)); // 5  Redondea a la baja siempre
*/

Math.random() // Número aleatorio entre 0.0000 y 1
Math.random() * 10 // Numero entre 0.0000 y 9.999999
Math.ceil(Math.random() * 10) // Numero entre 1 y 10
console.log(Math.ceil(Math.random() * 10) );
