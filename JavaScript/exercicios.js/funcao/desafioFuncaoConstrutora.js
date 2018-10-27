function PessoaFactory(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
    //return {
     //   falar: `Meu nome é ${nome}`
    //}

}

const p1 = new PessoaFactory("João")
p1.falar()