//* Ejercicio 1
// Escribir un programa que calcule el número de segundos que existen en un día. Para ello debemos crear 3 variables: horas, minutos y segundos. Multiplicaremos los segundos de un minuto por los minutos de una hora, por las horas de un día. El resultado lo guardaremos dentro de otra variable.

const horas = 24;
const minutos = 60;
const segundos = 60;

const segundosDelDia = horas * minutos * segundos;
console.log(`Cada día tiene ${segundosDelDia} segundos.`);

//* Ejercicio 2
// Hacer un conversor de euros a dólares. Crearemos una variable llamada "euros" con un valor inicial de 7. Tenemos que calcular ese valor en dólares. Supondremos que un euro son dos dólares.

const euros = 5000;
const ratioEurosDolares = 1.17;
const ratioEurosRupiasIndias = 15300;
const ratioEurosYenJapones = 13;

const conversion = (euros * ratioEurosDolares).toFixed(2);
console.log(`${euros}€ son aproximadamente ${conversion}$.`)
console.log(euros + "€ son aproximadamente " + conversion + "$.");

//* Ejercicio 3
// El IVA para ciertos artículos es del 21%. Realiza un programa que a partir de una variable precio inicializada con valor 100, calcule el precio con IVA añadiendo el símbolo de euros al final.

const precio = 100;
const IVA = 21;

const incrementoIVA = IVA / 100 + 1;

const pvp = precio + (precio * IVA) / 100;
const pvp2 = precio * incrementoIVA;
console.log(`El precio total de ${precio}€ + el ${IVA}% de IVA es: ${pvp}€.`);

//* Ejercicio 4
// Realiza un programa que a partir de los valores ancho=4 y alto=7, calcule el área de un triángulo en metros cuadrados.

const alto = 7;
const ancho = 4;

const areaTriangulo = alto * ancho / 2;
console.log('El area del triángulo con base ' + ancho + 'm. y altura de ' + alto + 'm. es de ' + areaTriangulo + 'm cuadrados.')

//* Ejercicio 5
// Hacer un conversor de grados centígrados a grados Fahrenheit. Para ello deberé multiplicar por 9/5 y sumar 32.
// Como todo el mundo sabe, 20 grados centígrados son 68 grados Fahrenheit.

const gradosCent = 37;

const resultadoFah = (gradosCent * (9/5) + 32).toFixed(1);
console.log(`${gradosCent}ºC son exactamente ${resultadoFah}ºF.`);

//* Ejercicio 6
/* Vamos a mandar a un usuario una caja. Para ello, partiremos de unos valores y los concatenaremos. Hay que obtener por consola el siguiente mensaje:

*`[nombre]` ha pedido una caja de `[material]` con unas dimensiones `[dimensiones]`. Y añade: `[comentario]`.*

Con los siguientes datos:

***Ivan ha pedido una caja de madera con unas dimensiones diminutas. Y nos añade: Que sea muy bonita*** */

const nombre = 'Ivan';
const material = 'madera';
const dimensiones = 'diminutas';
const comentario = 'Que sea muy bonita';

console.log(`${nombre} ha pedido una caja de ${material} con unas dimensiones ${dimensiones}. Y añade: ${comentario}`);


const nombrePrompt = prompt('Dime tu nombre:');
const materialPrompt = prompt('¿De qué material es la caja que quieres pedir?');
const dimensionesPrompt = prompt('¿De qué dimensiones quieres la caja?');
const comentarioPrompt = prompt('Si quieres puedes dejar un comentario:');

console.log(`${nombrePrompt} ha pedido una caja de ${materialPrompt} con unas dimensiones ${dimensionesPrompt}. Y añade: ${comentarioPrompt}`)