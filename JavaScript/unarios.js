let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--) //O -- no final faz com que a comparação aconteca ANTES de incrementar o num2
console.log(num1 === num2)
