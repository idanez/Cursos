function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // Simulação de xor
    const manterSaudavel = !comprarSorvete //operador unario

    //Retorna um objeto contendo as variaveis definidas acima
    //ES 2015 nao precisa explicitamente infomrar chave valor, fazendo da forma abaixo,
    //internamente ele cria uma chave com o mesmo nome da variavel e o valor da variavel
    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))