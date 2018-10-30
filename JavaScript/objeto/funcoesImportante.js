const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa)) //Array composto de arrays de elementos

Object.entries(pessoa).forEach(element => {
console.log(`${element[0]}: ${element[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //Diz se essa propriedade vai aparecer caso seja pedido o Object.keys por exemplo. Mudar esse valor para false e observar o console.log que exibe as chaves
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ECMAScript2015)
const dest = {a: 1}
const o1 = {b:2}
const o2 = {c:3, a:4}
//Concatena todos os objetos informados e assinala ao objeto de destino informado
const obj = Object.assign(dest, o1, o2) //Pode passar quantos objetos quiser para o objeto de destino

Object.freeze(obj)
obj.c = 1234

console.log(obj)
