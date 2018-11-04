require('./global')
console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita!' //Isso nao legal que aconteça. Mudar valores de um objeto global
console.log(MinhaApp.nome)

