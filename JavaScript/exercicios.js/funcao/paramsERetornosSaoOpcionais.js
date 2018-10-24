function area(largura, altura) {
    const area = largura * altura
    if(area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2,3,27,22,44))
console.log(area(5,5)) // Esse console imprime undefined pois ao entrar no else da funcao, imprime no console, mas nao retorna nada.
