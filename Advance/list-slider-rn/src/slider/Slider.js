import React, { Component } from 'react';
import {
    View, StyleSheet,
    Text, PanResponder,
    Animated, ScrollView
} from 'react-native';

class Slider extends Component {
    static defaultProps = {
        renderItem: () => { }
    }
    constructor(props) {
        super(props);
        const position = new Animated.ValueXY();
        const panRespon = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, guesture) => {
                position.setValue({ x: guesture.dx, y: 0 })
            },
            onPanResponderRelease: (event, guesture) => {

            }
        });

        this.state = { panRespon, position }
    }

    getItemSyle() {
        const { position } = this.state;
        const layoutStyle = position.getLayout();
        return {
            ...layoutStyle
        }
    }
    renderSliderItems() {
        const { data, renderItem } = this.props;
        const { panRespon } = this.state;
        return data.map(itemData => {

            return (
                <Animated.View {...panRespon.panHandlers} style={this.getItemSyle()} >
                    {renderItem(itemData)}
                </Animated.View>
            );
        });
    }
    render() {
        return (
            <ScrollView {...this.props}>
                {this.renderSliderItems()}
            </ScrollView>
        );
    }
}


export { Slider };