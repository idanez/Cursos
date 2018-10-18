//Variavel definida com ver possui apenas 2 escopos possiveis

{ 
    { 
        { 
            {  
                //Dentro de bloco de codigo, fica visivel fora
                var sera = 'Será' 
                console.log(sera)
            } 
        } 
    }   
}

console.log(sera)

function teste() {
    var local = 123 //Nao fica visivel fora da funcao
    console.log(local)
}
teste()
console.log(local)

//Evitar criar variaveis com escopo global pois fica muito facil de alguem alterar o valor ate por um outro tipo, causando problemas. 
//Isso é um pouco mais problematico no contexto de um browser. No NodeJs não é tao critico.
