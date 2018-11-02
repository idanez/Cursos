const carrinho = [
    '{"nome": "Borracha", "preco":3.45}',
    '{"nome": "Caderno", "preco":13.90}',
    '{"nome": "Kit de Lapis", "preco":41.22}',
    '{"nome": "Caneta", "preco":7.5}'
]

//Retornar um array apenas com os preços

//Minha solucao
const precos = carrinho.map(jsonItem => JSON.parse(jsonItem).preco)
console.log(precos)

//Solucao da aula
const paraObjeco = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeco).map(apenasPreco)
console.log(resultado)
