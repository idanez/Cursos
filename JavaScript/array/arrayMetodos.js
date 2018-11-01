const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() //remove o ultimo indice do array
console.log(pilotos)

pilotos.push('Verstappen') //adiciona na ultima posicao
console.log(pilotos)

pilotos.shift() //remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') //Adiciona um elemento no indice 0
console.log(pilotos)

//Splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2,0,'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array a partir do indice informado
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // do indice 1 ao 4, porem o ultimo nao é incluido
console.log(algunsPilotos2)


