// Lorenzo Parra V28727109
/* 
4) Para un programa en un lenguaje L, dado un cadena C escrito en L, 
muestre y cuente la ocurrencia de la palabra E en C.
*/
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');


const rl = readline.createInterface({ input, output });

rl.question("Ingresa la cadena:", (cadena) => {
  rl.question("Ingresa la palabra a buscar:", (palabra) => {
    let regex = new RegExp(palabra, "g"); // Crear una expresión regular global
    let indice = []; //Almacenara Los indice en donde empieza el aray
    let palabrasIguales; //almacenara todos los metodos del regex.exec

    while ((palabrasIguales = regex.exec(cadena)) !== null) {
      indice.push(palabrasIguales.index);
    }
    
    const cadenaDividida = cadena.split(" ");

    let palabrasEncontradas = [];
    for (let i = 0; i < cadenaDividida.length; i++) {
      if (cadenaDividida[i].includes(palabra)) {
        palabrasEncontradas.push(cadenaDividida[i]);
      }
    }
    console.log(" \n ")
    console.log("Palabras Encontradas", palabrasEncontradas);
    console.log(`Ocurrencias encontradas de la palabra [${palabra}]:`,indice.length);
    console.log("Posiciones en la cadena:", indice);
  });
});
