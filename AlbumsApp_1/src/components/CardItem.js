
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'

const CardItem = (props) => {
    return (
        <View style={{ ...style.container, ...props.style }}>
            {props.children}
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        padding: 8,
        paddingLeft: 0,
        paddingRight: 0,
        borderBottomWidth: 1,
        borderColor: '#0000001f',
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    }
});

export default CardItem;