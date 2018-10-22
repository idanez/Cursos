//Funcionalidade "nova" do JavaScript, a partir de 2005


const nome = 'Rebeca'
const concatenacao = 'Ola ' + nome + '!'

const template = ` 
    Olá
    ${nome}!` // Considera a quebra de linha por exemplo

console.log(concatenacao, template)

//expressoes
console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase() //Função "Arrow". Sera explicad com mais detalhes à frente
console.log(`Ei... ${up('cuidado')}!`)