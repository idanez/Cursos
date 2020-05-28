import React from 'react'
import { View, Text, ImagePropTypes } from 'react-native'

const fonte = { style: { fontSize: 30 } }

function filhosComProps(props) {
    return React.Children.map(props.children,
             c => React.cloneElement(c, {...props, ...c.props}))
}

export const Filho = props => 
    <View>
        {/**{...fonte} = operador spread de javascript */}
        <Text {...fonte}>Filho: {props.nome} {props.sobrenome} </Text>
    </View>

export const Pai = props => 
    <View>
        <Text {...fonte}>Pai: {props.nome} {props.sobrenome}</Text>
        {/* {props.children} */}
        {
            /**Aceita apenas um componente, nesse caso, como tem mais de um filho
             * daria erro
             */
        //React.cloneElement(props.children, {...props, ...props.children.props})
        //Para contronar esse problema, usar a tecnica abaixo
        //Obs. O codigo abaixo pode ficar em uma funcao, um utilitario, etc
        // React.Children.map(props.children,
        //     c => React.cloneElement(c, {...props, ...c.props}))
        filhosComProps(props)
        }
    </View>

export const Avo = props =>
    <View>
        <Text {...fonte}>Avô: {props.nome} {props.sobrenome}</Text>
        <Pai nome='Andre' sobrenome={props.sobrenome}>
            <Filho nome='Ana' />
            <Filho nome='Gui' />
            <Filho nome='Davi' />
        </Pai>
        <Pai {...props} nome='Pedro'>
            <Filho nome='Rebeca' />
            <Filho nome='Renato' />
        </Pai>
    </View>

export default Avo
