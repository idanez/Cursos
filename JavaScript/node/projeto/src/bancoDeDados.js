const sequence = {
    _id: 1,
    get id() {return this._id++}
}

const produtos = {}

function salvarProduto(produto) {
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id) {
    return produtos[id] || {}
}

function getProdutos() {
    return Object.values(produtos)
}

//As funcoes aqui dentros estao visiveis apenas nesse modulo do node, o codigo abaixo
//faz com que o que foi especificado fique visivel para todo o sistema
module.exports = {salvarProduto, getProduto, getProdutos}