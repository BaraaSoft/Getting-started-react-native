import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native';

class Horizontal extends Component {
    render() {
        const { container } = Style;
        return (
            <View style={container}>
                {this.props.children}
            </View>
        );
    }
}

const Style = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    }
});

export default Horizontal;
