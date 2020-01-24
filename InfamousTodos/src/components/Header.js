
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
import LinearGradient from 'react-native-linear-gradient';


const ContainerView = styled.View`
  /* transform: rotate(90deg); */
  


  height:100px;
  width:100%;


  justify-content:center;
  align-items:center;
`;

const Title = styled.Text`
    color: #fff;
    font-size:18px;
`;



const Header = () => {

    return (
        <ContainerView  >
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#0072ff', '#00c6ff']}>
                <Title>Home</Title>
            </LinearGradient>

        </ContainerView>
    );
}

{/* <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#0072ff', '#00c6ff']}>
    <Title>Home</Title>
</LinearGradient> */}



export default Header;