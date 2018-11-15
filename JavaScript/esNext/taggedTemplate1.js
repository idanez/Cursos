//tagged templates - processar o template dentro de uma função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}

const aluno = 'Gui'
const situacao = 'Aprovador'
console.log(tag `${aluno} está ${situacao}.`)