
import React, { Component } from 'react';
import { View, StyleSheet, Text, PanResponder, Animated, Image, Dimensions } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
const SCREEN_WIDTH = Dimensions.get('window').width

class SubItem extends Component {
    state = {
        showSubView: 'right'
    }

    constructor(props) {
        super(props);
        this.state = { showSubView: this.props.showSubView }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.showSubView != this.props.showSubView) {
            this.setState({ showSubView: nextProps.showSubView })
        }
    }
    renderLeftSubview() {
        return (
            <View style={this.subViewStyle()}>
                <MaterialIcons name="delete-sweep" size={32} color="white" />
            </View>
        );
    }
    renderRightSubview() {
        // subitem yellow
        return (
            <View style={[this.subViewStyle(),
            {
                backgroundColor: '#ffd54f',
                zIndex: -1,
                justifyContent: 'flex-start',
                paddingLeft: 24
            }]}>
                <Ionicons name="md-notifications-off" size={32} color="white" />
            </View>
        )
    }
    subViewStyle() {
        // subitem red
        return {
            ...styles.container,
            backgroundColor: '#dd2c00',
            position: 'absolute',
            zIndex: -1,
            justifyContent: 'flex-end',
            paddingRight: 24
        };
    }

    render() {
        const { showSubView } = this.state;
        return (
            showSubView == 'right' ? this.renderRightSubview() : this.renderLeftSubview()
        );
    }
}


const styles = StyleSheet.create({
    container: {
        width: SCREEN_WIDTH,
        flexDirection: 'row',
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: '#e9e9e9',
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        height: 80,
        padding: 8,
        borderBottomColor: '#e4e4e4',
        zIndex: 3,
        alignItems: 'center',

    }
})

export default SubItem;