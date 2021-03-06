//Não é uma boa pratica deixar o js na mesma pasta do html, o ideal é deixar fora pois o brower tem acesso a essas pastas
//pela linha de comando, entrar na pasta form e digitar:
//npm init -y para criar o package.json
//insalar o express e o bady parser:
//npm init --save express@4.16.3 body-parser@1.18.2 -E (-E é uma flag para baixar a versao exata informada)
//Executar no terminal: node server.js para iniciar esse js que fica escutando na porta informada (no caso, 3003)

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

//app.get('/usuarios', (req, resp) => {
//    //console.log(req.body)
//    console.log(req.query)
//    resp.send('<h1>Parabéns. Usuario incluido!</h1>')
//})

//De forma gerar, preferir o post do que get...
app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuario incluido!</h1>')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário alterado!</h1>')
})

app.listen(3003)