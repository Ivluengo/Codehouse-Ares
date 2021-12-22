//* Lista de tareas V1.0


const nombres =  [
  'Ivan', 
  'Jessica', 
  'Kira'
];

let contadorID = 3;
const tareas = [
  { id: 1 , nombre: 'Estudiar JavaScript 💻' },
  { id: 2 , nombre: 'Pasear a las perras 🐶' },
  { id: 3 , nombre: 'Ir a comprar al súper 🛒' }
];


const createTodo = () => {
  contadorID++;
  const nombreTodo = prompt('Dime una nueva tarea:');
  const newTodo = {
    id: contadorID,
    nombre: nombreTodo
  };

  tareas.push(newTodo);

  console.clear();
  console.log(`La tarea: "${newTodo.nombre}" se ha añadido correctamente.`);
}


const readTodos = () => {
  console.clear();
  console.log('ESTAS SON TUS TAREAS:');
  for(let i=0; i<tareas.length; i++) {
    console.log( `${tareas[i].id}: ${tareas[i].nombre}`  );
  }
} 


const verifyNumberPrompt = (mensaje = 'Dime un número.') => {
  let number = prompt(mensaje);
             
  if(number.trim() && !isNaN(number.trim())  ){ 
    number = Number(number);
    return number;
  } else{
    console.error('No has escrito un número.')
  }
}




const deleteTodo = () => {
  readTodos();
  const indexDelete = verifyNumberPrompt('Dime el ID de la tarea que quieres borrar.');
  
  
  let encontrado = false;
  // Buscar en el array la tarea con el índice que nos dan
  for(let i=0; i<tareas.length; i++) {

    // Si existe quitarla del array
    if(tareas[i].id === indexDelete){
      console.clear();
      console.log(`Has borrado "${tareas[i].nombre}" de las tareas.`);
      tareas.splice(i, 1);
      encontrado = true;
    }    
  }
  
  // si no existe informar de que no existe
  if(!encontrado) {
    console.clear();
    console.log(`No existe ninguna tarea con el id: ${indexDelete}`);    
  }

}


const updateTodo = () => {
  readTodos();
  const indexUpdate = verifyNumberPrompt('Dime el ID de la tarea que quieres actualizar.');


  let encontrado = false;
  for(let i=0; i<tareas.length; i++) {

    if(tareas[i].id === indexUpdate){
      const nombreTodo = prompt('¿Que tarea quieres poner en su lugar?');
      
      // const nuevoTodo = {
      //   id: tareas[i].id,
      //   nombre: nombreTodo
      // };

      // Versión con spread operator que lo explico justo después
      const nuevoTodo = {...tareas[i], nombre: nombreTodo};

      console.log(`Has modificado la tarea "${tareas[i].nombre}"`);
      tareas.splice(i, 1, nuevoTodo);
      encontrado = true;
    }
  }

  // si no existe informar de que no existe
  if(!encontrado) {
    console.clear();
    console.log(`No existe ninguna tarea con el id: ${indexDelete}`);    
  }



}




//* MENU =======================
let salir = false;
do {
  const respuesta =  prompt(`Bienvenid@ a tu lista de tareas, ¿QUÉ QUIERES HACER?
  (c) CEAR TAREA
  (r) LEER TAREAS
  (u) ACTUALIZAR TAREA
  (d) BORRAR TAREA
  (x) EXIT
  `);


  switch(respuesta) {
    case 'c': {
      // crear una tarea
      createTodo();
      break;
    }
    case 'r': {
      // leer todas las tareas
      readTodos();
      break;
    }
    case 'u': {
      // actualizar una tarea existente
      updateTodo();
      break;
    }
    case 'd': {
      // borrar una tarea
      deleteTodo();
      break;
    }
    case 'x': {
      salir = confirm('Are you sure?');
      break;
    }
    default: {
      console.error('Opción incorrecta, prueba otra.')
    } 

  }



}while(salir === false)