import React from 'react'
import { Text } from 'react-native'
import Padrao from '../estilo/Padrao'

/**
 * Quando usar um export sem o default tem que dar nome para ela,
 * mesmo que seja uma funacao arrow.
 * 
 * Quando for importar essa funcao tem que colocar entre chaves:
 * "import { Inverter } from ".
 * 
 * Se tivesse a palavra "default" nao precisa das chaves
 * 
 * Tambem pode criar as funcoes sem o export e exportar no final,
 * ex.: 
 * REmover todos os exports e adicioanr no final do arquivo
 * export default Inverter -> Para importar o Inverter como default
 * ou
 * export { Inverter, MegaSena }
 */
export const Inverter = props => {
    const inv = props.texto.split('').reverse().join('');
    return <Text style={Padrao.ex}>{inv}</Text>
}

export const MegaSena = props => {
    const [min, max] = [1, 60];
    const numeros = Array (props.numeros || 6).fill(0);

    for (let i = 0; i < numeros.length; i ++) {
        let novo = 0;
        while (numeros.includes(novo)) {
            novo = Math.floor(Math.random() * (max - min +1)) + min;
        }
        numeros[i] = novo;
    }

    numeros.sort((a,b) => a - b);
    return <Text style={Padrao.ex}>{numeros.join(', ')}</Text>

}

export default Inverter;