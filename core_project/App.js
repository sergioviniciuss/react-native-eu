/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  render() {
    console.log('hello world');
    return (
      <View style={styles.container}>
        <View style={styles.boxStyle} />
        <View style={{ width:50, height:50, backgroundColor: 'green' }} />
        <View style={{ width:50, height:50, backgroundColor: 'blue' }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center' },
  boxStyle: { width: 50, height: 50, backgroundColor: 'red' },
})