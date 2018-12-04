const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)
//Digitar no console: node entradaESaida.js -a

if(anonimo) {
    process.stdout.write('Fala anonimo!\n')
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n','')
        process.stdout.write(`  Fala ${nome}!!\n`)
        process.exit()
    })
}