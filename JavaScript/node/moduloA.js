// Em node.js um arquivo representa um modulo
// um modulo tem uma certa interioridade
// tudo o que é escrito em um modulo fica apenas em um modulo
// para deixar publico, deixar visivel para fora, é necessario exportar

//Esse this abaixo é do modulo do node

console.log(this) // é um objeto vazio

this.ola = 'Fala Pessoal' //Forma 1 de exportar
exports.bemVindo = 'Bem vindo ao node' //Forma 2 de exportar
module.exports.ateLogo = 'Até o proximo exemplo' //Forma 3 de exportar