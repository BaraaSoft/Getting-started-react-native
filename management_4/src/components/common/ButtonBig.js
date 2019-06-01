import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'


const ButtonBig = ({ children, style, onPress, disabled }) => {
    const { container, content } = Style;
    return (
        <TouchableOpacity disabled={disabled} onPress={onPress} style={{ ...container, ...style }}>
            <Text style={content}>
                {children}
            </Text>
        </TouchableOpacity>
    );
}

const Style = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',

        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 4,
        paddingTop: 10,
        paddingBottom: 10
    },
    content: {
        textAlign: 'center',
        color: 'blue',
        fontSize: 16,
        fontWeight: '300',
    }
})

export { ButtonBig }