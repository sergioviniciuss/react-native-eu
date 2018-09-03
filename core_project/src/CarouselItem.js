import React from 'react';
import { View, Dimensions, Image } from 'react-native';

const { width, height } = Dimensions.get('window');

const CarouselItem = ({ backgroundImg }) => (
    <Image 
        source={{uri:backgroundImg}} 
        style={{ width, height, flex:1}}
    />
);

export default CarouselItem;