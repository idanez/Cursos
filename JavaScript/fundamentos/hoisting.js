//Efeito de javascript. Curiosidade da linguagem

console.log('a =',a)
var a = 2 //O javascript vai "I�AR" essa variavel, fazendo com que a declara��o dela venha antes de qualquer outra senten�a de c�digo.
//PS.: N�O � UMA BOA PRATICA. IDEAL � COME�AR DECLARANDO AS VARIAVEIS
console.log('a =',a)

/*
O Java Script converte o trecho acima no seguinte codigo:
var a
console.log('a =',a)
var a = 2 //O javascript vai "I�AR" essa variavel.
console.log('a =',a)
*/

console.log('b =', b)
let b = 2 //Nao funciona com let...
console.log('b =', b)
