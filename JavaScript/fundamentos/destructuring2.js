const [a] = [10]
console.log(a)
const [n1, , n3, , n5, , n6 = 0] = [10, 7, 9, 8] //<- A posicao vazia � ignorada, ou seja, nao seta o valor definido
console.log(n1, n3, n5, n6)

const [,[, nota]] = [ [ , 8, 8] , [ 9, 6, 8] ] //<- nao � algo comum ou necessario de ser usado
console.log(nota)

