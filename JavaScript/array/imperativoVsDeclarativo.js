const alunos = [
    {nome: 'Joao', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]

//Imperativa
let total1 = 0
for(let i = 0; i < alunos.length; i++ ) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

console.log("---------------------------")

//Declarativo
const getNota = aluno => aluno.nota
const soma = (total1, atual) => total1 + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

//SQL é mais declarativo, ex.:
//select codigo, nome, email from clientes where ativo = 1