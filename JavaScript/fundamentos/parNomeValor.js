// par nome/valor
const saudacao = 'Opa' // contexto lexico 1 (Contexto de onde foi definido. No caso, desse arquivo)

function exec() {
    const saudacao = 'Fala' //Outro contexto lexico
    return saudacao
}

//const saudacao <- gera erro pois foi declarado com const.

//Objectos sao grupos anunhados de pares chave/valor

const Cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua bla bla bla',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)