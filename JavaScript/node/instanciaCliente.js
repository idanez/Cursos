const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() //retorna um objeto
const contadorD = require('./instanciaNova')()

//Como o node faz cache dos objetos, o contadorA e o contadorB na realidade
//apontam para o mesmo objeto
contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

//O contadorC (do modulo instaciaNova) força a criação de uma nova
//instancia, portanto nao é usado o cache do node e cada objeto 
//criado é uma instancia separada
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)


