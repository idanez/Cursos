//Forma mais classica de exportar coisas com o node, atribuindo um objeto diretamente a ele
module.exports = {
    bomDia: 'Bom dia',
    boaNoite() {
        return 'Boa noite'
    }
}

let a = 2 //Visivel apenas no modulo corrente