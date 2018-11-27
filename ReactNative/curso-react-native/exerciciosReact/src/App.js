import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Simples from './componentes/Simples'

// export default function() {
//   return (
//           <View style={styles.container}>
//               <Text style={styles.f20}>App Funcao!</Text>
//           </View>
//         )
// }

export default class App extends Component {
  render() { //Função responsansavel por renderizar a tela
    return (
      <View style={styles.container}>
          <Simples texto='Flexivel!!'/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})