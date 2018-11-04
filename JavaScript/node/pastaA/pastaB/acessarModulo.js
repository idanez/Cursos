//com o nome do modulotudo em minusculo
 // Funciona em MAC e em Windows porem NAO no LINUX.
 //Entao usar o nome com o case correto
//const moduloA = require('../../moduloa') 
const moduloA = require('../../moduloA') 
console.log(moduloA.ola)

const c = require('./pastaC')
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia')
    res.end()
}).listen(8080)
