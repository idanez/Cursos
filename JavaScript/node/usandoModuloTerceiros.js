//Outra forma de executar um codigo é usando o nodemon
//Para instalar de forma global, usar o comando: node -g nodemon.
//Dessa forma esse comando fica disponivel para ser usado pelo terminal
//de forma global no sistema todo.
//A vantagem dele é que apos rodar via nodemon, se fizer uma alteração no codigo
// e salvar logo em seguida, ele ja atualiza sem precisar reiniciar.
//Enquanto o nodemon estiver rodando, é possivel usar o comando: rs
//para forcar um reinicio da execução

const _ = require('lodash');
setInterval(() => console.log(_.random(500, 600)), 2000)

