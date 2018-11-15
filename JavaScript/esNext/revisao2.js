//Arrow function
const soma = (a,b) => a + b // return implicito
console.log(soma(2,3))

//Arrow function (this)
const lexico1 = () => console.log(this === exports) //true
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

//parametros default
function log(texto = 'Node') {
    console.log(texto)
}
log()
log(undefined)
log(null)
log('Sou mais forte')

//operador rest (...var) (ou spread, mas no contexto de funcao o nome correto é rest)
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2,3,4,5))