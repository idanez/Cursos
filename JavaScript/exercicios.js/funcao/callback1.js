const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

//Callback é nada mais do que passar uma funcao como parametro e ela sera executada quando o evento acontecer.
//Nesse caso, o loop, ou seja, para cada elemento sera executada a funcao passando como parametro
//o proprio elemento e o indice.
//Segundo o doc do forEach: 
//callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any)
fabricantes.forEach(imprimir)
fabricantes.forEach(function (fabricante){
    console.log(fabricante)
})
fabricantes.forEach(fabricante => console.log(fabricante))