import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, Card, CardItem } from './components/common';

import LoginForm from './components/LoginForm';
//org.reactjs.native.example.AuthApp

const App = (props) => {
    const { container } = Style;
    return (
        <View style={container} >
            <Header title="Auth App" />
            <LoginForm />
        </View>
    );
}

const Style = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#F5FCFF',
        color: '#333333',
        alignItems: 'center'
    },
    textStyle: {
        color: '#000',
        opacity: 1,
    }
});

export default App;