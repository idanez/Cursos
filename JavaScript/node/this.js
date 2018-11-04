console.log(this === global) //false dentro do modulo, o 'this' aponta para module.exports
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global) //Dentro de uma função o 'this' aponta para o objeto global
}

logThis()