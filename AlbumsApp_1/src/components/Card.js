import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';




const Card = (props) => {
    return (
        <View style={style.container}>
            {props.children}
        </View>
    );
}


const style = StyleSheet.create({
    container: {
        margin: 4,
        paddingTop: 8,
        paddingBottom: 2,
        backgroundColor: '#fff',

        borderColor: '#fff',
        borderRadius: 3,
        borderWidth: 1,
        borderBottomWidth: 0,

        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: .1,
        shadowOffset: {
            width: 0, height: 1
        },
        elevation: 1,

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    }
})



export default Card;
