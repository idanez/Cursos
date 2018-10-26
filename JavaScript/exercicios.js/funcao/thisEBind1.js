const pessoa = {
    saudacao: 'Bom dia',
    falar () {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e OO

//"Amarra um objeto para ser o dono"
//A funcao bind retorna uma outra funcao amarrando o objeto passado no parametro como pai ,
//fazendo com que o this fique no contexto do objeto
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()