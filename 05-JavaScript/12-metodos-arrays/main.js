//? Métodos de los arrays

const arr1 = [2, 4, 6, 8];


//* Array.isArray()  --> devuelve true si lo que hay dentro del paréntesis es un Array
console.log(Array.isArray(arr1)); // true

//* push() --> añadir un elemento al final del array | retorna el nuevo length del array
console.log(arr1.push(10));
// tenemos la opción de añadir varias cosas separándolo con comas
console.log(arr1.push(20, 15, 'Ivan', true));

//* pop() --> elimina el último elemento del array | y retorna el elemento eliminado
console.log(arr1.pop());
arr1.pop();
arr1.pop();
arr1.pop();
arr1.pop();

//* unshift() --> la versión push pero añadiendo al principio | retorna el nuevo length del array
arr1.unshift('principio');

//* shift() --> quita el primer elemento del array | y retorna ese elemento eliminado
arr1.shift(); 


//* indexOf() --> devuelve el índice de la posición donde esté lo que le pasemos como parámetro
console.log(arr1.indexOf(6)); // 2


//* reverse() --> invierte el orden de los elementos del array
arr1.reverse();

//* join() --> retorna un string con el separador que le indiquemos

let frase = [ "Me", "encanta", "estudiar", "JavaScript", "con", "Ivan" ];

// frase = frase.join(); // si no pones nada te los junta con comas
// Me,encanta,estudiar,JavaScript,con,Ivan

frase = frase.join('-'); // junta cada elemento del array con un guión por ejemplo
// Me-encanta-estudiar-JavaScript-con-Ivan


//* splice() eliminar elementos del array a trozos
//! splice modifica directamente el array original
//arr1.splice(1); // elimina del 1 al final
console.log(arr1.splice(1,2)); // el primer parámetro dice el índice donde empieza a cortar y el segundo cuantas posiciones va a eliminar --> splice también retorna los elementos quitados dentro de otro array

// también puedo añadir elementos JUSTO DONDE HE CORTADO CON SPLICE, lo hacemos en el tercer parámetro del splice, puedo añadir varios elementos a la vez

arr1.push('Ivan', 'Freya', 'Jessica', 'Kira'); // esto es solo para tener más elementos y jugar con ellos

arr1.splice(3, 1, 'Olga', 400, null);

//en resumidas cuentas, el splice lo utilizamos sobretodo para qutar un elemento de un array y sustituirlo por otro


// Ejemplo:
// Cambia a Jessica por un corazón
arr1.splice(   arr1.indexOf('Jessica'), 1, '💘'   );

//* slice() --> retorna el trozo de arreglo recortado
console.log(arr1.slice(2,3)); // retornaría un array nuevo con el recorte desde la posición 2 hasta la 3

//Ejemplo:
const indexPersona = arr1.indexOf("Kira");
if(indexPersona != -1) {
  console.log(arr1.slice( indexPersona, indexPersona + 2  ));
}





console.log(frase);
console.log(arr1);