//Em JS os atributos de um objeto podem ser criados dinamicamente

const prod1 = {} //Representa objetos
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // N�o � uma boa pratica... evitar atributos com espa�o

console.log(prod1)

const prod2 = { // N�o � a mesma coisa que Json
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        prop1: 1,
        obj: {
            prop1: 2
        }
    }
}

//Json � um formato textual. Objetos s�o parecidos mas n�o s�o a mesma coisa
//Exemplo de json:
'{"nome": "Camisa Polo", "preco":79.90}'

console.log(prod2)