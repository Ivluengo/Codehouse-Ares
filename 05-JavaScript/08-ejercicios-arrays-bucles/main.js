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
/*
  //Pedir al usuario con un prompt
  // numero entero entre 50 y 100
  let num;
  do{
    num = prompt('Dime un número entre 50 y 100');
    // preguntar si el numero es menor a 50 o mayor a 100
  }while(num < 50 || num > 100)
*/

//* Ejercicio 9
// En primer lugar se le pedirá al usuario que introduzca un número entre 2 y 10. Si el número no está entre estos dos valores, se le seguirá pidiendo hasta que introduzca el valor correcto. Una vez haya introducido un valor entre 2 y 10, se mostrará por consola la tabla de multiplicar del número elegido.

/*
let num;
do{
  num = prompt('Qué tabla entre 2 y 10 quieres ver.');
  // preguntar si el numero es menor a 50 o mayor a 100
}while(num < 2 || num > 10)

console.log('TABLA DEL ' + num);
for(let i=1; i<=10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}
*/

//* Ejercicio 10
// Con un `while` construye y muestra por consola un "triángulo" de 7 líneas como el siguiente:
/*
*
**
***
****
*****
******
*******
*/
/*
const numEstrellas = 10;

  let estrellas = '*';

  let contador = 1;
  while(contador <= numEstrellas) {

    console.log(estrellas);
    estrellas += '*';  

    contador++;
  }

  // for(let i=1; i<=numEstrellas; i++) {
  //   console.log(estrellas);
  //   estrellas += '*';
  // }
*/
//* Ejercicio 11
// Con el `for of`, crea un array con cinco nombres de persona y recórrelo mostrando el texto "Conozco a alguien llamado..."
/*
const nombres = ['Lorena', 'Manuel', 'Youssef', 'Itaney', 'Miguel'];

for(let nombre of nombres) {
  console.log('Conozco a alguien llamado...' + nombre);
}
*/
//* Ejercicio 12
// Recorrer la siguiente lista con un bucle, imprimiendo el doble de cada número:
// myList = [1,9,3,8,5,7];
/*
const myList = [1,9,3,8,5,7];
let myListPorDos = [];

console.log('BUCLE FOR');
for(let i=0; i<myList.length; i++){
  
  // myListPorDos[i] = myList[i] * 2;
  myListPorDos.push(myList[i] * 2);
  console.log(myList[i] * 2);
}
console.log(myListPorDos);

console.log('BUCLE FOR...OF');
for(let numero of myList) {  
  console.log(numero * 2);
}

console.log('BUCLE FOR...IN');
for(let index in myList){
  // index se convertirá en el índice en cada vuelta
  console.log(myList[index] * 2)
}

console.log('BUCLE WHILE');
let contador = 0;
while(contador < myList.length) {
  console.log(myList[contador] * 2);
  contador++;
}

*/

//* Ejercicio 13
// En un array cualquiera con 10 números, contar cuantos números positivos hay, cuantos negativos y cuantos ceros.
/*
const arrNum = [2,-5,-8,0,-9,0,43,4,75,0];

let positivos = 0;
let negativos = 0;
let ceros = 0;

for(let num of arrNum) {

  if(num > 0) {
    positivos++;
  } else if(num < 0) {
    negativos++;
  }else {
    ceros++;
  }
}

console.log(`El array ${arrNum} tiene:
${positivos} número positivos.
${negativos} números negativos.
${ceros} ceros.
`);
*/

//* Ejercicio 14 - ¡La guinda!
/*
Hay que crear un programa de JS que permita adivinar un número secreto entre 1 y 100. 
* Se considera que cuando el usuario introduce un valor, éste es siempre válido. 
* Con cada intento del jugador, el programa le dice si el número secreto es mayor o menor. 
* El jugador tiene 6 intentos para adivinar el número.

* Para crear un número aleatorio real utilizamos este código:
  * `Math.floor((Math.random() * 100) + 1);`
*/


// Creamos el número secreto
const secreto = Math.floor((Math.random() * 100) + 1);
console.log(secreto);
// Crear contador de intentos
let intentos = 6;
// Preguntar al usuario por un número
const numeroUsuarioPrompt = prompt('Dime un número del 1 al 100 a ver si lo adivinas.');

let numeroUsuario = Number(numeroUsuarioPrompt);

while(intentos >= 1){
  // Si el número secreto es mayor
  if(secreto > numeroUsuario && intentos > 1) {
    // informar al usuario de que es mayor
    console.log(`INCORRECTO. El número secreto es MAYOR que ${numeroUsuario}`);
    // reducir el número de intentos
    intentos--;
    // Volver a preguntar
    numeroUsuario = prompt(`Prueba otra vez. Te quedan ${intentos} intentos`);
  
  
    // Si el número secreto es menor
  } else if(secreto < numeroUsuario && intentos > 1) {
    // informar de que es menor
    console.log(`INCORRECTO. El número secreto es MENOR que ${numeroUsuario}`);
    // reducir el número de intentos
    intentos--;
    // Volver a preguntar
    numeroUsuario = prompt(`Prueba otra vez. Te quedan ${intentos} intentos`)
    
    
    // si lo ha acertado
  } else if (secreto === numeroUsuario) {
    // informar de que ha ganado
    console.log('¡BRAVO! ¡Has ganado!');
    // terminar
    break;
  }

}

// si se han agotado los intentos
if(intentos === 0) {
  // informar de que no lo ha conseguido
  console.log('¡Ohhhhh! El número secreto era: '+ secreto);
}




































  
  
  
 