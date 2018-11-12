function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) //resolve aceita apenas UM PARAMETRO
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que Legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)) // caso na promise for chamado o reject ao inves do resolve, vai ser chamado essa funcao apenas

