console.log(typeof Array, typeof new Array, typeof [])

//Array em JS é dinamico, cresce e diminui de forma dinamica
//Com boa pratica, deve-se trabalhar com dados homogeneos, ou seja, um array sempre possui o mesmo tipo de dados,
//apesar do JS aceitar qualquer tipo de dado no mesmo array.

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia') //Adiciona um elemento na ultima posicao do array
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados)
console.log("-------------------------")
aprovados.sort()
console.log(aprovados)

console.log("-------------------------")
delete aprovados[1] //Nao reordena o array, apenas o indice deletado fica undefined
console.log(aprovados[1])
console.log(aprovados[2])

console.log("------------------------")
aprovados = ['Bia', 'Carlos', 'Ana']
//Splice adiciona, remove, ou adiciona e remove ao mesmo tempo
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') 
console.log(aprovados)

console.log("------------------------")
aprovados = ['Bia', 'Carlos', 'Ana']
//parametro 1 = indicie a partir de qual a operacao vai acontecer
//parametro 2 = Quantidade de indices que serao removidos
//paramtro 3 em diante = elementos que serao adicionados
aprovados.splice(1, 0, 'Elemento1', 'Elemento2') 
console.log(aprovados)