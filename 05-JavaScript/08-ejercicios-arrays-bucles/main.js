//* Ejercicio 1
//Crear un bucle que imprima por consola la lista de números del 1 al 30, incrementándose de 3 en 3.
/*
for(let i=1; i <= 30; i += 3) {
  console.log(i);
}

console.log('*************************');

let unoAlTrenta = 1;
while(unoAlTrenta <= 30) {
  console.log(unoAlTrenta);

  unoAlTrenta += 3;
}
*/
//* Ejercicio 2
// Utiliza un bucle for para imprimir por la consola la tabla de multiplicar del 8. Y luego otro con las 10 tablas de multiplicar de toda la vida.
/*

console.log('TABLA DEL 8');
for(let i=1; i <= 10; i++){
   //8 x 1 = 8
   //8 x 2 = 16
   //8 x 3 = 24
   console.log(`8 x ${i} = ${8 * i}`)
}
console.log('******************');
// 1 x 1 = 1
// 1 x 2 = 2
// 1 x 3 = 3
// 1 x 4 = 4
//....
//....
// 2 x 1 = 1
// 2 x 2 = 4
// 2 x 3 = 6
// 2 x 4 = 8

for(let i=1; i <= 10; i++) {

  console.log('TABLA DEL ' + i);

  for(let j=1; j <= 10; j++) {

    console.log(`${i} x ${j} = ${i * j}`);

  }

  console.log('*************************')
  
}
*/


//* Ejercicio 3
// Escribe un programa que saque una lista de números del 1 al 20 y que indique si el número es par o impar.
/*
for(let i = 1; i <= 20; i++) {
  if(i % 2 === 0) {
    console.log(`${i} es par`);
  } else {
    console.log(`${i} es impar`);
  }
}
*/


//* Ejercicio 4
// Haz un programa que pida una frase al usuario. Utilizando un `for...of` imprimiremos el número total de letras "a" que haya en la frase.
/*

const frase = prompt('Escribe una frase.');

// for(let i=0; i<frase.length; i++) {
//   console.log(frase[i]);
// }


let numeroDeAes = 0;

for(let letra of frase) {

  if(letra === 'a') {
    numeroDeAes++;  
  }

}

console.log(`La frase "${frase}" tiene ${numeroDeAes} aes.`);
*/
//* Ejercicio 5
/**
Escribe un programa que muestre los números del 1 al 50, con las siguientes excepciones:
  * Para los múltiplos de 3, muestra en pantalla la palabra "Fizz" en lugar del número.
  * Para los números múltiplos de 5, muestra en pantalla la palabra "Buzz" en lugar del número.
  * Para los múltiplos de 3 y 5, muestra en pantalla la palabra "FizzBuzz" en lugar del número.
 */
/*
for(let i=1; i<=50; i++) {

if(i % 3 === 0 && i % 5 === 0) {
  console.log('FizzBuzz');
} else if(i % 5 === 0) {
  console.log('Buzz');
} else if(i % 3 === 0) {
  console.log('Fizz');
} else {
  console.log(i);
}

}
*/





//* Ejercicio 7
// Escribe un programa que pida al usuario introducir un número entero mayor que 10, el cuadro de texto volverá a aparecer si el número es menor.

// let numMayorDiez = 7;
// while(numMayorDiez <= 10) {
//   numMayorDiez = prompt('Escribe un número mayor que 10 para salir del programa.');
// }
/*
let numero;
do {
  numero = prompt('Escribe un número mayor que 10 para salir del programa.');
  if(isNaN(numero)){
    console.log('No has escrito un número, vuelve a ejecutar el programa');
    break;    
  }else {
    numero = Number(numero);
  }
}while(numero <= 10)
*/
//* Ejercicio 8 
// Escribe un programa que pida al usuario introducir un número entero entre 50 y 100, el cuadro de texto volverá a aparecer si el número es menor o mayor.

  //Pedir al usuario con un prompt
  // numero entero entre 50 y 100
  let num;
  do{
    num = prompt('Dime un número entre 50 y 100');
    // preguntar si el numero es menor a 50 o mayor a 100
  }while(num < 50 || num > 100)
