//pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'} //Vai dar erro pois pessoa é uma constante

Object.freeze(pessoa) //Nao consegue mais mexer absolutamente nada no objeto

pessoa.nome = 'Maria' //Ignora a tentativa de atribuicao
pessoa.end = 'Rua ABC' // Tb nao vai funcionar
delete pessoa.nome // Tb nao funciona. 
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({nome: 'Joao'}) //Ja cria o objeto de forma que nao pode ter nenhuma alteração.


