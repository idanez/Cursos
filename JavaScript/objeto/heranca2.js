//cadeia de prototipos (prototype chain)

Object.prototype.attr0 = 'Z' //Não faça isso em casa! Fazer apenas em situação altamente necessaria.

const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B', attr3: '3'}
const filho = {__proto__: pai, attr3: 'C'}
console.log(filho.attr0)
console.log(filho.attr1)
console.log(filho.attr2)
console.log(filho.attr3)
console.log(filho.attrA) //nao vai encontrar pois nenhum pai possui esse atributo

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing pois o objeto carro ja possui esse parametro
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

//Essa tambem é uma forma oficial da linguagem. Pode ser usado da forma acima ou essa abaixo, tanto faz
Object.setPrototypeOf(ferrari, carro) //Outra forma de estabelecer uma relação de prototipo (herança)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo) //Por padrao ao chamar o toString ele le apenas os atributos e funcoes que pertencem diretamente ao objeto, porem os atributos e funcoes dos pais sao acessiveis

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())

volvo.acelerarMais(200)
console.log(volvo.status())