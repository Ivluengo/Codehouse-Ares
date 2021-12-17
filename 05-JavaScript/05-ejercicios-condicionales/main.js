//* Ejercicio 1
/*Pedir al usuario una nota de un examen que va de 0 a 10:
- Si es mayor que cinco mostrar el texto "Aprobado".
- Si es igual a cinco, mostrar el texto "Aprobado por los pelos".
- Si es menor que cinco, mostrar el texto "Suspendido". */
/*
const nota = prompt('Dime tu nota del examen.');
const notaNumber = Number(nota);

if(notaNumber > 5) {
  console.log('APROBADO');
}else if(notaNumber === 5) {
  console.log('APROBADO POR LOS PELOS');
}else {
  console.log('SUSPENDIDO');
}
*/
//* Ejercicio 2
/* Pedir al usuario un número entero. Cuando nos de el número imprimir en consola lo siguiente:
* Si el valor es positivo o negativo.
* Si el valor es par o impar.
* Si es múltiplo de cinco (que solo aparezca el mensaje si lo es).
* Si el valor es mayor que 100, si es menor que 100 o si es igual a 100.
Consideraremos el 0 como positivo */
/*
const numero = Number(prompt('Dame un número entero.'));

if(numero >= 0) {
  console.log(`El número ${numero} es positivo.`);
}else {
  console.log(`El número ${numero} es negativo.`);
}

if(numero % 2 === 0) {
  console.log(`El número ${numero} es par.`);
}else {
  console.log(`El número ${numero} es impar.`);
}

if(numero % 5 === 0) {
  console.log(`El número ${numero} es múltiplo de 5.`);
}

if(numero > 100) {
  console.log(`El número ${numero} es mayor que 100.`);
}else if(numero < 100) {
  console.log(`El número ${numero} es menor que 100.`);
}else {
  console.log(`El número ${numero} es 100.`);
}
*/

//* Ejercicio 3

/**Crea un programa que te pregunta la edad y te da el precio de la entrada que tienes que pagar:
* Menores de 6 entran gratis.
* De 6 a 13 años pagan 4€.
* De 14 a 65 años pagan 7€.
* Mayores de 65 entran gratis. 
*/
/*
const edad = Number(prompt('¿Qué edad tienes, mequetrefe?'));


if(edad < 6) {
  console.log('Tú no pagas entrada, ¡qué suerte!');
}else if(edad >= 6 && edad <= 13) {
  console.log('Tú tansolo pagas 4 euritos.');
}else if(edad > 13 && edad <= 65) {
  console.log('Tu pagas lo que toca, que ya tienes una edad. 7€');
}else {
  console.log('Ya no eres tan mequetrefe, ¿eh? Venga, pasa gratis.');
}

if(edad < 6 || edad > 65){
  console.log('Tú no pagas entrada, ¡qué suerte!');
}else if(edad >= 6 && edad <= 13) {
  console.log('Tú tansolo pagas 4 euritos.');
}else {
  console.log('Tu pagas lo que toca, que ya tienes una edad. 7€');
}
*/
//* Ejercicio 4
// Crea un programa que te pregunta el día de la semana y te devuelve el menú de ese día.
/*
let diaSemana = prompt('Dime un día de la semana.');

//  Prevenir posibles errores, ya que si el usuario le da a cancelar, diaSemana valdrá null, y la función toLowerCase() dará error.
if(diaSemana != null){
  diaSemana = diaSemana.toLowerCase().trim();
}
                               
if(diaSemana === 'lunes') {
  console.log('Hoy tenemos croquetas.');
}else if(diaSemana === 'martes') {
  console.log('hoy hay entrecot.');
}else if(diaSemana === 'miercoles' || diaSemana === 'miércoles') {
  console.log('hoy hay pescado.');
}else if(diaSemana === 'jueves') {
  console.log('hoy hay albóndigas.');
}else if(diaSemana === 'viernes') {
  console.log('hoy hay ensalada de atún.');
}else if(diaSemana === 'sabado' || diaSemana === 'sábado') {
  console.log('hoy hay sopa de cebolla.');
}else if(diaSemana === 'domingo') {
  console.log('hoy hay lasaña vegetal.');
}else {
  console.log('Dime un día de la semana válido.');
}

*/
//* Ejercicio 5
// Escribe un programa que pregunte al usuario qué estación del año le gusta más. Imprimir en pantalla una frase según la estación que escoja. Si se introduce un valor que no corresponda se mostrará un mensaje al usuario.
/*
let estacion = prompt(`¿Qué estación del año te gusta más?
(v) Verano
(p) Primavera
(o) Otoño
(i) Invierno
`);

if(estacion != null) {
  estacion = estacion.toLowerCase().trim()
}

if(estacion === 'v') {
  console.log('Me encanta el solete.');
}else if(estacion === 'p') {
  console.log('Todo lleno de flores, ¡siii!');
}else if(estacion === 'o') {
  console.log('Qué placer escuchar el crujir de las hojas de los árboles.');
}else if(estacion === 'i') {
  console.log('¡Brrrrr! ¡Qué rasca!');
}else {
  console.log('Eso no es una estación del año, ¡mendrug@!');
}
*/

//* Ejercicio 6
/**Escribe un programa que pida al usuario el número del mes (un número entre 1 y 12) y que muestre el número de días que tiene ese mes. 
* `No tendremos en cuenta los años bisiestos.`
* Si se introduce un número mayor que 12 o menor que 1, se mostrará un mensaje indicando al usuario que el mes elegido es incorrecto. */
/*
const mes = prompt('Dime un mes del año con números del 1 al 12.');

if(mes === '1') {
  console.log('Enero tiene 31 días');
}else if(mes === '2') {
  console.log('Febrero tiene 28 días.');
}else if(mes === '3') {
  console.log('Marzo tiene 31 días.');
}else if(mes === '4') {
  console.log('Abril tiene 30 días.');
}else if(mes === '5') {
  console.log('Mayo tiene 31 días.');
}else if(mes === '6') {
  console.log('Junio tiene 30 días.');
}else if(mes === '7') {
  console.log('Julio tiene 31 días.');
}else if(mes === '8') {
  console.log('Agosto tiene 31 días.');
}else if(mes === '9') {
  console.log('Septiembre tiene 30 días.');
}else if(mes === '10') {
  console.log('Octubre tiene 31 días.');
}else if(mes === '11') {
  console.log('Noviembre tiene 30 días.');
}else if(mes === '12') {
  console.log('Diciembre tiene 31 días.');
}else {
  console.log('Escribe un mes válido.');
}


if(mes === '1' || mes === '3' || mes === '5' || mes === '7' || mes === '8' || mes === '10' || mes === '12') {
  console.log('Este mes tiene 31 días.');
}else if(mes === '4' || mes === '6' || mes === '9' || mes === '11') {
  console.log('Este mes tiene 30 días.');
}else if(mes === '2') {
  const bisiesto = prompt(`¿Es bisiesto?
  (1) Sí.
  (2) No.
  `);

  if(bisiesto === '1'){
    console.log('Este mes tiene 29 días.');
  }else if (bisiesto === '2') {
    console.log('Este mes tiene 28 días.');
  }else {
    console.log('No has respondido un valor correcto.');
  }


}else {
  console.log('Escribe un mes válido.');
}
*/

//* Ejercicio 7
/**Pide al usuario 3 números y luego imprímelos ordenados de mayor a menor.

* Pedir al usuario 3 números
* comprobar si numero 1 es mayor que el 2
  * si es mayor, comprobar con el numero 3 y ofrecer el resultado
  * si es menor, comprobar con el numero 3 y ofrecer resultado */
/*

const a = Number(prompt('Dime el primer número.'));
const b = Number(prompt('Dime el segundo número.'));
const c = Number(prompt('Dime el tercer número.'));

console.log(`Los números introducidos son ${a}, ${b} y ${c}.`);
*/

//Algoritmo:  Ejecución paso a paso de pqueñas soluciones para conseguir solventar un gran problema
// Problema: Con 3 números que te dan, ordenalos de mayor a menor

// Algoritmo:
/*
  1: prompt de 3 números
  2: if si el primero mayor que todos
    3: Si es mayor que los dos, comprueba si el segundo es mayor que el tercero
      4: Si el segundo es mayor, sacar resultado por pantalla
      5: Si el segundo es menor, sacar resultado por pantalla
    6: si no es mayor que los dos, volver al paso 3 comprobando si el siguiente número es el mayor de todos.
*/

/*
if(a >= b && a >= c) {
  if(b >= c) {
    console.log(`El orden es: ${a}, ${b} y ${c}`);
  }else {
    console.log(`El orden es: ${a}, ${c} y ${b}`);
  }
}else if(b >= a && b >= c) {
  if(a >= c) {
    console.log(`El orden es: ${b}, ${a} y ${c}`);
  }else {
    console.log(`El orden es: ${b}, ${c} y ${a}`);
  }
}else if(c >= a && c >= b) {
  if(a >= b) {
    console.log(`El orden es: ${c}, ${a} y ${b}`);
  }else {
    console.log(`El orden es: ${c}, ${b} y ${a}`);
  }
}

*/
//* Ejercicio 8
/**Escribe un programa que pida la hora al usuario, preguntando las horas, minutos y segundos.Se mostrará en pantalla la hora elegida por el usuario un segundo más tarde. Si no se pasa una hora correcta se mostrará un mensaje al usuario. */

let horas;
let minutos;
let segundos;
const horasPrompt = prompt('Dame unas horas de 0 a 23');

if(isNaN(horasPrompt) === true) {
  console.log('No has escrito un número.')
}else {
  horas = Number(horasPrompt);
}

const minutosPrompt = prompt('Dame unos minutos de 0 a 59');
if(isNaN(minutosPrompt) === true) {
  console.log('No has escrito un número.')
}else {
  minutos = Number(minutosPrompt);
}

const segundosPrompt = prompt('Dame unos segundos de 0 a 59');
if(isNaN(segundosPrompt) === true) {
  console.log('No has escrito un número.')
}else {
  segundos = Number(segundosPrompt);
}


  //0: Comprobar que se ha introducido unos datos correctos
  if(horas >= 0 && horas <= 23
    && minutos >= 0 && minutos <= 59
    && segundos >= 0 && segundos <= 59) {

      console.log(`La hora escrita es ${horas}:${minutos}:${segundos}`);
      
      // 1: sumo 1 segundo a los segundos
      // segundos = segundos + 1;
      // segundos += 1;

      segundos++;     
      
      //   2: si los segundos NO son 60 pasar al ultimo paso
      if(segundos !== 60 ) {
        console.log(`La hora escrita +1 segundo es ${horas}:${minutos}:${segundos}`);
        
        //   3: si los segundos son 60
      }else {
        //     convertir los segundos a 0
        segundos = 0;
        //     sumar 1 a los minutos
        minutos++;

        //       si los minutos son 60
        if(minutos === 60) {
          //         - convertir los minutos a 0
          minutos = 0;
          //         - sumar 1 a las horas
          horas++;

          //           si las horas son 24
          if(horas === 24) {
            //             -convertir horas a 0  
            horas = 0;   
          }
        }


        // ultimo: mostrar hora en pantalla
        console.log(`La hora escrita +1 segundo es ${horas}:${minutos}:${segundos}`);

      }
    }else {
      console.log('No has introducido una hora correcta.');
    }
