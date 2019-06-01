import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'

const Card = (props) => {
    const { container } = Style;
    return (
        <View style={{ ...container, ...props.style }}>
            {props.children}
        </View>
    );
}

const CardItem = (props) => {
    const { ItemStyle } = Style;
    return (
        <View onTouchEnd={props.onClick} style={{ ...ItemStyle, ...props.style }}>
            {props.children}
        </View>
    );
}

const Style = StyleSheet.create({
    container: {
        alignSelf: 'stretch',

        marginTop: 8,
        marginLeft: 8,
        marginRight: 8,
        borderColor: '#fff',

        backgroundColor: '#fff',
        minHeight: 240,
        alignItems: 'stretch',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        shadowColor: '#000',
        elevation: 1,
    },
    ItemStyle: {
        padding: 8,
        borderBottomWidth: 1,
        borderColor: '#E8E8E8',
    }
});

export { Card, CardItem };
