/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, TextInput, View} from 'react-native';

export default class App extends Component {
  render() {
    console.log('hello world');
    return (
      <View style={styles.container}>
      <TextInput
        placeholder='Type something'
        onChangeText={()=>{}}
        onSubmitEditing={() => { }}
        style={{fontSize: 30}}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center' },
  boxStyle: { width: 50, height: 50},
})