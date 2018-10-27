console.log(soma(3,4)) //pode chamar mesmo antes dela aperecer pois o interpretador do JS primeiro le todas as funcoes antes de executar o codigo
//console.log(sub(5,5)) //Da erro para function expression e named function expresion

// function declaration
function soma(x, y) {
    return x + y
}

//function expression
const sub = function (x, y) {
    return x - y
}

console.log(sub(5,5))

//named function expresion
const mult = function mult(x,y) {
    return x * y
}
console.log(mult(5,5))

