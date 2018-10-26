let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

//Se tiver apenas um parametro de entrada pode definier sem os parenteses
//dobro = variabel que aramazena a funcao
//a = parametro da funcao
//=> define uma função arrow (Toda funcao arrow é uma funcao anonima)
dobro = a => 2 * a //Quando tira a palavra return ele fica implicito

console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Ola'
ola = _ => 'Ola' //O underline é um parametro, porem em javascipt mesmo que possua parametros, não é necessário passa-lo(s)

console.log(ola())