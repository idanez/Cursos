//novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco : {
        rua : 'Rua ABC',
        numero: 1000
    }
}

//Forma de em 1 unica linha tirar de um objeto varios atributos
const { nome, idade } = pessoa //<- Tire de dentro do objeto pessoa, os atributos nome e idade
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const {endereco : {rua, numero, cep} } = pessoa
console.log(rua, numero, cep)

const { conta: { ag, num }} = pessoa
console.log(ag, num) //<- vai gerar erro...