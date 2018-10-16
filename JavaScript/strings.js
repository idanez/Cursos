const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) //<- nao gera erro, apenas nao mostra nada
console.log(escola.charCodeAt(3)) //Pega o char na posicao 3 da string
console.log(escola.indexOf('3'))

console.log(escola.substring(1)) // A partir do indice 1
console.log(escola.substring(0,3)) // Do indice 0 ao 3. (sem incluir o indicie 3)

console.log('Escola '.concat(escola).concat("!"))

console.log(escola.replace(3,'e'))
console.log(escola.replace(/\d/,'e')) //Regex pra substituir todos os digitos pela letra e
console.log(escola.replace(/\w/g, 'e')) //Regex para suvstituir todas as letras e digitos pela letra 3. Inclui a flag globar 'g'

console.log('Ana,Maria,Pedro'.split(','))
