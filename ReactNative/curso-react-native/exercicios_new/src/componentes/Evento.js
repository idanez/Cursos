import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import Padrao from '../estilo/Padrao'

/** Sempre que o estado atualiza, o componente é renderizado novamente*/
export default class Evento extends Component {

    /**Para transformar um componente controlado em um componente nao
     * controlado (nao á amarracao de um etado com um componente), 
     * basta inicializar o valor da propriedade no state
     * como null
     */

    state = {
        texto: ''
    }

    /**Usando arrow function para nao se preocupar com o valor do this, que nesse caso, 
     * sempre ira referenciar a instancia dessa classe
     */
    alterarTexto = texto => {
        this.setState({ texto });
    }

    render() {
        return (
            <View>
                <Text style={Padrao.fonte40}>
                    {'<<< ' + this.state.texto + ' >>>'}
                </Text>
                <TextInput value={this.state.texto}
                style={Padrao.input}
                onChangeText={this.alterarTexto}/>
            </View>
        )
    }

}