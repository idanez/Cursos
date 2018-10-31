function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Ate Breve', 456)
console.log(aula1, aula2)

//simulando o new
function novo(f, ...params) { //Os ... concatena o que foi informado e cria um array
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params) //params é internamente um array
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)