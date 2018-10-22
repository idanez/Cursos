var numero = 1
{
    let numero = 2 //variavel declarado como let fica visivel apenas no bloco(escopo) em que tiver
    console.log('dentro =',numero)
}
console.log('fora =',numero)


let numero2 = 1
{
    let numero2 = 2 //variavel declarado como let fica visivel apenas no bloco(escopo) em que tiver
    console.log('dentro2 =',numero2)
}
console.log('fora2 =',numero2)