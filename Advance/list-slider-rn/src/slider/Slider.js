import React, { Component } from 'react';
import {
    View, StyleSheet,
    Text, PanResponder,
    Animated, ScrollView, Dimensions
} from 'react-native';
import SubItem from './SubItem';

const SCREEN_WIDTH = Dimensions.get('window').width
class Slider extends Component {
    static defaultProps = {
        renderItem: () => { }
    }
    constructor(props) {
        super(props);
        const position = new Animated.ValueXY();
        const panRespon = PanResponder.create({
            // onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: (event, guesture) => {
                //const isFarLeft = event.nativeEvent.pageX < Math.floor(width * 0.25);
                const distance = SCREEN_WIDTH * .10;

                if (guesture.dx >= distance) {
                    this.setState({ showSubView: 'right' })
                    return true;
                } else if (guesture.dx <= -distance) {
                    this.setState({ showSubView: 'left' })
                    return true;
                }

                return false;
            },
            onPanResponderMove: (event, guesture) => {
                position.setValue({ x: guesture.dx, y: 0 })
            },
            onPanResponderRelease: (event, guesture) => {

            }
        });

        this.state = { panRespon, position, showSubView: 'left' }
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
        const { panRespon, showSubView } = this.state;
        return data.map((itemData, indx) => {

            return (
                <View key={indx} style={{ flex: 1 }}>
                    <Animated.View {...panRespon.panHandlers} style={this.getItemSyle()} >
                        {renderItem(itemData)}
                    </Animated.View>
                    <SubItem showSubView={showSubView} />
                </View>
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