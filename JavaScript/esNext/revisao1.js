//let e var
// let tem escopo de bloco
{
    var a = 2
    let b = 3
}
console.log(a)
//console.log(b) //erro.. pois a variavel b nao esta definida nesse escopo, apenas no bloco acima

//Template String
const produto = 'iPad'
console.log(`${produto} é caro`)

console.log(`${produto} 
é 
caro`)

//Destructuring
const [l,e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, ,y] = [1,2,3]
console.log(x,y)

//Desestruturar atributos de um objeto
const {idade: i, nome} = {nome: 'Ana', idade: 9}
console.log(i, nome)

