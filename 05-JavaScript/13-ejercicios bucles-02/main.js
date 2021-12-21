//* Ejercicio 1



//* Ejercicio 2
/**
 * Crea 3 arrays:
* El primero tendrá 5 números. 
* El segundo se llamará ==pares== y el tercero ==impares==.  Ambos estarán vacíos.
* Multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10:
  * Si el resultado es par, guarda ese número en el array de pares y si es impar en el otro.
* Mostrar por consola:
  * La multiplicación que se ha hecho en el siguiente formato -> 2 x 3 = 6
  * El array de pares e impares.
 */

const array = [2,5,7,9,13];
const pares = [];
const impares = [];

for(let i=0; i<array.length; i++) {

  const random = Math.ceil((Math.random() * 10));
  const multiplicacion = array[i] * random;
  console.log(`${array[i]} x ${random} = ${array[i] * random}`);

  if(multiplicacion % 2 === 0) {
    pares.push(multiplicacion);
  } else {
    impares.push(multiplicacion);
  }

}

console.log('ORIGINAL: ',array);
console.log('PARES: ', pares);
console.log('IMPARES: ', impares);