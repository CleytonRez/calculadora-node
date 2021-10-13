// Common JS - Antes do ES6.
// const { sum } = require('./services/operations')

// ES6
import { divide, multiplies, subtract, sum } from './services/operations'
import express, { response } from 'express'

const app = express();
console.log(sum(3, 5));

app.get('/', function (req, res) {
    res.send('hello world')
})

app.get('/soma', (request, response) => {
    console.log(request.query)
    const valorA = request.query.valorA
    const valorB = request.query.valorB
    response.json({ result: sum(Number(valorA), Number(valorB)) })
    // response.send('A Soma dos Numeros é ' + sum(Number(valorA), Number(valorB)))
})

app.get('/subtrai', (request, response) => {
    console.log(request.query)
    const valorA = request.query.valorA
    const valorB = request.query.valorB
    response.json({ result: subtract(Number(valorA), Number(valorB)) })
    // response.send('A Subtração dos Numeros é ' + subtract(Number(valorA), Number(valorB)))
})

app.get('/multiplica', (request, response) => {
    console.log(request.query)
    const valorA = request.query.valorA
    const valorB = request.query.valorB
    response.json({ result: multiplies(Number(valorA), Number(valorB)) })
    // response.send('A Multiplicação dos Numeros é ' + multiplies(Number(valorA), Number(valorB)))
})

app.get('/divide', (request, response) => {
    console.log(request.query)
    const valorA = request.query.valorA
    const valorB = request.query.valorB
    response.json({ result: divide(Number(valorA), Number(valorB)) })
    // response.send('A Divisão dos numeros é ' + divide(Number(valorA), Number(valorB)))
})

app.listen(3000)