//Implementacao de um array
Array.prototype.forEach2 = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i],i,this)
    }
}


const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
/*
parametros do forEach de um array:
1 - conteudo do indice corrente
2 - numero do indice corrente
3 - O proprio array
*/
console.log("------------------------")
aprovados.forEach(function(nome, indice, array){
    console.log(`${indice+1}) ${nome}`)
})
console.log("------------------------")
aprovados.forEach2(function(nome, indice, array){
    console.log(`${indice+1}) ${nome}`)
})