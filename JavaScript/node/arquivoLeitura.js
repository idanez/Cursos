const fs = require('fs') //Modulo de File System do Node

// __dirname esta presente em todos os modulos do Node que representa o diretorio atual
const caminho = __dirname + '/arquivo.json'

//sincrono <= trava o event loop ate que o arquivo seja lido
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono <= Passa uma funcao de callback que sera chamado apenas quando o arquivo tiver sido lido
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo) // O conteudo é uma string
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json') //Forma mais rapida de acessar um JSON. Porem de forma sincrona
console.log(config.db)

//Ler o conteudo de  uma pasta. Assincrono
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta')
    console.log(arquivos)
})