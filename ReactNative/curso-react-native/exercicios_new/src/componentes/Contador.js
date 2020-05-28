import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

export default class Contador extends Component {
    /** Definicao inicial do estado. */
    state = {
        numero: this.props.numeroInicial
    }

    /**CAso aqui nao seja uma funcao arrow, a chamada desse
     * metodo deve ser com uma funcao arrow
     */
    maisUm() {
        this.setState({ numero: this.state.numero + 1 });
    }

    /** Nesse caso precisa ser uma arrow function pq senao
     * O "this" tera o valor de quem chamou e nao da instancia
     * dessa classe
     */
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
                    onPress={
                        /** aqui é usado uma funcao arrow pois o 
                         * onpress precisa receber uma funcao e
                         * nao o retorno da funcao chamada
                         */
                        () => this.maisUm()
                    }
                    onLongPress={this.limpar}
                >
                    <Text>Incrementar/Zerar</Text>
                </TouchableHighlight>
            </View>
        )
    }
}