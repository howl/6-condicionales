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
