
const imprimir = (texto) => {
  console.log(texto);
}


const hastaCien = (funcionCualquiera) => {
  for(let i=1; i<=100; i++) {

    funcionCualquiera(i);    
    
  }
}


const soloPares = (numero) => {
  if(numero % 2 === 0) {
    console.log(numero);
  }
}

const soloMultiplosTres = (numero) => {
  if(numero % 3 === 0) {
    console.log(numero);
  }
}

hastaCien(soloPares);

hastaCien(function(numero){
  if(numero % 5 === 0){
    console.log(numero);
  }
});

hastaCien((numero) => console.log(numero * 2) );
