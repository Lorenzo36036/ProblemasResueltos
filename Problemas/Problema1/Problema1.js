//Lorenzo Parra v28727109
/*
Dado una cadena C, valide si C se encuentra en notación fen (Forsyth-Edwards Notation),
Forsyth–Edwards Notation. cadena es un sistema estándar para describir posiciones específicas en
partidas de ajedrez, permitiendo reiniciar el juego desde una posición dada. Desarrollado
inicialmente por David Forsyth y ampliado por Steven J. Edwards, fen se utiliza en la Notación
de Juego Portátil para definir posiciones iniciales distintas a la estándar (Wikipedia, 2025).
  */

const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

function validarcadena(cadena) {
  if (typeof cadena !== "string") return false;

  const cadenaFen = cadena.trim().split(/\s+/);
  if (cadenaFen.length !== 6) return false;

  const [
    piezas,
    turno,
    enroquesPosibles,
    CasillaDeCaptura,
    relojDeMedioMovimiento,
    numeroDeJugadaCompleta,
  ] = cadenaFen;

  // Validar pieza
  const piezasLimpias = piezas.split("/");
  
  if (piezasLimpias.length !== 8) return false;

  const pieceRegex = /^[rnbqkpRNBQKP1-8]+$/;
 
  for (const piezas of piezasLimpias) {
    if (!pieceRegex.test(piezas)) return false;

    // Contar que haya 8 columnas por fila
    let count = 0;
    for (const char of piezas) {
      if (/[1-8]/.test(char)) {
        count += parseInt(char, 10);
      } else {
        count += 1;
      }
    }
    if (count !== 8) return false;
  }

  // Validar turno
  if (!/^[wb]$/.test(turno)) return false;

  // Validar enroque
  if (!/^(-|[KQkq]{1,4})$/.test(enroquesPosibles)) return false;

  // Validar captura al paso
  if (!/^(-|[a-h][36])$/.test(CasillaDeCaptura)) return false;

  // Validar halfmove clock
  if (!/^\d+$/.test(relojDeMedioMovimiento)) return false;

  // Validar fullmove number
  if (!/^[1-9]\d*$/.test(numeroDeJugadaCompleta)) return false;

  return true;
}
const rl = readline.createInterface({ input, output });
rl.question("Ingresa la cadena:", (cadena) => {
    console.log(validarcadena(cadena));
    rl.close();
});
