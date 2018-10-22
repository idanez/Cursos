function seForVerdadeiroEuFalo(valor) {
    if(valor) {
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeiroEuFalo()
seForVerdadeiroEuFalo(null)
seForVerdadeiroEuFalo(undefined)
seForVerdadeiroEuFalo(NaN)
seForVerdadeiroEuFalo('')
seForVerdadeiroEuFalo(0)
seForVerdadeiroEuFalo(-1) //Verdadeiro
seForVerdadeiroEuFalo(' ') //Verdadeiro
seForVerdadeiroEuFalo('?') //Verdadeiro
seForVerdadeiroEuFalo([]) //Verdadeiro
seForVerdadeiroEuFalo([1,2]) //Verdadeiro
seForVerdadeiroEuFalo({})