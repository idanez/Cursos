const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

//Nao é muito comum usar dessa forma
for(i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    noma: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}