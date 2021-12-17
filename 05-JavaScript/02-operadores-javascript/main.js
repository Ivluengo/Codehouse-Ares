
//? Operadores matemáticos

//* Adición (suma) -->  +

const num1 = 10;
const num2 = 5;
const suma = num1 + num2;
    
console.log('Suma: ', suma);
console.log('Suma: '  ,num1 + num2);

// CURIOSIDAD: Si sumamos un string con un número, el número se convierte en string y concatena
console.log('Suma de un string con un número real: ' ,  num1 + 'hola');

//* Concatenación --> +

const texto1 = 'hola';
const texto2 = ' mundo';

console.log('Concatenación de 2 textos: ',  texto1 + texto2);


//* Sustracción (resta) --> -

const resta = num1 - num2;
console.log('Resta: ', resta); 

// CURIOSIDAD: Si restamos un número en string con un número real, el string se convierte en un número y se hace la resta.
console.log('Resta de un número string con un número real: ', num1 - '15')

//* Multiplicación --> *

const multi = num1 * num2; 
console.log('Multiplicación: ', multi);

//* Potencia (uno elevado al otro) --> **

const potencia = num1 ** 2;
console.log('Potencia: ', potencia);

//* División --> /

const division = num1 / num2;
console.log('División: ',  division);

const division2 = 10 / 3;
const division2decimales = division2.toFixed(2);
const division2DecimalesNumber = Number(division2decimales);


const division3 = Number(division2.toFixed(2));


console.log('División real: ' , division2);
console.log('Con un toFixed(2): ' , division2decimales);
console.log('Number(): ' , division2DecimalesNumber);
console.log('division3: ' , division3); 



//* Módulo --> %

console.log(49576249587645 % 5); // = 0 --> Módulo da 0, por lo tanto es múltiplo de 5
console.log('Par: ', 2356 % 2); // = 0 --> Es múltiplo de 2 por lo tanto es par 
console.log('Impar: ', 2354574767 % 2);  // = 1 --> NO es múltiplo de 2 por lo tanto es impar 


//?===============================================

//? Operadores de asignación --> Asignan un NUEVO VALOR a una variable

//* Símbolo igual --> =
let numero1 = 100;
// también reasigna valores
numero1 = numero1 * 2; // Esto cogerá el valor que tiene numero1 AHORA MISMO y lo multiplicará por 2 y el resultado lo guardará como NUEVO VALOR de numero1
console.log(numero1); 


//* Símbolo más|igual --> += 

let numero2 = 50;
console.log('numero2 = ', numero2); 

numero2 += 7;
console.log('numero2 += 7;', numero2); 
//! += SIEMPRE ASIGNA UN VALOR NUEVO Y CAMBIA LA VARIABLE!!!!

//* Símbolo menos|igual --> -=

let numero3 = 13;
console.log('numero3 =', numero3); 

numero3 -= 3;
console.log('numero3 -= 3;', numero3); 


//* Símbolo por|igual --> *=

let numero4 = 5;
console.log('numero4 =', numero4); 

numero4 *= 5;
console.log('numero4 *= 5;', numero4); 


//* Símbolo entre|igual --> /=

let numero5 = 30;
console.log('numero5 =', numero5); 

numero5 /= 3;
console.log('numero5 /= 3;', numero5); 



//* Símbolo módulo|igual --> %=

let numero6 = 13;
console.log('numero6 =', numero6); 

numero6 %= 2;
console.log('numero6 %= 2;', numero6); 


//?========================================

//? Operadores de incremento y decremento
//! TIENEN EL MISMO COMPORTAMIENTO QUE LOS DE ASIGNACIÓN, SOBREESCRIBEN EL VALOR DE LA VARIABLE

let x = 23; // x = 23
x = x + 1; // x = 24
x += 1; // x = 25
x++; // x = 26
x--; // x = 25

console.log(x); 
