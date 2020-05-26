/**Sempre que usar codigo react, é importante fazer o import do React */
import React from 'react'
import { View, Text } from 'react-native'
import Padrao from '../estilo/Padrao'

// export default function (props) {
//     return <Text>{props.texto}</Text>
// }

/**
 * No style pode passar um array para ter varios estilos diferentes
 */
export default props => 
    <Text style={[Padrao.ex]}>Arrow: {props.texto}</Text>

/**
 * Nao pode retornar dois componentes adjacentes, ex.:
 * export default props => 
 *  <Text>Arrow: {props.texto}</Text>
 *  <Text>Arrow: {props.texto}</Text>
 * Nesse caso, tem que encapsular esses componentes em algum outro,
 * por exemplo em um View:
 * 
 * export default props => 
    <View>
        <Text>Arrow: {props.texto}</Text>
        <Text>Arrow2: {props.texto}</Text>
    </View>
 * 
 * , ou como um array 
 * 
 * (Porem nesse caso tem que ter uima propriedade: key):
 * export default props => [
        <Text key={1}>Arrow: {props.texto}</Text>
        <Text key={2}>Arrow2: {props.texto}</Text>
    ]
 * 
 */
