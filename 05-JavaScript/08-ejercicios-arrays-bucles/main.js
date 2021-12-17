//* Ejercicio 1
//Crear un bucle que imprima por consola la lista de números del 1 al 30, incrementándose de 3 en 3.
/*
for(let i=1; i <= 30; i += 3) {
  console.log(i);
}

console.log('*************************');

let unoAlTrenta = 1;
while(unoAlTrenta <= 30) {
  console.log(unoAlTrenta);

  unoAlTrenta += 3;
}
*/
//* Ejercicio 2
// Utiliza un bucle for para imprimir por la consola la tabla de multiplicar del 8. Y luego otro con las 10 tablas de multiplicar de toda la vida.

for(let i=1; i <= 10; i++){
   //8 x 1 = 8
   //8 x 2 = 16
   //8 x 3 = 24
   console.log(`8 x ${i} = ${8 * i}`)
}

// 1 x 1 = 1
// 1 x 2 = 2
// 1 x 3 = 3
// 1 x 4 = 4
//....
//....
// 2 x 1 = 1
// 2 x 2 = 4
// 2 x 3 = 6
// 2 x 4 = 8

for(let i=1; i <= 10; i++) {
  console.log(`1 x ${i} = ${1 * i}`)
}
