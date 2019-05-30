import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { CardItem } from './common'


class ListItem extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <CardItem style={Style.container}>
                <Text>{this.props.library.title}</Text>
            </CardItem>
        );
    }
}


const Style = StyleSheet.create({
    container: {
        alignSelf: 'stretch'
    }
});

export default ListItem;

