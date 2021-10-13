// Exporta variavel (funcao, const, let)
export const sum = (a, b) => {
    return a + b;
}

export const subtract = (a, b) => {
    return a - b;
}

export const multiplies = (a, b) => {
    return a * b;
}

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