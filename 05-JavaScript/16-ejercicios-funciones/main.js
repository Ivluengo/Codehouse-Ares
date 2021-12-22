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

//* Ejercicio 5
// Haz una función que haga coja un string que le pasemos por parámetro y le convierta la primera letra en mayúscula.
/*
const mayuscula = (frase) => {  // hola

  // const primeraLetra = frase.slice(0,1);
  // const primeraMayuscula = primeraLetra.toUpperCase();
  // const parteFinal = frase.slice(1);
  // const fraseMayuscula = primeraMayuscula + parteFinal;

  const fraseMayuscula = frase.slice(0,1).toUpperCase() + frase.slice(1);
                
  return fraseMayuscula;
}

const capitalize = (frase) => {

  // creamos un array con cada palabra dividiendo el string por sus espacios
  const arrPalabras = frase.split(' ');

  // recorremos el array
  for(let i=0; i<arrPalabras.length; i++) {
    // arrPalabras[i] = arrPalabras[i].slice(0,1).toUpperCase() + arrPalabras[i].slice(1);

    // convertimos cada palabra con su primera letra en mayúscula
    arrPalabras[i] = mayuscula(arrPalabras[i]);
  }

  // juntamos cada elemento del array en un nuevo string
  const fraseCapitalizada = arrPalabras.join(' ');

  // devolvemos el nuevo string
  return fraseCapitalizada;
}

console.log(mayuscula('hola, qué tal?')); // "Hola, qué tal?"

console.log(capitalize('hola, qué tal?')); // "Hola, Qué Tal?"

//* Ejercicio 6
// Crea una función a la que le pasamos 2 números y imprime por consola cual es el mayor de los dos o si son iguales.


const mayIgual = (a, b) => { 
  if(a > b) {
    console.log(`${a} es mayor que ${b}`);
  }else if(b > a) {
    console.log(`${b} es mayor que ${a}`);
  }else {
    console.log(`${a} y ${b} son iguales.`);
  }
}


const verifyNumberPrompt = (mensaje = 'Dime un número.') => {
  let number = prompt(mensaje);
             
  if(number.trim() && !isNaN(number.trim())  ){ 
    number = Number(number);
    return number;
  } else{
    console.error('No has escrito un número.')
  }
}


const a = verifyNumberPrompt();
const b = verifyNumberPrompt('Dime el segundo número.');


mayIgual( a , b );

*/
//* Ejercicio 7
// Crea una función que reciba dos números y devuelva true si los números son iguales.

// function sonIguales(x, y) {

//   if(x === y){
//     return true;
//   }else {
//     return false;
//   }
// }




const sonIguales = (x, y) => {
  return x === y ? true : false;
}

const sonIguales2 = (x, y) => x === y ? true : false;

const sonIguales3 = (x, y) => x === y;

console.log( sonIguales3(5,8) );





















































//* Ejercicio 8 ¡Calculadora!


// * Crea un bucle en el que el programa pregunta diferentes opciones (como si fuera un menú). 
//   * Las opciones serán (s) sumar, (r) restar, (m) multiplicar, (d) dividir, (e) exponencial, (p) porcentaje y (x) salir.
// * La calculadora seguirá ejecutándose hasta que el usuario aprete la letra `x` que será salir.
// * Para cada letra entre las opciones, crear la función que se encargará de hacer cada operación.
// * Dentro de cada función, pediremos al usuario los datos necesarios para relizar esa operación.
// * Que se imprima por consola el resultado de cada operación. 
// * No hace falta que las funciones devuelvan nada, solo que impriman por consola.
// * Refactoriza para que haya el menor número de cosas repetidas.
/*
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

    // const dosNumeros = [num1, num2];
    // return dosNumeros;

    return [num1, num2];
}

const sumar = (x, y) => {
  const resultado = x + y;
  console.log(`El resultado es ${resultado}`);
} 

const restar = (x, y) => {
  const resultado = x - y;
  console.log(`El resultado es ${resultado}`);
}

const multiplicar = (x, y) => {
  console.log(`El resultado es ${x * y}`);
}

const dividir = (x, y) => {
  console.log(`El resultado es ${x / y}`);
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
    const [num1, num2] = askTwoNumbers();
    restar(num1, num2);

  }else if(calculadora === 'm') {
    const [num1, num2] = askTwoNumbers();
    multiplicar(num1, num2);
    
  }else if(calculadora === 'd') {
    const [num1, num2] = askTwoNumbers();
    dividir(num1, num2);

  }else {
    console.error('Pon un valor correcto, ¡cenutri@!');
  }


}while(true)
*/