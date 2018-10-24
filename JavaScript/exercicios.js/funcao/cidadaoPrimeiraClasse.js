// Funcao em JS � First-Class Object
//HIgher-order function
//Fun��o pode ser tratada com um dado, portanto pode ser passada por parametro, retornada e etc.
//Como se fosse um Objeto?

//criar de forma literal
//Toda funcao em JS retorna no minimo um valor undefined
function fun1() { }

//Aramazenar em uma variavel
const fun2 = function () { }

//Armazenar em um array
const array = [function(a,b) {return a+ b}, fun1, fun2]

console.log(array[0](2,3))

const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

//Passar funcao como parametro
function run(fun) {
    //Para invocar a funcao precisar colocar os parenteses
    fun()
}
run(function() {console.log('Executando')})

//Uma fun��o pode retornar/contar uma fun��o
function soma(a,b) {
    return function(c) {
        console.log(a + b + c)
    }
}
//Como o retorno da chamada de soma(2,3) � uma fun��o, ja literalmente passa o parametro
//para executar a fun��o retornada
soma(2,3)(4)
const cincoMais = soma(2,3)
cincoMais(4)
