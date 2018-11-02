const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPadPro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plastico', preco: 1.20, fragil: true}
]

//Doc do JS: developer.mozila.org

console.log(produtos.filter(function(p) {
    return p.preco > 500 && p.fragil
}))
console.log("----------------------")

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))