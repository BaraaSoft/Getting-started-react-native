
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'



const ButtonMain = ({ onPress }) => {
    const { containerStyle, textStyle } = Style;
    return (
        <TouchableOpacity onPress={onPress} style={containerStyle}>
            <Text style={textStyle}>SELECT</Text>
        </TouchableOpacity>
    );
}

const Style = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignSelf: 'stretch',
        borderWidth: 1,
        borderColor: '#1dcaff',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 4,
        margin: 4
    },
    textStyle: {
        alignSelf: 'center',
        color: '#1dcaff',
        fontSize: 14,
        fontWeight: '600'
    }
})

export default ButtonMain;