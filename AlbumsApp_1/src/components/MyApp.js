
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from './Header';
import AlbumList from './AlbumList';


class MyApp extends Component {
    render() {
        return (
            <View style={Style.container}>
                <Header title={"Albums"} />
                <AlbumList />
            </View>

        );
    }
}

const Style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        color: '#333333',
        alignItems: 'center'
    },
});

export default MyApp