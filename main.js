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
