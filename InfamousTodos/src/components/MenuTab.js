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

import { animated, config } from 'react-spring/native'

const Tabview = styled(ScrollView)`
    height:140px;
   
    margin-top:-70px;
    background:transparent;
    padding-bottom:40px;
    padding-top:20px;
    padding-left:4px;
    padding-right:4px;
`;
const animeView = animated(View);
const Itemview = styled(animeView)`
    background:#fff;
   
    width: 168px;
    height:74px;
    margin:12px;

   
    border-radius:4px;
`;


const MenuItem = (props) => {
    const { active, onClick } = props;
    return (

        <Spring
            native
            from={styles.menuItem}
            to={{
                scale: active ? 1.15 : 1,
                offWidth: active ? styles.menuItemActive.shadowOffset.width : styles.menuItem.shadowOffset.width,
                offHeight: active ? styles.menuItemActive.shadowOffset.height : styles.menuItem.shadowOffset.height

            }}
            config={config.default}>
            {({ scale, offWidth, offHeight, ...prop }) => (
                <TouchableWithoutFeedback onPress={onClick}>
                    <Itemview style={{

                        ...styles.menuItem,
                        transform: [{ scale }],
                        shadowOffset: { width: offWidth },
                    }} />
                </TouchableWithoutFeedback>
            )}
        </Spring>
        // <Itemview {...props} style={[...prop, active ? styles.menuItemActive : styles.menuItem]} >
        // </Itemview>
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
            <SafeAreaView>
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

});


export { MenuTabs }