//Efeito de javascript. Curiosidade da linguagem

console.log('a =',a)
var a = 2 //O javascript vai "IÇAR" essa variavel, fazendo com que a declaração dela venha antes de qualquer outra sentença de código.
//PS.: NÃO É UMA BOA PRATICA. IDEAL É COMEÇAR DECLARANDO AS VARIAVEIS
console.log('a =',a)

/*
O Java Script converte o trecho acima no seguinte codigo:
var a
console.log('a =',a)
var a = 2 //O javascript vai "IÇAR" essa variavel.
console.log('a =',a)
*/

console.log('b =', b)
let b = 2 //Nao funciona com let...
console.log('b =', b)
