
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



const RotatedBox = styled.View`
  /* transform: rotate(90deg); */
  font-variant: small-caps;
  margin: 55px 55px 2px;
  background-color:red;
`;

const Title = styled.Text`
color: #fff;
font-size:16px;

`;



const App = () => {

    return (

        <View>
            <Header></Header>
        </View>


    );
}


export default App;