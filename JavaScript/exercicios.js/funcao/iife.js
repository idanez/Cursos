//IIFE -> Immediately Invoked Function Expression

//Sera executada no momento em que é criada
//Tudo que for definido dentro dessa funcao nao estara disponivel do escopo Global
//o que é uma boa pratica.

(function () {
    console.log('Será executado na hora!')
    console.log('Fujindo do escopo mais abrangente')
})()

