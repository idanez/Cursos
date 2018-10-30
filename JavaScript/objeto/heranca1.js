const ferrari = {
    model: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.prototype)
console.log(ferrari.__proto__) //__proto__ ( dois underlines) acessa o atributo do objeto "pai"
console.log(ferrari.__proto__ === Object.prototype) //Funciona no Node e no Browser
console.log(volvo.__proto__ === Object.prototype)

console.log(Object.prototype.__proto__)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)
console.log(Object.prototype === MeuObjeto.prototype)