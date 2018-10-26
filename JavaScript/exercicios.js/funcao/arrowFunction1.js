let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

//Se tiver apenas um parametro de entrada pode definier sem os parenteses
//dobro = variabel que aramazena a funcao
//a = parametro da funcao
//=> define uma fun��o arrow (Toda funcao arrow � uma funcao anonima)
dobro = a => 2 * a //Quando tira a palavra return ele fica implicito

console.log(dobro(Math.PI))

let ola = function () {
    return 'Ol�'
}

ola = () => 'Ola'
ola = _ => 'Ola' //O underline � um parametro, porem em javascipt mesmo que possua parametros, n�o � necess�rio passa-lo(s)

console.log(ola())