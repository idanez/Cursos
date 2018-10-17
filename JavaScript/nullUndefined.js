let valor // nao inicializada
console.log(valor) //undefined
//console.log(valor2) // is not defined (Não foi declarado)

valor = null //ausencia de valor
console.log(valor)
//console.log(valor.toString()) // Gera erro....

const produto = {}
console.log(produto.preco) // undefined
//console.log(produto.preco.a) //Gera erro pois preco nao foi definido

produto.preco = 3.50
console.log(produto)
//evite atribuir undefined de forma explicita. Deixar pra linguagem.
//Se quiser resetar o valor preferir atribuir 0 ou null
produto.preco = undefined

console.log(!!produto.preco)
console.log(produto)

delete produto.preco // remove o atributo do objeto
console.log(produto)

produto.preco = null //Sem preco
console.log(!!produto.preco)
console.log(produto)


