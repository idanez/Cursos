function Pessoa() {
    this.idade = 0

    const self = this
    
    // Faz execuções intervaladas com o tempo informado
    setInterval(function () {
        // this.idade++
        self.idade++
        console.log(/*this.idade*/self.idade)
    }/*.bind(this)*/, 1000) //1000 = intervalo em ms
}

new Pessoa