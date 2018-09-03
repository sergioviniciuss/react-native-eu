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
import CarouselItem from './src/CarouselItem';

const itemsList = [
  'tomato',
  'blue',
  'palevioletred',
  '#ff00aa'
]
const imgList = [
  'https://images.unsplash.com/photo-1535709418-6f14c8e87bb6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ac541537e07b862c08dc0ca081c82c87&auto=format&fit=crop&w=668&q=80',
  'https://images.unsplash.com/photo-1535730480175-8f43dbb6f894?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7b41a19ae9ff2599da4c020bc8c7b719&auto=format&fit=crop&w=1650&q=80',
  'https://images.unsplash.com/photo-1535728534313-e206f59bed23?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c7a32a5f706c239428dceb9340f210a4&auto=format&fit=crop&w=2468&q=80',
  'https://images.unsplash.com/photo-1535692535168-f4388ca77bee?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4b1d5df0284b883fb4695a6a64b72d5a&auto=format&fit=crop&w=668&q=80',

]
export default class App extends Component {
  render() {
    return (
      <ScrollView
        style={{flex:1}}
        pagingEnabled={true}
        horizontal={true}
        showHorizontalScrollIndicator={false}
      >
        {imgList.map(imgUrl => (
          <CarouselItem key={imgUrl} backgroundImg={imgUrl} />
        ))}
      </ScrollView>
    );
  }
};