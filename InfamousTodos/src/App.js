
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import styled from 'styled-components';
import Header from './components/Header';
import { MenuTabs } from './components';



const Box = styled.View`
    display:flex;
    flex:1;
`;

const Title = styled.Text`
color: #fff;
font-size:16px;

`;



const App = (props) => {

    return (
        <Box>
            <Header />
            <MenuTabs />
        </Box>
    );
}


export default App;