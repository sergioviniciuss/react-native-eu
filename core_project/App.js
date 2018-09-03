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
        <View style={[styles.header]} />
        <View style={[styles.footer]}>
          <View style={[styles.left]}>
            <Text style={styles.title}>RN EU</Text>
          </View>
          <View style={[styles.right]}>
            <Text style={styles.desc}>Best RN conference</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center' },
  header: { flexDirection: 'row', flexGrow: 2, backgroundColor: 'red', width: '100%' },
  footer: { flexDirection: 'row', flexGrow: 1, backgroundColor: 'white'},
  left: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  right: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', },
  desc: { fontSize: 16 }
})