function Pessoa() {
    this.idade = 0;
    //Com a funcao anonima, o this nao varia... ele continua apontando para o objeto raiz
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa