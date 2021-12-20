//? Métodos de los string
/*
const frase = new String('¡Hola, Mundo!');


//* toUppercase() y toLowerCase()

console.log('toLowerCase() ->', frase.toLowerCase());
console.log('toUpperCase() ->', frase.toUpperCase());

//* indexOf(texto) --> devuelve la posición donde está el primer texto que encuentro que sea igual al que ponemos como parámetro. Si no lo encuentra devolverá -1.

//* lastIndexOf(texto) --> Exactamente lo mismo, pero te devuelve el último que encuentre

console.log('indexOf("o") ->',frase.indexOf('o'));
console.log('lastIndexOf("o") ->',frase.lastIndexOf('o'));

//* replace() --> Busca lo que haya en el primer parámetro y lo cambiará por el segundo

console.log('replace("Mundo", "gente") ->',frase.replace('Mundo', 'gente'));

//* replaceAll() --> Hace lo mismo que replace pero con todas las instancias que coincidan con tu búsqueda
console.log('replaceAll("o" , "a") ->',frase.replaceAll('o', 'a'));


//* trim() --> eliminar todos los espacios en blanco de delante y de detrás de un string
const hola = '    hola, hola!    ';
console.log('hola.trim() ->', hola.trim());


//* slice() y el substr() --> Los dos cortan pedazos del texto
// el primer parámetro del slice es dónde empiezas a cortar y el segundo dónde quieres acabar de cortar
console.log('slice(1,5) ->',  frase.slice(1,5)); // Hola
// el slice también acepta números negativos, empezará desde atrás
console.log('slice(3,-2) ->',  frase.slice(3,-2)); // la, Mund
// también podemos poner solo un valor, y cortará desde allí hasta el final
console.log('slice(-5) ->',  frase.slice(-5)); // undo!

// el susbtr recibe como primer parámetro dónde quieres empezar a cortar pero como segundo parámetro le pasas el número de letras que quieres cortar
console.log('substr(7,4) ->',  frase.substr(7,4)); // Mund
//! Aparentemente recomiendan dejar de utilizarlo, nos lo hemos encontrado de repente en esta clase

//* split() --> Convierte toda la cadena de texto en un array. Dividirá el string según lo que pongamos como parámetro

let fraseSplit = frase.split(); // ["¡Hola, Mundo!"] 1 solo elemento

fraseSplit = frase.split(''); // [ "¡", "H", "o", "l", "a", ",", " ", "M", "u", "n", "d", "o", "!"] cada letra separada dentro del array

fraseSplit = frase.split('o'); // [ "¡H", "la, Mund", "!" ] 3 elementos eliminando las oes


//* includes() --> Devuelve simplemente true o false si encuentra lo que hayas puesto como parámetro dentro del string

const incluyeAdmiracion = frase.includes('Mundo');

if(incluyeAdmiracion) {
  console.log('La frase contiene por lo menos un símbolo de admiración.');
}

if(!incluyeAdmiracion) {
  // true
  console.log('Todo mal');
}




const edad = prompt('Dime tu edad');

// if(edad !== null && edad !== '' && isNaN(edad) === false) {
if(edad && !isNaN(edad)) {
 
  console.log('Tu edad es ' + edad)
}

if(edad) {
  console.log('👍');
}else {
  console.log('👎');
}
*/
// console.log('includes("Mundo") ->', frase.includes('Mundo'));

// console.log(fraseSplit);

// console.log(frase);


//* Prueba de crear la misma función que indexOf
const palabra = 'tomate';
palabra.indexOf('m'); // 2


function indiceDe(letra, palabra) {
  for(let i=0; i<palabra.length; i++) {
    if (palabra[i] == letra) {
      return i;
    }
  }
}

console.log(indiceDe('e', palabra));
