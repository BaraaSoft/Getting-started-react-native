import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import moment from 'moment';

import { Ionicons } from '@expo/vector-icons';

class ItemPrimary extends Component {
    render() {
        const { imgUrl, title, subtitle, datetime } = this.props.data;
        return (
            <View style={styles.container}>
                <Image source={{ uri: imgUrl }} style={styles.image} />
                <View style={styles.containerTwo}>
                    <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail' >{title}</Text>
                    <Text style={styles.subTitle} numberOfLines={2} ellipsizeMode='tail'>{subtitle}</Text>
                </View>
                <View style={styles.containerDate}>
                    <Text style={styles.datetime} >{moment(datetime).startOf('hour').fromNow()}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: '#e9e9e9',
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        height: 80,
        padding: 8,
        borderBottomColor: '#e4e4e4',
        justifyContent: 'flex-end',
        zIndex: 3

    },
    containerTwo: {
        flex: 2,
        marginLeft: 12,

    },
    containerDate: {
        margin: 2
    },
    datetime: {
        color: '#777',
        fontSize: 12,
    },

    image: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        // resizeMode: 'center',
        overflow: "hidden",
        alignSelf: "center"
    },
    title: {
        color: '#191919',
        fontSize: 16,
        fontWeight: "bold",
        letterSpacing: 1
    },
    subTitle: {
        color: '#777',
        fontSize: 12,
        flexWrap: 'wrap',
        overflow: 'hidden',

    }
})


export default ItemPrimary;