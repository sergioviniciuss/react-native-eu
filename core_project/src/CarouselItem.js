import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const CarouselItem = ({ color = 'blue '}) => (
    <View style={{ width, height, backgorundColor: color }} />
);

export default CarouselItem;