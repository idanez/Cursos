let a = 3

global.b = 123
this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(this.a)
//global é o nome do escopo global do Node.js. O equivalente ao window no browser
console.log(global.a)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//No Node.js as pessoas estao mais acostumadas a usar da forma abaixo
//module.exports = {e:456, f: false, g: 'teste'}

// criando uma variavel maluca, sem var nem let
//Na realidade coloca a variavel diretamente no contexto global do Node
//Nao fazer dessa forma...
abc = 3
console.log(global.abc)

//A sugestao é que é importante conhecer o 'runtime' onde o JavaScript sera rodado.
//Se é com o Node.js no backend, no browser e etc...
//Sempre fuja do escopo global ao definir variavies