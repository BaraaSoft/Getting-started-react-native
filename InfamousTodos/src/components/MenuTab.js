import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    TouchableWithoutFeedback
} from 'react-native';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import * as Progress from 'react-native-progress';

import { animated, config, useSpring } from 'react-spring/native';
import { Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get('window').width;

const Tabview = styled(ScrollView)`
    height:140px;
   
    margin-top:-70px;
    background:transparent;
    padding-bottom:40px;
    padding-top:20px;
    padding-left:6px;
    padding-right:6px;

    

`;
const animeView = animated(View);
const Itemview = styled(animeView)`
    background:#fff;
   
    width: ${() => (SCREEN_WIDTH / 2.5 + "px")};
    height:68px;
    margin:12px 8px;

   
    border-radius:4px;
`;


const MenuItem = (props) => {
    const { active, onClick } = props;
    let { scale, ...styleProps } = useSpring({
        scale: active ? 1.15 : .95,
        shadowOpacity: active ? 0.48 : 0.32,
        shadowRadius: active ? 11.95 : 5.46,

        elevation: active ? 18 : 9,
        config: config.gentle

    })
    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <Itemview style={{
                ...styles.menuAnime,
                transform: [{ scale }],
                ...styleProps
            }} />
        </TouchableWithoutFeedback>

    );
}

class MenuTabs extends Component {
    state = {
        selected: { "2": true }
    }

    onItemClicked(e) {
        this.setState({ selected: { [e.id]: true } });
    }
    render() {
        const { selected } = this.state;
        return (
            <SafeAreaView style={{ elevation: 5 }}>
                <Tabview horizontal={true} contentContainerStyle={styles.contentContainer} showsHorizontalScrollIndicator={false} >
                    <MenuItem
                        itemId={selected["1"]}
                        active={selected["1"]}
                        onClick={(e) => this.onItemClicked.call(this, { id: "1" })} />
                    <MenuItem
                        itemId={selected["2"]}
                        active={selected["2"]}
                        onClick={(e) => this.onItemClicked.call(this, { id: "2" })}
                    />
                    <MenuItem
                        itemId={selected["3"]}
                        active={selected["3"]}
                        onClick={(e) => this.onItemClicked.call(this, { id: "3" })} />
                </Tabview>
            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
    contentContainer: {
        alignItems: 'center',
        // width: '42%',
        // width: 168
    },
    menuItem: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
        transform: [{ scale: 1 }, { perspective: 200 }]
    },
    menuItemActive: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,

        elevation: 18,
        transform: [{ scale: 1.15 }, { perspective: 200 }]
    },

    menuAnime: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5.46,

        elevation: 9,
        transform: [{ scale: 1 }, { perspective: 200 }]
    }

});


export { MenuTabs }