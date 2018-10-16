//Array é um tipo de dados dinamico, pode crescer ou diminuir de tamanho
//Nao precisa conter apenas um tipo de dados, pode misturar, porem nao é uma boa pratica

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)

valores[10] = 30
console.log(valores)

console.log(valores.length)
valores.push({id: 3}, false, null, 'teste') //Adiciona elemento(s) após o ultimo indice
console.log(valores)

console.log(valores.pop()) //retira e retorna o ultimo valor do array
delete valores[0]
console.log(valores)

console.log(typeof valores)
