/**
 * Devuelve un string indicando si el número es positivo, negativo o cero.
 * @param {number} numero
 * @returns {string}
 */
function verificarNumero(numero) {
  if (numero > 0)
    return `${numero} es positivo.`;
  else if (numero < 0)
    return `${numero} es negativo`;
  else
    return 'El número es cero';
}

console.log(verificarNumero(0));
console.log(verificarNumero(3));
console.log(verificarNumero(-5));
console.log(verificarNumero(8));

/**
 * Devuelve si con la edad dada puede votar o no.
 * @param {number} edad - La edad a verificar.
 * @returns {string} - Mensaje que indica si puede o no votar.
 */
function puedeVotar(edad) {
  if (edad >= 18)
    return 'Puede votar';
  else
    return 'No puede votar';
}

console.log(puedeVotar(23));
console.log(puedeVotar(5));
console.log(puedeVotar(18));
console.log(puedeVotar(56));

/**
 * Devuelve el mayor de dos números y si son iguales un mensajes indicándolo.
 * @param {number} n1 - Primero número.
 * @param {number} n2 - Segundo número.
 * @returns {*} - El número mayor o el mensaje que indica si son iguales.
 */
function mayorDeDos(n1, n2) {
  if (n1 === n2)
    return 'Los dos números son iguales';
  else
    return n1 > n2 ? n1 : n2;
}

console.log(mayorDeDos(2, 8));
console.log(mayorDeDos(5, 5));
console.log(mayorDeDos(4, 20));
console.log(mayorDeDos(1, -1));

/**
 * Devuelve true si el número es divisble entre 5 y false en caso contrario.
 * @param {number} numero - Número a comprobar si es divisible.
 * @returns {boolean}
 */
function esDivisiblePorCinco(numero) {
  return numero % 5 ? 'false' : 'true';
};

console.log(esDivisiblePorCinco(25));
console.log(esDivisiblePorCinco(12));
console.log(esDivisiblePorCinco(9));
console.log(esDivisiblePorCinco(50));

/**
 * Devuelve la clasificación de la nota que recibe.
 * @param {number} nota - Nota a evaluar de 0 a 100.
 * @returns {string} - La calificación.
 */
function clasificarNota(nota) {
  if (typeof nota === 'number' && nota > 0 && nota <= 100) {
    if (nota >= 90)
      return 'Excelente';
    else if (nota >= 70)
      return 'Buena';
    else if (nota > 50)
      return 'Regular';
    else
      return 'Insuficiente';
  } else
    return 'Nota inválida';
}

console.log(clasificarNota(0));
console.log(clasificarNota('Esto es un valor no válido para este parámetro'));
console.log(clasificarNota(42));
console.log(clasificarNota(65));
console.log(clasificarNota(81));
console.log(clasificarNota(97));
