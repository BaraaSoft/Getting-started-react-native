import React, { Component } from 'react';
import { View, Animated, ScrollView, PanResponder, StyleSheet, Dimensions } from 'react-native';


const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_Threshold = SCREEN_WIDTH * .35;

class Deck extends Component {
    static defaultProps = {
        onSwipeLeft: () => { },
        onSwipeRight: () => { }
    }
    constructor(props) {
        super(props);
        const position = new Animated.ValueXY();
        const panRespon = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gesture) => {
                position.setValue({ x: gesture.dx, y: gesture.dy })
            },
            onPanResponderRelease: (event, gesture) => {
                if (gesture.dx > SWIPE_Threshold) {
                    this.autoSwipe('right')
                } else if (gesture.dx < -SWIPE_Threshold) {
                    this.autoSwipe('left')
                } else {
                    this.resetCardPosition();
                }

            }
        });
        this.state = { panRespon, position, index: 0 };
    }

    autoSwipe(direction) {
        const { position } = this.state;
        if (direction == 'right') {
            Animated.timing(position, {
                toValue: { x: SCREEN_WIDTH * 2, y: 0 },
                duration: 250
            }).start(() => this.onAutoSwipeComplete(direction));
        } else {
            Animated.timing(position, {
                toValue: { x: -SCREEN_WIDTH * 2, y: 0 },
                duration: 250
            }).start(() => this.onAutoSwipeComplete(direction));
        }
    }

    onAutoSwipeComplete(direction) {
        const { onSwipeRight, onSwipeLeft, data } = this.props;
        const { index } = this.state;
        direction == 'right' ? onSwipeRight(data[index]) : onSwipeLeft(data[index]);
        this.state.position.setValue({ x: 0, y: 0 })
        this.setState({ index: index + 1 })
    }

    resetCardPosition = () => {
        const { position } = this.state;
        Animated.spring(position, {
            toValue: { x: 0, y: 0 }
        }).start();
    }

    getCardStyle() {
        const { position } = this.state;
        const layoutStyle = position.getLayout();

        const rotate = position.x.interpolate({
            inputRange: [-SCREEN_WIDTH * 2, 0, SCREEN_WIDTH * 2],
            outputRange: ['-120deg', '0deg', '120deg']
        })
        return {
            ...layoutStyle,
            transform: [{ rotate }],
            zIndex: 2
        }
    }

    renderCards() {
        const { data, renderCard } = this.props;
        const { index, panRespon } = this.state;
        return data.map((x, indx) => {
            if (indx < index) return null;
            if (indx == index) {
                return (
                    <Animated.View key={x.id}
                        {...panRespon.panHandlers}
                        style={this.getCardStyle.call(this)}>
                        {renderCard(x)}
                    </Animated.View>)
            }
            return renderCard(x);
        });
    }
    render() {
        return (
            <View>
                {this.renderCards.call(this)}
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        transform: [{ rotate: '40deg' }],
        zIndex: 10
    }
})

export { Deck }