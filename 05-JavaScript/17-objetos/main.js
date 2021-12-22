/**
 *  Dentro de una variable podemos guardar:
 *    Valores primitivos únicos:
 *            String
 *            Number
 *            Boolean
 *            null
 *            undefined
 *            Symbol
 *    Varios valores en una misma variable:
 *            Arrays
 *    Funciones para ejecutar código y para retornar información:
 *            function
 *            () => {}
 * 
 *    Objetos --> Nos dan la posibilidad de guardar varios datos que hacen referencia a una misma cosa
 * 
 */
/*

//* Creación de un objeto literal    // const objeto = { propiedad: valor }
//*                                     const object = { key: value }

const persona = { 
  edad: 34,
  nombre: 'Ivan',
  sexo: 'masculino',
  amigos: ['Juan', { nombre: 'Maria' }],
  direccion: {
    calle: 'Wallaby, 42, Sydney',
    cp: '02574'
  }
};


const personas = [ {nombre: 'ivan', edad: 34}  , { nombre: 'Manuel', edad: 35 }];

console.log(personas);


// // Podemos cambiar en cualquier momento el valor de una de las propiedades
// persona.edad = 23;

// // Podemos también añadir de formar literal una propiedad que no exista
// persona.colorPelo = 'castaño claro';

// console.log(persona);

const arr = ['Ivan', 'Kira', 'Freya'];

const obj = { nombre: 'Ivan', edad: 34, amigos: 4};


// Así como en los arrays podemos ver lo que hay dentro de un índice poniendo el índice entre corchetes, también podemos ver lo que hay dentro de una propiedad de un objeto poniendo el índice de esa propiedaa dentro de los corchetes
// console.log(arr[0]); // 'Ivan'
// console.log(obj['edad']); // 34

//* for...in
// Podemos recorrer un objeto utilizando el for...in

// for(let index in obj) {  
//   console.log(`${index} : ${obj[index]}`)
// }

//* Todos los objetos también pueden contener funcionalidades.

const coche = {
  marca: 'Volkswagen',
  puertas: 5,
  color: 'rojo',

  // Esto que es lo mismo que una función, al estar dentro de un objeto se le llama método
  arrancar: function() {
    console.log('Pruuummmm! 🚕💨');
  },


  // Podemos variar cualquier propeidad de un objeto desde dentro de un método. Para ello es necesario utilizar la palabra this, que hace referencia a este mismo objeto
  cambiarPuertas: function(numPuertas) {
    this.puertas = numPuertas;
    console.log(`Ahora el coche tiene ${this.puertas} puertas.`);
  }

}


coche.arrancar();
coche.cambiarPuertas(3);
console.log(coche.puertas);

*/
//* Por lo general nos encontramos la info que vemos por la web de la siguiente forma, un array que contiene varios objetos.

const arrayDeUsuarios = 
[
  {id: 1, nombre: 'ivluengo',email: 'ivan@email.com' },
  {id: 2, nombre: 'manu33', email: 'manu@email.com' },
  {id: 3, nombre: 'anne74', email: 'anna@email.com' }
];


for(let usuario of arrayDeUsuarios) {
  console.log(usuario.nombre);
}
