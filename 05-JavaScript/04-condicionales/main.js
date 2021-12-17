//? Condicionales

//* Operadores condicionales
/*
// Mayor que... -->                          >
// Menor que... -->                          <
// Mayor o igual que... -->                  >=
// Menor o igual que... -->                  <=
// Igual que... -->                          ==

console.log(23 == 23);
console.log(23 == 40);
console.log(23 == '23')

// Igual de verdad de la buena... -->        ===
console.log(50 === 50);
console.log(50 === '50');

// Distinto que...  -->   !=
console.log('hola' != 25);
console.log(23 != '23');

// Distinto de verdad de la buena... -->     !==
console.log(23 !== '23');


// Es esto true Y también esto otro?... -->   &&

console.log(10 == 10 && 5 == '5' && 'hola' != 'adios'); 
console.log(10 == 10 && 5 == null && 'hola' != 'adios'); 

// Es esto true O lo es esto otro?... -->     ||
console.log('Ivan' === 'Manuel' || 5 === '5' && null == null);
//                 false      ||    false   &&    true
//                   false    ||         false 
//                           false


//* if --> Si ocurre esto...haz esto

const nombre = 'Carlos'

// if(nombre === 'Carlos') {
//   console.log(`Tu no estás invitado, Carlos`);
// }

//* else if  --> Si, en cambio, ocurre esto...

if(nombre === 'Carlos') {
  console.log('Tu no estás invitado, Carlos');
} else if(nombre === 'Javier' ) {
  console.log('Hola, Javier');
} else if(nombre === 'Ivan') {
  console.log('Hola, Ivan');
}

//* else --> En cualquier otro caso...haz esto


if(nombre === 'Carlos') {
  console.log('Tu no estás invitado, Carlos');

} else if(nombre === 'Javier' ) {
  console.log('Hola, Javier');

} else if(nombre === 'Ivan') {
  console.log('Hola, Ivan');

} else {

  console.log('¡Pase, amigo!');

}

const num1 = 10;
const num2 = 10;



if(num1 > num2) {
  console.log('ES MAYOR');
}

else {
  console.log('ES OTRA COSA');
}
*/

//* SWITCH

const color = prompt('Dime un color entre rojo, azul, verde, amarillo y naranja');

//? el console.time() junto con el console.timeEnd() nos sirve para ver cuanto tiempo tarda en ejecutar algo javascript
console.time('If');
if(color === 'rojo') {
  console.log('El color de la pasión.♥');
}else if(color === 'amarillo' || color === 'naranja') {
  console.log('Como el Sol! 🌞');
}else if(color === 'azul') {
  console.log('Igual que el mar. 🌊');
}else if(color === 'verde') {
  console.log('Como los pepinos.🥒');
}else {
  console.log('No has puesto una opción correcta.');
}
console.timeEnd('If');



console.time('Switch');
switch(color) {
  case 'rojo': {
    console.log('El color de la pasión.♥');
    break;
  }
  case 'verde': {
    console.log('Como los pepinos.🥒');
    break;
  }
  case 'amarillo': 
  case 'naranja' : {
    console.log('Como el Sol! 🌞');
    break;
  }
  case 'azul': {
    console.log('Igual que el mar. 🌊');
    break;
  }
  default: {
    console.log('No has puesto un color correcto.');
  }
}
console.timeEnd('Switch');