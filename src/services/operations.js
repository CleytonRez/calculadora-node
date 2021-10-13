// Exporta variavel (funcao, const, let)

/**
 * Realiza Soma
 * @param {number} a 
 * @param {number} b 
 * @returns number
 */
export const sum = (a, b) => {
    return a + b;
}

/**
 * Realiza Subtracao
 * @param {number} a 
 * @param {number} b 
 * @returns number
 */
export const subtract = (a, b) => {
    return a - b;
}

/**
 * Realiza Multiplicacao
 * @param {number} a 
 * @param {number} b 
 * @returns number
 */
export const multiplies = (a, b) => {
    return a * b;
}

/**
 * Realiza divisao
 * @param {number} a 
 * @param {number} b 
 * @returns number
 */
export const divide = (a, b) => {
    return a / b
}

const operations = {
    sum: sum
}
// Common JS - Antes do ES6.
// module.exports = operations;

// ES6 - Exporta a variavel como padrao.
export default operations