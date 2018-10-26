//Exemplo de callback no browser
//Nao executar diretamente no Node.js, colar e copiar no browser para testar

//Na pagina só deve ter um body
document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('O evento ocorreu!')
}