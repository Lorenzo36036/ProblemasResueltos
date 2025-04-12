// Lorenzo Parra V28727109 Ejercicio 2

/* Dado un número entero no negativo n, a) genere los coeficientes del polinomio (x+1)^n muestre el
resultado de polinomio y b) muestre por pasos el cálculo para x dado, f(x) = (x+1)n ,según el
polinomio generado.
Para generar los polinomios de (x+1)n

utilice el triangulo de pascal: 

*/
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

function generarTrianguloDePascal(n) {
  const fila = [1]; //almacena los coeficientes

  for (let i = 0; i < n; i++) {
    //fórmula recursiva para calcular los coeficientes binomiales que aparecen en el Triángulo de Pascal.
    fila.push( fila[i] * (n - i) / (i + 1)  )  }

  return fila;
}

function construirPolinomio(n, exponentePoli, coeficientePoli) {
  const coeficientes = generarTrianguloDePascal(n);
  let polinomio = "";
  coeficientes.forEach((coef, expo) => {
    const exponente = n - expo;
    if (expo !== 0) {
      polinomio += " + ";
    }
    // Construyendo el polinomio visualmente representativo
    if (exponente > 1) {
      //Si el exponente es mayor a uno entrara a la condicion, para luego con un operador ternario verificar y concatenar  el coeficiento conjunto la expresion con su exponente
      polinomio += (coef !== 1 ? coef : "") + `x^${exponente}`;
    } else if (exponente === 1) {
      //si el exponente es igual a uno entrara a la a la condicion, para luego con un operador ternario verificar y concatenar con la expresion sin exponente ya que es 1
      polinomio += (coef !== 1 ? coef : "") + `x`;
    } else {
      polinomio += coef; //Sino cumplen ninguna de las condiciones quiere decir que llego al final del polinomio por lo que no tiene expresion ni exponente
    }

    exponentePoli.push(exponente);
    coeficientePoli.push(coef);
  });

  return polinomio;
}

const rl = readline.createInterface({ input, output });
let exponentePoli = [];
let coeficientePoli = [];

rl.question(
  "Coloca el numero de la fila para sacar los coeficientes: ",
  (fila) => {
    console.log(construirPolinomio(fila, exponentePoli, coeficientePoli));
    let resultadoTotal = 0;
    let resultadoOperacion = 0;

    rl.question("Coloca el numero de X para resolver:", (numeroDeX) => {
      for (let i = 0; i < exponentePoli.length; i++) {
        resultadoOperacion = coeficientePoli[i] * Math.pow(numeroDeX, exponentePoli[i]);
        resultadoTotal += resultadoOperacion;
        console.log(
          coeficientePoli[i],
          "*",
          numeroDeX,
          "^",
          exponentePoli[i],
          " = ",
          resultadoOperacion
        );
      }
      console.log("La Suma Total", resultadoTotal);
    rl.close()
    });
  }
);
