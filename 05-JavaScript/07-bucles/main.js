//? Los bucles sirven para repetir automáticamente un número de veces código



//* Bucle for
// Es un bucle determinado, es decir, hay que decirle cuantas vueltas tiene que hacer.
// Se escribe con 3 partes:
  // - Inicializar una o varias variables
  // - Número de vueltas a través de una condición
  // - Incremento o decremento le damos a la variable en cada vuelta

// for(let variable = 0; variable < 10; variable = variable + 1  ) {
//   console.log(variable + 1);
// }
/*
// Podemos tranquilamente meter un if o un for dentro del for o lo que nos dé la gana
for(let i=1; i <= 100; i++) {
  if(i % 2 === 0) {
    console.log('PAR');
  }else {
    console.log('IMPAR');
  }
}

for(let i=1; i<=10; i++) {
  console.log(`i: ${i}`); // Esto lo imprime una vez por vuelta
  
  for(let j=1; j<=3; j++){
    
    console.log(`j: ${j}`); // Esto lo imprimirá 3 veces por cada vuelta de i
  }

}
*/


//* Utilizar un bucle para recorrer un array
let nombres = ['Anna', 'Lorena', 'Jorge', 'Manuel', 'Youssef'];

// console.log(nombres[0]);
// console.log(nombres[1]);
// console.log(nombres[2]);
// console.log(nombres[3]);

// for(let i=0; i < nombres.length; i++) {
//   console.log(`${i+1}: ${nombres[i]}`);  
// }

//* break; y continue;
// break --> sirve para salir del bucle cuando le digamos y no lo sigue ejecutando
// continue --> se salta UNA vuelta del bucle

/*
// voy a hacer que de vueltas hasta que se encuentre con un múltiplo de 5
for (let i=1; i <= 10; i++) {
  if(i % 5 === 0) {    
    break;
    // continue;
  }
  
  console.log(i);
}
*/
//* for...of
/*
const frutas = ['pera', 'manzana', 'plátano', 'mandarina'];
const numeros = [2,4,6,8,10];

for(let fruta of frutas) {
  console.log(fruta);
}

for(let numero of numeros) {
  console.log(numero);
}*/

//* while  --> mientras que... --> comprueba la condición antes de empezar a ejecutar lo que haya dentro
/*
let pass = '1234';
while(pass != '1234') { //! no se ejecuta

  pass = prompt('Pon tu contraseña con while.'); 
}



//* do....while --> haz esto y luego repítelo hasta que no se cumpla la condición, es decir, ejecuta el código SIEMPRE por lo menos una vez y luego ya comprueba la condición

let password = '1234';
do {                    //* Sí se ejecuta una vez
  password = prompt('Pon tu contraseña con do...while.')
}while(password != '1234')
*/


for(let i=1; i<=10; i++) {
  console.log(i);
}