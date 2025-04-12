/*
3) implemente la evaluación de expresiones aritméticas considerando los operadores +,-,*,/ y los
operandos pueden ser ingresados en notación científica (125E25,5E-8 para denotar 12x1025
, 5x10-8
respectivamente), la entrada al programa será una cadena de caracteres con la expresión, ejemplo
de expresión a evaluar: (125E10 – 1e15)/5E-85*15.
*/
const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

  function convertirANotacion10(expresion) {
    // Reemplaza las ocurrencias de E o e por 10^
    return expresion.replace(/([0-9])([eE])([+-]?\d+)/g, '$1*10^$3');
  }
  
  function evaluarExpresion(expresion) {
    let exprLimpia = expresion.replace(/\s+/g, ""); // quitar espacios
    exprLimpia = exprLimpia.replace(/–/g, "-"); //reemplazar guion largo por guion corto
  
    // Validar si la expresión contiene solo caracteres válidos.
    if (!/^[0-9Ee+\-*/().]+$/.test(exprLimpia)) {
      console.log("Expresión contiene caracteres inválidos.");
      return;
    }
  
    // Convertir la expresión a la notación de 10^x para mostrarla correctamente
    let expresionConNotacion10 = convertirANotacion10(expresion);
  
    // Mostrar la expresión con notación científica convertida
    console.log("\n \n")
    console.log("Expresión a evaluar (con notación 10^x):", expresionConNotacion10);
  
    // Evaluar la expresión con la notación ajustada
    const resultado = eval(exprLimpia);
  
    return resultado;
  }


// Ejemplo de uso:
const rl = readline.createInterface({ input, output });
rl.question("Ingresa la cadena:", (cadena) => {
  const resultado = evaluarExpresion(cadena);

  console.log("Resultado:", resultado);

  rl.close();
});
