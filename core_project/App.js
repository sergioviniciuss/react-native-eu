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
  Dimensions,
  FlatList
} from 'react-native';
import Item from './src/item';
import CarouselItem from './src/CarouselItem';

const itemsList = [
  {
    id: 1,
    color: 'tomato',
    title: 'javascript',
    description: 'Lorem ipsum'
  },
  {
    id: 2,
    color: 'blue',
    title: 'React',
    description: 'feijao'
  },
  {
    id: 3,
    color: 'palevioletred',
    title: 'Vue',
    description: 'arroz'
  },
]
export default class App extends Component {
  render() {
    return (
      // flatlist renders only what is visible on the screen
      <FlatList 
        data={itemsList}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={item => `${item.id}`} 
      />
      // ScrollView renders everything at once.
      // <ScrollView
      //   style={{flex:1}}
      // >
      //   {itemsList.map(item => (
      //     <Item 
      //       key={item.id} 
      //       item={item} 
      //     />
      //   ))}
      // </ScrollView>
    );
  }
};