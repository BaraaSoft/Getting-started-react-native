import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
    const { containerStyle, titleStyle } = Style;
    return (
        <View style={containerStyle}>
            <Text style={titleStyle} >
                {props.title}
            </Text>
        </View>
    );
}


const Style = StyleSheet.create({
    containerStyle: {
        display: 'flex',
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        height: 84,
        paddingTop: 50,
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        shadowColor: '#000',
        elevation: 3,
        position: 'relative'
    },
    titleStyle: {
        color: 'blue',
        fontSize: 20,
        fontWeight: '600',
        alignSelf: 'center',
    }
})

export { Header };