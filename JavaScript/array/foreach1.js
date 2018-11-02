const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
/*
parametros do forEach de um array:
1 - conteudo do indice corrente
2 - numero do indice corrente
3 - O proprio array
*/
aprovados.forEach(function(nome, indice){
    console.log(`${indice+1}) ${nome}`)
})

console.log("--------------------------")
aprovados.forEach(nome => console.log(nome))

console.log("--------------------------")
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)




