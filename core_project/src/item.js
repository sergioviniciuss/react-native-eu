import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');

const Item = ({color = 'tomato' }) => (
    <View style={{ height }}>
        <View style={[styles.header, {backgroundColor: color}]} />
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

const styles = StyleSheet.create({
    container: { flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center' },
    header: { flexDirection: 'row', flexGrow: 2, backgroundColor: 'tomato', width: '100%' },
    footer: { flexDirection: 'row', flexGrow: 1, backgroundColor: 'white' },
    left: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    right: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    title: { fontSize: 24, fontWeight: 'bold' },
    desc: { fontSize: 16 }
})
export default Item