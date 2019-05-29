
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


class Header extends Component {
    render() {
        return (
            <View style={Style.header}>
                <Text style={Style.title}>{this.props.title}</Text>
            </View>
        );
    }
}

const Style = StyleSheet.create({

    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#333333',
        paddingTop: 28,
        height: 76,
        width: '100%',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowRadius: 3,
        shadowOpacity: .3,
        shadowOffset: {
            width: 0, height: 1
        },
        elevation: 2,
        position: 'relative'

    },
    title: {
        fontSize: 20,
        color: '#333333',
    }
});

export default Header