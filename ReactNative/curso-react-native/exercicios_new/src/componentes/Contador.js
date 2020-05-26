import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

export default class Contador extends Component {
    /** Definicao inicial do estado. */
    state = {
        numero: this.props.numeroInicial
    }

    maisUm = () => {
        this.setState({ numero: this.state.numero + 1 });
    }

    limpar = () => {
        this.setState({ numero: this.props.numeroInicial });
    }

    render () {
        /**
         * As propriedades (this.props)sao somente leitura, caso tente
         * fazer algo como props.numero++ não será feita
         * nenhuma alteração
         */
        return (
            <View>
                <Text style={{fontSize:30}}>{this.state.numero}</Text>
                <TouchableHighlight
                    onPress={this.maisUm}
                    onLongPress={this.limpar}
                >
                    <Text>Incrementar/Zerar</Text>
                </TouchableHighlight>
            </View>
        )
    }
}