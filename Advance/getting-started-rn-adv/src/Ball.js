import React, { Component } from 'react';
import { View, StyleSheet, Animated } from 'react-native';



class Ball extends Component {

    componentWillMount() {
        this.position = new Animated.ValueXY(0, 0);
        Animated.spring(this.position, {
            toValue: { x: 200, y: 500 }
        }).start();
    }

    render() {
        return (
            <Animated.View style={this.position.getLayout()}>
                <View style={styled.ball} />
            </Animated.View>
        );
    }
}

const styled = StyleSheet.create({
    ball: {
        width: 60,
        height: 60,
        borderWidth: 10,
        borderColor: '#87CEFA',
        backgroundColor: '#00BFFF',
        borderRadius: 50
    }
})


export { Ball };