// En las variables solo podemos guardar un valor
/*
const nombre = 'Ivan';
const edad = 34;
const casado = true;
const diaDeMiMuerte = undefined;
const gatos = null;

// Así creamos un array
const nombres = ['Ivan', 'Youssef', 24];

// Así accedemos a una posición dentro del array
//! Acordaros de que la primera posición siempre será la 0
console.log(nombres[0]); // -> Ivan

// Así reasignamos un valor a una posición del array
nombres[0] = 'Manuel';
console.log(nombres[0]); // -> Manuel

// Así podemos crear nuevos elementos del array de forma literal.
nombres[3] = 'Javier';
console.log(nombres);

// Podemos acceder al valor "length" llamando a su propiedad con el punto
console.log(nombres.length);


//? Los strings funcionan muy parecido a los arrays
const frase = 'Cogito ergo sum';
console.log(frase);
console.log(frase.length);
console.log(frase[4]);
*/
//? A partir de ahora, que vamos a trabajar con elementos que no son primitivos, tenemos que entender cómo se guardan estos objetos dentro de las variables.

//* El comportamiento normal cuando tenemos valores primitivos es que el valor se guarda como un valor nuevo dentro de la nueva variable.
/*
let numero1 = 23;
console.log('numero1: ',numero1);

let numero2 = numero1;
console.log('numero2: ',numero2);

console.log('numero2 = 34')
numero2 = 34;

console.log('numero1: ',numero1);
console.log('numero2: ',numero2);

*/


let arr1 = ['a', 'b', 'c']; // --> 0x123
console.log('arr1: ',arr1);

console.log(arr1[2]);

let arr2 = arr1; // --> 0x123 
console.log('arr2: ',arr2);

console.log('arr2[1] = "x"');

arr2[1] = 'x';
console.log('arr1: ',arr1);
console.log('arr2: ',arr2);
