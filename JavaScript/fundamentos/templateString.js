//Funcionalidade "nova" do JavaScript, a partir de 2005


const nome = 'Rebeca'
const concatenacao = 'Ola ' + nome + '!'

const template = ` 
    Ol�
    ${nome}!` // Considera a quebra de linha por exemplo

console.log(concatenacao, template)

//expressoes
console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase() //Fun��o "Arrow". Sera explicad com mais detalhes � frente
console.log(`Ei... ${up('cuidado')}!`)