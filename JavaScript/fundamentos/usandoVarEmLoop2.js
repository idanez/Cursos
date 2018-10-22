const funcs = []

for(var i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
//Problema historico do javascript pois o i declarado com "var" que nao tem escopo de bloco sobrescreve os valor em cada funcao