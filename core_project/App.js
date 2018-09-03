/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  TextInput, 
  Text,
  Alert, 
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';

export default class App extends Component {
  state = {
    text: ''
  }
  render() {
    console.log('hello world');
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1535690862765-8f7b36fdb06d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=61ee1debc781c0bf9174a1a98c3868db&auto=format&fit=crop&w=975&q=80'}}
          style={{ height: 100, width: '100%' }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center' },
  boxStyle: { width: 50, height: 50},
})