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
  TouchableWithoutFeedback
} from 'react-native';

export default class App extends Component {
  state = {
    text: ''
  }
  render() {
    console.log('hello world');
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() =>{}} underlayColor="red">
          <View>
            <Text>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={() =>{}} activeOpacity={0.5}>
          <View>
            <Text>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableWithoutFeedback onPress={() =>{}}>
          <View>
            <Text>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center' },
  boxStyle: { width: 50, height: 50},
})