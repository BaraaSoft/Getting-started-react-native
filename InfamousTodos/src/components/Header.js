
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';



const ContainerView = styled(LinearGradient)`
  /* transform: rotate(90deg); */
  padding-top:24px;
  height:200px;
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
`;

const IconHolder = styled.View`
padding:4px;
margin:8px;
`





const Header = (props) => {

    return (
        <ContainerView start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#0072ff', '#00c6ff']} {...props}>
            <Toolbar>
                <View style={mainStyle.IconBlend} >
                    <TouchableOpacity>
                        <Icon name='menuunfold' size={26} color="#fff" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={mainStyle.IconStand}>

                    <Icon name='bells' size={26} color="#0072ff" light />

                </TouchableOpacity>
            </Toolbar>
        </ContainerView>
    );
}



const mainStyle = StyleSheet.create({
    IconStand: {
        // justifyContent: "center",
        // alignItems: "center",
        // width: 44,
        // height: 44,
        // borderWidth: 1,
        // borderColor: '#ffffff22',


        backgroundColor: '#ffffff',
        paddingHorizontal: 4,
        paddingVertical: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: .5,
        shadowRadius: 1.41,

        elevation: 1,
        borderRadius: 8

    },
    IconBlend: {
        padding: 6,
        flex: 1
    }
})


export default Header;

