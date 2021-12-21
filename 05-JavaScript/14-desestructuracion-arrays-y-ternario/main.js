//? Operador ternario
//* Podemos usarlo como un if normal, aunque no es lo más utilizado
/*
const num1 = 10;
const num2 = 20;

// if de toda la vida
if(num1 > num2) {
  console.log('El primer número es mayor.'); 
}else {
  console.log('El segundo número es mayor.');
}

// Ternario
num1 > num2 
  ? console.log('El primero es mayor') 
  : console.log('El segundo es mayor');



//* La manera más común es 


const usuario = 'Ivan';
const suscrito = true;

// con un if
let saludo = '';
if(suscrito) {
  saludo = `Hola, ${usuario}. Gracias por suscribirte.`
}else {
  saludo = `Hola, ${usuario}. ¿Quieres suscribirte?`
}

// con un ternario

let saludo2 = suscrito 
  ? `Hola, ${usuario}. Gracias por suscribirte.`
  : `Hola, ${usuario}. ¿Quieres suscribirte?`;

console.log(saludo2);


function restaAbsoluta(num1, num2) {
  // if(num1 > num2) {
  //   return num1 - num2;
  // } else {
  //   return num2 - num1;
  // }

  return num1 > num2 ? num1 - num2 : num2 - num1;

}

console.log(restaAbsoluta(8, 4));

const resta1 = restaAbsoluta(4,8);
console.log(resta1);
*/

//? Desestructuración de Arrays
const arrNombres = ['Ivan', 'Jessica', 'Kira', 'Freya'];

//* Para desestructurar lo hacemos de la siguiente forma
const [ivan, jess] = arrNombres;
console.log(ivan);
console.log(jess);

//Normas la desestructuración de arrays
//! Da igual el nombre que le pongáis a las variables
//! LO MÁS IMPORTANTE es el orden en que las creamos

const [ , , , freya] = arrNombres;
console.log(freya);





// const ivan = arrNombres[0];
// const jessica = arrNombres[1];
// const kira = arrNombres[2];
// const freya = arrNombres[3];
// console.log(ivan);
// console.log(jessica);
// console.log(kira);
// console.log(freya);