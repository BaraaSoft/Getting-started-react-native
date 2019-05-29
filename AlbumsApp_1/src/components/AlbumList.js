
import React, { Component } from 'react';
import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Horizontal from './Horizontal';
import Vertical from './Vertical';
import ButtonMain from './ButtonMain';


class AlbumList extends Component {

    renderAlbums = (key) => {
        const {
            container,
            content, thumbnail,
            textBox, imageMain,
            imgMainContainer
        } = style;
        return (
            <View style={container} key={key} >
                <Card>
                    <CardItem>
                        <Horizontal>
                            <Image style={thumbnail} source={imgThumbnail} />
                            <Vertical style={textBox}>
                                <Text style={content}>Title Sudan uprising</Text>
                                <Text style={content}>Story unfold</Text>
                            </Vertical>
                        </Horizontal>
                    </CardItem>
                    <CardItem style={imgMainContainer}>
                        <Horizontal>
                            <Image style={imageMain} source={imgMain} />
                        </Horizontal>
                    </CardItem>
                    <CardItem style={{ borderBottomWidth: 0, paddingBottom: 0 }}>
                        <ButtonMain />
                    </CardItem>
                </Card>
            </View>
        );
    }

    render() {
        const {
            container,
            scrollView
        } = style;
        return (
            <ScrollView style={scrollView}>
                {
                    [...Array(20).keys()].map((x) => {
                        return this.renderAlbums(x);
                    })
                }
            </ScrollView>
        );


    }
}

const imgThumbnail = {
    uri: 'https://img.icons8.com/dotty/80/000000/person-male.png'
}
const imgMain = {
    uri: 'https://images.unsplash.com/photo-1489058535093-8f530d789c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
}

const style = StyleSheet.create({

    scrollView: {
        width: '100%',
    },
    container: {
        marginTop: 16,
        marginLeft: 24,
        marginRight: 24,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
    content: {
        padding: 0,
        paddingLeft: 8,
        paddingRight: 8
    },
    thumbnail: {
        height: 50,
        width: 50
    },
    textBox: {
        alignItems: 'flex-start',
        paddingTop: 8
    },
    imgMainContainer: {
        padding: 0,
        margin: 0,
        borderWidth: 0
    },
    imageMain: {
        height: 300,
        flex: 1,
        width: null
    }
})

export default AlbumList;