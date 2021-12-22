//? SPREAD OPERATOR

/*
//* Para duplicar arrays
const arr1 = [1,2,3]; // 0x123
const arrError = arr1; //0x123  //! Esto es un error

const arr2 = [...arr1]; //  0x456

arr2[1] = 'Ivan';

console.log(arr1);
console.log(arr2);


//* para duplicar objetos

const persona1 = {    // 0x736
  nombre: 'Ivan',
  edad: 34,  
} 
const persona2 = {...persona1};  // 0x163

persona2.nombre = 'Youssef';

console.log(persona1);
console.log(persona2);

//********************************

*/

//* Para juntar arrays

// const array1 = [1,2,3];
// const array2 = [4,5,6];

// const arraySpread = [...array2, 'Itaney', ...array1]

// console.log(arraySpread);

//* Para juntar objetos

const pers1 = {nombre: 'Ivan', edad: 34};
const pers2 = {nombre: 'Lorena', edad: 19, hobby: 'Pokemon'};
const pers3 = {nombre: 'Itaney', pelo: 'corto'};


const persSpread = { ...pers1, ...pers2, ...pers3 };

console.log(persSpread);

//* Para crear un nuevo objeto añadiendo o modificando propiedades de objeto ya existente

const coche = {
  color: 'rojo',
  puertas: 5,
  modelo: '206',
  marca: 'Peugeot'
}
// Podemos modificar cualquier propiedad que ya tenga o añadir nuevas
const coche2 = {...coche,  modelo: '405', puertas: 3, aireAcondicionado: true };
console.log(coche);
console.log(coche2);
