import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native';

class Vertical extends Component {
    render() {
        const { container } = Style;
        return (
            <View style={{ ...container, ...this.props.style }}>
                {this.props.children}
            </View>
        );
    }
}

const Style = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
});

export default Vertical;