import React from 'react'
import {View, Text} from 'react-native'

//É uma boa pratica colocar o nome do parametro como 'props' (Propriedades)
// export default function(props) {
//     return <Text>{props.texto}</Text>
// }

//Forma1 de retonar varios elementos. Encapsular em uma View
// export default props => 
//     <View>
//         <Text>Arrow1: {props.texto}</Text>
//         <Text>Arrow2: {props.texto}</Text>
//     </View>

//Forma 2 de retornar varios elementos. Em um array
//O return com a arrow function é implicito
// export default props => [
//         <Text key={1}>Arrow1: {props.texto}</Text>,
//         <Text key={2}>Arrow2: {props.texto}</Text>
// ]
    
export default props => 
    <Text>Arrow 1: {props.texto}</Text>