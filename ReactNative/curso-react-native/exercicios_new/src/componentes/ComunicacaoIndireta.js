import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import Padrao from '../estilo/Padrao'

export const Entrada = props =>
    <View>
        <TextInput value={props.texto}
            style={Padrao.input}
            onChangeText={props.chamarQuandoMudar}
        />
    </View>

export class TextoSincronizado extends Component {

    state = {
        texto: ''
    }

    alterarTexto = texto => {
        this.setState({ texto });
    }

    /** Nesse caso, essa classe nao possui diretamente o componente que causa
     * uma mudanca de estado. Isso é feito atraves do componente 'Entrada'
     * que ira receber o evento.
     */

    render() {
        return (
            <View>
                <Text style={Padrao.fonte40}>{this.state.texto}</Text>
                <Entrada texto={this.state.texto}
                    chamarQuandoMudar={this.alterarTexto}
                />
            </View>
        )
    }

}