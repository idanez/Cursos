import React from 'react'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    norte: {
        //Essa propriedade flex diz que esse elemento vai crescer
        //ocupando toda a area restante, com prioridade/peso 1
        flex: 1,
        backgroundColor: '#bdf9ed',
        alignItems: 'center',
        justifyContent: 'center'
    },
    centro: {
        //Esse item vai pegar todo o espaço restante mas tem mais
        //prioridade/peso, portante, deve fica maior que todos
        //A soma das areas sera dividade em partes e cada compontente
        //norte, centro, sul ira pegar o quanto foi definido nessa
        //propriedade flex, ou seja, aqui tera 2 de 4, o norte tera 1 de 4
        //e o sul tera 1 de 4
        flex: 2,
        flexDirection: 'row',
        backgroundColor: '#f2f9bd',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15            
    },
    sul: {
        flex: 1,
        backgroundColor: '#bdf9c4',
        alignItems: 'center',
        justifyContent: 'center'
    },
    circulo: {
        width: 100,
        height: 100,
        backgroundColor: '#f47f61',
        borderRadius: 50
    }
})

const Circulo = props => <View style={styles.circulo}></View>

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.norte}>
                <Circulo />
            </View>
            <View style={styles.centro}>
                <Circulo />
                <Circulo />
                <Circulo />
            </View>
            <View style={styles.sul}>
                <Circulo />
            </View>
        </View>
    )
}
