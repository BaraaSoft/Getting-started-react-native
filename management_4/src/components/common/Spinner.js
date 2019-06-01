import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';


const Spinner = ({ size }) => {
    return (
        <View style={Style.spinnerStyle}>
            <ActivityIndicator size={size || "large"} />
        </View>
    );
}

const Style = StyleSheet.create({
    spinnerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        position: 'absolute',
    }
})

export { Spinner };
