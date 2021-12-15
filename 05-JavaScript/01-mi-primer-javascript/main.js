console.log('hola desde mi archivo main.js'); 

/*   
Esto es un comentario
de bloque
*/

// Esto es un comentario de línea

//? Variables y tipos de variables

//! Os enseño la palabra "var" pero no la vamos a utilizar porque ya no se utiliza

// Declarar una variable
var nombre;
// Inicializar una variable
nombre = 'Ivan';

// Reasignar un valor a una variable
nombre = 'Lorena';

//* La manera correcta de declarar variables es la siguiente, que se creó a partir de ECMAScript 6

// Podemos declarar e inicializar una variable al mismo tiempo.
let nombre2 = 'Youssef';

// Podemos reasignar el valor de las variables por cualquier tipo de valor. JavaScript ya se encarga de elegir el tipado de las variables.
nombre2 = 'Ivan';
nombre2 = undefined;
nombre2 = 23;

console.log(nombre2); 

// Podemos declarar varias variables en una misma línea utilizando comas.

// let num1 = 10;
// let num2 = 20;
// let num3 = 30;

let num1 = 10, num2 = 20, num3 = 30;

// CONSTANTES

const miNombre = 'Ivan';

// Por convención se suele dar a las constantes "conocidas" el nombre en mayúsculas.
const PI = 3.14159;

//! Las constantes no se pueden solo declarar, tenemos siempre que darles un valor inicial.
//const perro;

//! Las constantes no pueden ser reasignadas
// miNombre = 'Pepe';


/******************************/

//* Tipos de datos PRIMITIVOS

//? STRINGs

const textoSimples = 'Esto es un texto con comillas simples';
const textoDobles = "Esto es un texto con comillas dobles";

// Concatenación de strings
const edad = 34;

console.log('Me llamo ' + miNombre + ' y tengo ' + edad + ' años.');

// A partir de ECMAScript 6 (ES6), tenemos otro tipo de comillas para crear strings
// Para crearlos usamos backticks que son los acentos abiertos, también llamdos acentos franceses

const templateString = `Hola desde un template string.`;
console.log(templateString); 

// La concatenación con template strings se hace en su lugar, con la interpolación
console.log(`Me llamo ${miNombre} y tengo ${edad} años.`);

//? NUMBERs

let numero = 2;
numero = 2.4;
numero = -5;
numero = -2.47;
numero = 50;

console.log(numero); 

//? BOOLEANs
const verdadero = true;
const falso = false;

//? UNDEFINED
let variable; // Si solo declaras una variable, se guarda el valor undefined dentro hasta que le asignes un valor.
let variable2 = undefined; // Esto sería redundante.
console.log(variable);

//? NULL
// El valor NULL significa literalmente "nada" pero nosotros decidimos darle ese valor.
let valorNulo = null;

//? SYMBOLs -> Que no los vamos a explicar porque son cosas muy específicas y mucho más avanzadas

let simbolo = Symbol;

/* 
TODO RESUMEN!!!
* Tipos de variables:
  ? String
  ? Number
  ? Boolean
  ? undefined
  ? null
  ? Symbol
*/


//* Funciones básicas que están incluidas en JavaScript

// Para escribir en la consola
// console.log('imprime por consola');

// Muestra una alerta que para la ejecución del código hasta que le damos a aceptar
// alert('imprime en un pop-up');

// Para imprimir directamente en nuestro html
// document.write(`Tengo ${edad} años.`);


// Función que pide aceptación al usuario, solo pregunta sí o no
// const todoBien = confirm('¿Estás de acuerdo?');
// console.log(todoBien);


// Función que pide datos al usuario -> prompt
const tuEdad = prompt('Dime tu edad');
console.log(tuEdad);

//! El prompt siempre guarda un string
//! Si le damos a cancelar devuelve null
//Si queremos cambiar un string a un número tenemos que parsearlo
const tuEdadNumber = Number(tuEdad);
console.log(tuEdadNumber); 
//! Si a Number() le pasamos algo que aparentemente no sea un número devolverá NaN que significa Not a Number.
