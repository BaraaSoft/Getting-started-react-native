import React, { Component } from 'react';
import { View, StyleSheet, Text, PanResponder, Animated, Image } from 'react-native';
import moment from 'moment';

class ItemSlider extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={{ uri: "https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1235&q=80" }} style={styles.image} />
                <View style={styles.containerTwo}>
                    <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail' >Taffeny Doe</Text>
                    <Text style={styles.subTitle} numberOfLines={2} ellipsizeMode='tail'>
                        This makes your image bigger than the size of your container component. To solve this issue you can add the border width to the component sizes.</Text>
                </View>
                <View style={styles.containerDate}>
                    <Text style={styles.datetime} >{moment('2019-10-30T14:11:01+08:00').startOf('hour').fromNow()}</Text>
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
        borderBottomColor: '#e4e4e4'
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


export default ItemSlider;