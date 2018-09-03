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
  ScrollView,
  Dimensions
} from 'react-native';
import Item from './src/item';
import CarouselItem from './src/item';

const itemsList = [
  'tomato',
  'blue',
  'palevioletred',
  '#ff00aa'
]
export default class App extends Component {
  state = {
    text: ''
  }
  render() {
    console.log('hello world');
    return (
      <ScrollView style={{flex:1}}>
        {itemsList.map(color => (
          <CarouselItem key={color} color={color} />
        ))}
      </ScrollView>
    );
  }
};