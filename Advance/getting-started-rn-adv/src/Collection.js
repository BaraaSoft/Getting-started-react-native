import React, { Component } from 'react';
import { View, Animated, PanResponder, Dimensions, StyleSheet } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Collection extends Component {
    static defaultProps = {
        onSwipeLeft: () => { },
        onSwipeRight: () => { }
    }
    constructor(props) {
        super(props);
        const position = new Animated.ValueXY();
        const panRespon = PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: (e, gesture) => {
                position.setValue({ x: gesture.dx, y: gesture.dy })
            },
            onPanResponderRelease: (e, gesture) => {
                const swapDist = SCREEN_WIDTH * .35;
                if (gesture.dx > swapDist) {
                    this.autoSwipe('right')
                } else if (gesture.dx < -swapDist) {
                    this.autoSwipe('left')
                } else {
                    this.resetCardPosition()
                }
            }
        });

        this.state = { position, panRespon, index: 0 }
    }

    resetCardPosition() {
        const { position } = this.state
        Animated.spring(position, {
            toValue: {
                x: 0,
                y: 0
            }
        }).start();
    }

    autoSwipe(direction) {
        const { position } = this.state;
        switch (direction) {
            case 'left':
                Animated.timing(position, {
                    toValue: {
                        x: -SCREEN_WIDTH * 2,
                        y: 0
                    }, duration: 250
                }).start(() => this.onAutoSwipeComplete(direction));
                break;
            case 'right':
                Animated.timing(position, {
                    toValue: {
                        x: SCREEN_WIDTH * 2,
                        y: 0
                    }
                }).start(() => this.onAutoSwipeComplete(direction));
                break;
        }
    }

    onAutoSwipeComplete(direction) {
        const { index, position } = this.state;
        const { data } = this.props;
        direction == 'right' ? this.props.onSwipeRight(data[index]) : this.props.onSwipeLeft(data[index]);
        position.setValue({ x: 0, y: 0 });
        this.setState({ index: index + 1 })
    }

    cardStyle() {
        const { position } = this.state;
        const layoutStyle = position.getLayout();
        const rotate = position.x.interpolate({
            inputRange: [-2 * SCREEN_WIDTH, 0, 2 * SCREEN_WIDTH],
            outputRange: ['-120deg', '0deg', '120deg']
        });

        return {
            ...layoutStyle,
            transform: [{ rotate }],
            zIndex: 2
        }
    }
    renderCards() {
        const { data, renderCard } = this.props;
        const { index, panRespon } = this.state;

        return data.map((item, indx) => {
            if (indx < index) return null;
            else if (indx == index) return (
                <Animated.View key={item.id} {...panRespon.panHandlers} style={[this.cardStyle.call(this), styles.cardStyle]}>
                    {renderCard(item)}
                </Animated.View>
            );
            return (
                <Animated.View key={item.id} style={styles.cardStyle}>
                    {renderCard(item)}
                </Animated.View>
            )
        }).reverse();
    }
    render() {
        return (
            <View>
                {this.renderCards.call(this)}
            </View>
        );
    }
}



const styles = StyleSheet.create({
    cardStyle: {
        position: "absolute",
        width: SCREEN_WIDTH
    }
})


export default Collection;