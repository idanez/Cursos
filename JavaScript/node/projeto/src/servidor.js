const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')

//app.get('/produtos', (req, res, next) => {
//   console.log('Middleware 1...')
//    next() //next é necessario para chamar o proximo get (abaixo)
//})

//O trecho abaixo faz com que esse middleware seja atendido para qualquer requisição,
//Por exemplo, mesmo se for usada a url: http://localhost:3030/asdfgjsdfgasd sera atenidade pelo trecho abaixo
//app.use((req, res, next) => {
//    res.send({nome:'Notebook', preco: 123.45}) //Converter para JSON
//})

app.get('/produtos', (req, res, next) => {
    //res.send({nome:'Notebook', preco: 123.45}) //Converter para JSON
    res.send(bancoDeDados.getProdutos())
})

//Cuidado, é necessario ter a barra antes da palavra produtos, senao da problema ao usar a url
app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        perco: req.body.preco
    })
    res.send(produto) //JSON
})

app.listen(porta, () => {
    console.log(`Servidor esta executando na porta ${porta}.`)
})