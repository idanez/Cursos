Array.prototype.map2 = function(callback) {
    // newArray = new Array <- Minha solucao
    const newArray = []
    for(i = 0; i < this.length; i++) {
        //newArray[i] = callback(this[i], i, this) <- minha solucao
        //forma diferente mas o resultado final foi o mesmo
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco":3.45}',
    '{"nome": "Caderno", "preco":13.90}',
    '{"nome": "Kit de Lapis", "preco":41.22}',
    '{"nome": "Caneta", "preco":7.5}'
]

//Retornar um array apenas com os preços

//Minha solucao
const precos = carrinho.map2(jsonItem => JSON.parse(jsonItem).preco)
console.log(precos)
console.log("------------------------")
//Solucao da aula
const paraObjeco = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeco).map2(apenasPreco)
console.log(resultado)
