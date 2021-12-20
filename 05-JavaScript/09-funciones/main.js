
//* Función más simple de todas
/*
saludar();
// el hoisting hace que si creamos una función con la palabra function, podamos incluso llamar a esa función (invocarla) antes incluso de haberla creado
function saludar() {
  console.log('Hola');
}
saludar();
*/


//* Función con parámetros
/*
function saludoPersonalizado(nombre = 'amig@', apellidos) {  
  if(apellidos === undefined) {
    console.log('Hola, ' + nombre)
  } else {
    console.log(`Hola, ${nombre} ${apellidos}`); 
  }
  console.log(`Hola, ${nombre} ${apellidos}`); 
}

const nombreDesdeBD = 'Lorena';

saludoPersonalizado('Ivan', 'Luengo'); // Hola, Ivan
saludoPersonalizado('Anna'); // Hola, Anna
saludoPersonalizado('Youssef'); // Hola, Youssef
saludoPersonalizado(nombreDesdeBD); // Hola, Lorena
saludoPersonalizado(); // Hola, amig@
*/

const num1 = 1;
const num2 = 4;
const num4 = 9;


function suma(x, y) {
  const resultado = x + y;
  return resultado;
}


// const suma1 = suma(num1, num2);
// console.log(suma1);



const num3 = 7;
console.log(num3);

// Para poder utilizar información de dentro de las funciones tenemos que sacar esa información fuera con la palabra return.
function sumaleDos(numero) {
  // const numeroMasDos = numero + 2;
  return numero + 2;
}

// Para disponer de el nuevovalor fuera de la función, podemos o imprimir en pantalla directamente la funcion
console.log(sumaleDos(num3));

// O podemos guardar la función dentro de una variable, y lo que se guardará será el return
const nuevoNumero = sumaleDos(num3);


const nombre = 'ivan';
console.log(nombre);
//La función toUpperCase() también tiene un return que me devuelve el string convertido a mayúsculas. Para usarlo, tengo que guardar el resultado en una nueva variable
const nombreMayusculas = nombre.toUpperCase();

console.log(nombre);
console.log(nombreMayusculas);