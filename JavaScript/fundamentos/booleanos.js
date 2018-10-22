let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
//Tecnica para usar o numero 1 como booleano. Porem se estiver em um if por exemplo, se comporta como booleano
console.log(!!isAtivo) //Dupla negação retorna ao estado booleano original.

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log(!!(isAtivo = 33))
console.log(!!(isAtivo = Infinity))

console.log("os falsos...")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN) //Not a number
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar')
console.log(!!('' || null || 0 || ' ')) //Tem que ser verdadeiro
console.log(!!('' || null || 0 || 'epa' || 123))

let nome = ''
console.log(nome || 'Desconhecido')

nome = 'Daniel'
console.log(nome || 'Desconhecido')
