function soma() {
    let soma = 0;
    //arguments é uma palavra reservada que permite pegar todos os parametros informados para a função
    //Exemplo de como fazer isso antes do Ecmma Script 2015
    for(i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1,2,3,4))
console.log(soma(1,2,3,"Teste"))
console.log(soma("a",'b',"c"))
