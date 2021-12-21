//* FUNCIONES ANÓNIMAS


// función normal
function suma(x, y) {
  return x + y;
}

// función anónima. Me permite guardarla dentro de una constante y que no pueda ser mreasignada.
const resta = function (x, y) {
  return x - y;
}

//! ¡OJO! su queremos llamar a la función antes de crearla, tendremos un error ya que para javascript no existe todavía.

console.log(resta(5,3));
console.log(suma(2,3));
console.log(suma);
console.log(resta);

//* FUNCIONES FLECHA

// Versión normal
function multiply(x, y) {
  return x * y;
}

// Versión anónima
const multiply1 = function(x, y) {
  return x * y;
}

// Versión flecha
const multiply2 = (x, y) => console.log(x * y)

// Versión flecha más simplificada, si solo hay una linea de código, podemos eliminar las llaves. PERO, si además la única línea que tiene es un return, tenemos que quitarle la palabra return.
const multiply3 = (x, y) => {return x * y};

console.log(multiply3(3 , 4));

// Conversor euros a dólares


const eurosUsuario = prompt('Dime cuantos € quieres pasar a $.')

const dolares = eurosDolares(eurosUsuario);

console.log(dolares);













function eurosDolares(euros) {
  const ratioEurosDolares = 1.13;
  const resultado = euros * ratioEurosDolares;
  return resultado.toFixed(2);
}
