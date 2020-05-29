import React from 'react'
import { ScrollView, View, FlatList, Text } from 'react-native'

const alunos = [
    {id: 1, nome: 'Joao', nota: 7.9},
    {id: 2, nome: 'Ana', nota: 9.1},
    {id: 3, nome: 'Bia', nota: 5.4},
    {id: 4, nome: 'Claudia', nota: 7.6},
    {id: 5, nome: 'Roberto', nota: 6.8},
    {id: 6, nome: 'Rafael', nota: 9.9},
    {id: 7, nome: 'Guilherme', nota: 10.0},
    {id: 8, nome: 'Rebeca', nota: 8.8},
    {id: 9, nome: 'Tobias', nota: 8.8},

    {id: 11, nome: 'Joao', nota: 7.9},
    {id: 12, nome: 'Ana', nota: 9.1},
    {id: 13, nome: 'Bia', nota: 5.4},
    {id: 14, nome: 'Claudia', nota: 7.6},
    {id: 15, nome: 'Roberto', nota: 6.8},
    {id: 16, nome: 'Rafael', nota: 9.9},
    {id: 17, nome: 'Guilherme', nota: 10.0},
    {id: 18, nome: 'Rebeca', nota: 8.8},
    {id: 19, nome: 'Tobias', nota: 8.8}

]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',
    //Flex
    //Alinhamento no cross-axis
    alignItems: 'center',
    //alignItems: 'flex-end'
    //alignItems: 'flex-start'

    //Alinhamento no main-axis (Como nao foi alterado, é a coluna)
    //justifyContent: 'center'
    //justifyContent: 'flex-end'
    //justifyContent: 'space-between'
    //justifyContent: 'space-around'

    //Muda o main-axis para ser a linha
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
    </View>


export default props => {
    /** A chave abaixo é um operador de destructuring, ou seja,
     * esta tirando dentro do objeto uma propriedade chamada: item, 
     * portanto ela precisa existir
     */
    const renderItem = ({item}) => {
        return <Aluno {...item}  />
    }

    /**
     * No curso fala para colocar o FlatList dentro de um <ScrollView>
     * Porem isso, no momento que esse exercicio foi feito, com versao
     * mais atual das APIs, gera um warning. Acontece que agora parece
     * que o FlatList herda as propriedades de um ScrollView, portanto
     * não é necessario ficar dentro dele.
     */
    return (
        <FlatList data={alunos} renderItem={renderItem}
            keyExtractor={(_, index) => index.toString()} />
    )
}