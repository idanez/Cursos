//Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)

//Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}
console.log(soma(2,3))

//Retorno implicito
const subtracao = (a, b) => a - b // Quando nao tem a chaves � uma que executa uma unica linha e retorna o resultado
console.log(subtracao(2,3))

const imprimir2 = a => console.log(a)
imprimir2('LEGAL!!!')