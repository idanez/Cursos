//Usando o Node.js

var cluster = require('cluster')
var os = require('os')
//Forma de fazer com que um processo seja distribuido entre os processadores da maquina
app.init = function(callback) {
	if(cluster.isMaster) {
		for (var i = 0; i<os.cpus().length; i++) {
			// quando o fork é chamado, a aplicação é invocada novamente
			// como esse processo verifica se é master, entrar no else,
			// iniciando o codigo em uma cpu especifica
			// dessa forma cria-se processos paralelos em threads executando em cada cpu
			cluster.fork
		}
	} else {
		//do something in other cores
	}

}