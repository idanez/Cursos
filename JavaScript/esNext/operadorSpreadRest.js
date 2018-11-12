//operador ... rest(juntar)/spread(espalhar)
//usar rest com parametro de função

//usar spread com objeto
const funcionario = {nome: 'Maria', salario: 12348.99}
const clone = {ativo:true, ...funcionario} //pega todos os ATRIBUTOS  de funcionario e adiciona no objeto. Lembrando que é um clone/copia e nao aponta para o original
console.log(clone)

//usar spread com array
const grupoA = ['Joao', 'Pedro', 'Maria']
const grupoFinal = ['Gloria', ...grupoA, 'Rafaela']
console.log(grupoFinal)