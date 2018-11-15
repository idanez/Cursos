const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
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

//É necessario passar a informação extended: true senao dara warnings.
app.use(bodyParser.urlencoded({ extended: true}))

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
        nome: req.body.nome,
        perco: req.body.preco
    })
    res.send(produto) //JSON
})


app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        perco: req.body.preco
    })
    res.send(produto) //JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) //JSON
})

app.listen(porta, () => {
    console.log(`Servidor esta executando na porta ${porta}.`)
})