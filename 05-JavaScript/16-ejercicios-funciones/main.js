//* Ejercicio 1
// const frutas = ['Plátanos', 'Bananas', 'Piñas', 'Manzanas', 'Peras', 'Uvas', 'Pomelos'];

// Crea una función que recibe como parámetro una fruta como string y devuelve la posicion del array donde esté esa fruta.

// Si no encuentra el elemento que devuelva ==-1==;

// Guarda el valor que retorna la función y imprimela en la consola.
/*
const frutas = ['Plátanos', 'Bananas', 'Piñas', 'Manzanas', 'Peras', 'Uvas', 'Pomelos'];

const frutas2 = ['Aguacate', 'Ciruelas'];

const arrNum = [2,4,-5,7,14];

function estaEnElArray( input, array ) {

  let encontrado = -1;

  for(let i=0; i<array.length; i++) {
    if(array[i] === input) {      
      encontrado = i;
      break;
    }
  }

  return encontrado;

}

console.log(estaEnElArray('Piñas', frutas2));
console.log(estaEnElArray(14, arrNum));

frutas.indexOf('Piñas'); // devuelve el índeice donde está


*/

/*
//* Ejercicio 2
// Crea una función que reciba el array de frutas y devuelva un string con todas las frutas separadas por comas.
//¡¡¡No tiene que haber una coma al final del string!!!

function arrayToString(array) {

  let stringFinal = '';

  for(let i=0; i<array.length; i++) {
    stringFinal += array[i]; // "Ivan, Jessica, Kira"
    if(i !== array.length -1) {
      stringFinal += ', '; // "Ivan, Jessica"
    } else {
      stringFinal += '.';
    }
      
  }

  return stringFinal;   
}

console.log(arrayToString(['Ivan','Jessica', 'Kira']));  //  "Ivan, Jessica, Kira"

console.log(['Ivan', 'Jessica', 'Kira'].join(', '));



//* Ejercicio 3
// Crea una función que reciba un array cualquiera y que te devuelva un nuevo array al revés.
/*
const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]; //    [5,4,3,2,1]


const alReves = (arrayCualquiera) => {
  // crear variables auxiliares
  let arrayNuevo = [];

  // darle la vuelta al array con un push
  for(let i=arrayCualquiera.length -1; i>=0; i--) {
    arrayNuevo.push(arrayCualquiera[i]);
  }
  // // darle la vuelta al array con un unshift
  // for(let i=0; i<arrayCualquiera.length; i++) {
  //   arrayNuevo.unshift(arrayCualquiera[i]);
  // }
 
  // nuevo arreglo al revés
  return arrayNuevo;
}


const nuevoArrayGirado = alReves(arr);
console.log(nuevoArrayGirado);
arr.reverse()
*/


//* Ejercicio 4
// Crea una función que le pasemos un array de números y nos devuelva cuál es el número mayor.
/*
const arrNum = [ -2, -7, -15, -3, -25 , -13];

const numeroMayor = (array) => {

  let numMaximo = array[0];

  for(let i=0; i<array.length; i++) {
    if(array[i] > numMaximo ) {
      numMaximo = array[i];
    }    
  }

  return numMaximo;
}

console.log(numeroMayor(arrNum));
console.log(Math.min(...arrNum));
*/
//* Ejercicio 8 ¡Calculadora!


// * Crea un bucle en el que el programa pregunta diferentes opciones (como si fuera un menú). 
//   * Las opciones serán (s) sumar, (r) restar, (m) multiplicar, (d) dividir, (e) exponencial, (p) porcentaje y (x) salir.
// * La calculadora seguirá ejecutándose hasta que el usuario aprete la letra `x` que será salir.
// * Para cada letra entre las opciones, crear la función que se encargará de hacer cada operación.
// * Dentro de cada función, pediremos al usuario los datos necesarios para relizar esa operación.
// * Que se imprima por consola el resultado de cada operación. 
// * No hace falta que las funciones devuelvan nada, solo que impriman por consola.
// * Refactoriza para que haya el menor número de cosas repetidas.

const askTwoNumbers = () => {
  // pedimos al usuario 2 números
    // primero comprobamos si ha escrito un número real
    let num1;
    do{
      num1 = prompt('El primer número.');
    }while(isNaN(num1) || !num1)

    // si sale del while es que es un número y podemos convertirlo
    num1 = Number(num1);

    let num2;
    do{
      num2 = prompt('El segundo número.');
    }while(isNaN(num2) || !num2)

    // si sale del while es que es un número y podemos convertirlo
    num2 = Number(num2);

    const dosNumeros = [num1, num2];

    return dosNumeros;


}

const sumar = (x, y) => {
  const resultado = x + y;
  console.log(`El resultado es ${resultado}`);
} 







let calculadora;
do {
  calculadora = prompt(`¡Welcome!
  (s) SUMAR
  (r) RESTAR
  (m) MULTIPLICAR
  (d) DIVIDIR
  (x) SALIR`);

  if(calculadora === 'x') {
    break;
  }
    
    
  if(calculadora === 's'){
    const [num1, num2] = askTwoNumbers();
    sumar(num1, num2);

    // const resultado = num1 + num2;
    // console.log(`El resultado es ${resultado}`);

  }else if(calculadora === 'r') {

  }else if(calculadora === 'm') {
    
  }else if(calculadora === 'd') {

  }else {
    console.error('Pon un valor correcto, ¡cenutri@!');
  }


}while(true)