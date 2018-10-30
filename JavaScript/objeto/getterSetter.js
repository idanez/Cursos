const sequencia = {
    _valor: 1, //Nao quer dizer que é privada, mas é uma convenção da linguagem de que ela pretende ser acessada apenas internamente
    get valor() {return this._valor++}, //usar a palavra reservada get para que esse metodo seja um getter
    set valor(valor) { //usar a palavra reservada set para que esse metodo seja um setter
        if(valor > this._valor) {
            this._valor = valor
        }
    }
    //JavaScript nao suporta sobrecarga de metodos a nao ser pelo setter
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)