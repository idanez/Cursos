let comparaComThis = function (param) {
    //Esse this � o escopo global, no caso do Node chama global. Se fosse browser sera window
    console.log(this === param)
}

comparaComThis(this) //Vai dar false.
//Objeto Global do Node.js
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
//No Node.js cada arquivo � um modulo
comparaComThisArrow(this) // nesse caso dara true por causa do arrow function
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj) //Nao vai mudar o this, mesmo com o bind
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)

