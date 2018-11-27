import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { white } from 'ansi-colors';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Oi Ca! Te Amo!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 40,
    backgroundColor: '#FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
