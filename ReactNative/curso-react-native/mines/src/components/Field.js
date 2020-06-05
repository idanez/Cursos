import React from 'react'
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import params from '../params'
import Mine from './Mine'
import Flag from './Flag'

//Lembrando que ja cria a arrow function aqui para ter o return
//voltando os componentes do React
export default props => {
    //Abaixo é um destructuring, "remove" os atributos do props, no caso
    //Obs.: Nao remove realmente, o props continua com as propriedades,
    //Meio que copia
    const { mined, opened, nearMines, exploded, flagged } = props

    const styleField = [styles.field]
    if (opened) {
        styleField.push(styles.opened)
    }
    if (exploded) {
        styleField.push(styles.exploded)
    }
    if (flagged) {
        styleField.push(styles.flagged)
    }
    if (!opened && !exploded) {
        styleField.push(styles.regular)
    }

    //A quantidade de minas ao redor define a cor do quadrado
    //de acordo com o "perigo"
    let color = null
    if (nearMines > 0) {
        if (nearMines == 1) color = '#2A28D7'
        if (nearMines == 2) color = '#2B520F'
        if (nearMines > 2 && nearMines < 6) color = '#F9060A'
        if (nearMines >= 6) color = '#F221A9'
    }

    return (
        <TouchableWithoutFeedback onPress={props.onOpen}
            onLongPress={props.onSelect}>
            <View style={styleField}>
                {!mined && opened && nearMines > 0 ?
                    <Text style={[styles.label, { color: color }]}>
                        {nearMines}</Text> : false}
                {mined && opened ? <Mine /> : false}
                {flagged && !opened ? <Flag /> : false}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize,
    },
    regular: {
        backgroundColor: '#999',
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333',
    },
    opened: {
        backgroundColor: '#999',
        borderColor: '#777',
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontWeight: 'bold',
        fontSize: params.fontSize,
    },
    exploded: {
        backgroundColor: 'red',
        borderColor: 'red',
    }
})