import React from 'react'
import { Dimensions, Text, View, StyleSheet, Button, TouchableHighlight } from 'react-native'
import ToastExample from './ToastExample';
import Padrao from './estilo/Padrao'

const styles = StyleSheet.create({
  container: {
      height: '100%',
      backgroundColor: '#222',
      alignItems: 'center',
      justifyContent: 'center',
  },

  text: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0F0',
    paddingVertical:  Dimensions.get('window').width,
  },

  th: {
    flex: 0,
    backgroundColor: '#F00',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width
  }

})

export default props => {
  return (
    //O stilo do container vem do react native pelo StyleSheet
      <View style={styles.container}>
        {
          /**Essa é a chamada do metodo no Java anotado com: @ReactMethod */
          //<Text style={styles.text}>
            //  {
                //Nao pode colocar o ";" no final
                //ESse metodo mostra um texto por uma duração,
                //depois desaparece. Essa duração pode ser:
                //SHORT ou LONG
                //Toast é uma mensagem de aviso que normalmente
                //aparece embaixo no aparelho... aparentemente
                //nao é possivel modificar a cor de fundo ou a
                //posição. Não é necessario colocar dentro de um 
                //TEXT, pode ser direto dentro da VIEW
                ToastExample.show('Awesome', ToastExample.LONG)
                //"abcd"
              //}
            //</Text>
          }
          <TouchableHighlight style={styles.th}
              onPress={
                () => ToastExample.show('Awesome', ToastExample.SHORT)
              }
              onLongPress={
                () => ToastExample.show('Awesome', ToastExample.LONG)
              }
            >
            <Text>Show Toast</Text>
          </TouchableHighlight>
      </View>
  )
  }
