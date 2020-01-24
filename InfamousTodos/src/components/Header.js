
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


const ContainerView = styled(LinearGradient)`
  /* transform: rotate(90deg); */

  height:100px;
  width:100%;
  display:flex;
  justify-content:flex-start;
  align-items:flex-start;
`;

const Toolbar = styled.View`
    align-self: stretch;
    margin:24px 16px;
    flex-direction:row;
    align-items:center;
`;

const Title = styled.Text`
    color: #fff;
    font-size:22px;
    flex:1;
`;

const Icon = styled.Text`
`;





const Header = () => {

    return (
        <ContainerView start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#0072ff', '#00c6ff']} >
            <Toolbar>
                <Title>Home</Title>
                <Icon>Icon</Icon>
            </Toolbar>
        </ContainerView>
    );
}

{/* <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#0072ff', '#00c6ff']}>
    <Title>Home</Title>
</LinearGradient> */}



export default Header;