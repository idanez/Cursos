//Modulo cliente sera usado como padrao de modulo que ira usar outros modulos
const moduloA = require('./moduloA') //nao precisa colocar a extensao 
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite)
console.log(moduloB)