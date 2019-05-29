import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { Card, CardItem, ButtonBig, Spinner } from './common';
import firebase from 'react-native-firebase';



class LoginForm extends Component {
    state = {
        password: null,
        email: null,
        loading: false
    }

    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }
    onEmailChange(email) {
        this.setState({ email: email })
    }
    onPasswordChange(password) {
        this.setState({ password: password })
    }
    onLogin = async (e) => {
        const { password, email } = this.state;

        try {
            this.setState({ loading: true })
            let userCredential = await firebase.auth().signInWithEmailAndPassword(email, password)
            console.log(">> User - login");
            console.log(userCredential.user)
        } catch (error) {
            let userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
            console.log(">> User - signup");
            console.log(userCredential.user)
        } finally {
            this.setState({ loading: false })
        }
    }
    render() {
        const { styleInput, styleFormTlt, styleCard, ButtonStyle } = Style;
        const { password, email, loading } = this.state;
        return (
            <Card>
                {loading && <Spinner />}

                <CardItem>
                    <Text style={styleFormTlt}>Welcome</Text>
                </CardItem>
                <CardItem>
                    <TextInput
                        value={email}
                        onChangeText={this.onEmailChange.bind(this)}
                        style={styleInput} textContentType="emailAddress"
                        placeholder={"your email..."}
                    />
                    <TextInput
                        value={password}
                        onChangeText={this.onPasswordChange.bind(this)}
                        style={styleInput}
                        secureTextEntry
                        textContentType="password" placeholder={"your password"}
                    />
                </CardItem>
                <CardItem style={styleCard}>
                    <ButtonBig disabled={loading}
                        onPress={this.onLogin.bind(this)}
                        style={ButtonStyle}>
                        Login
                    </ButtonBig>
                </CardItem>
            </Card>
        );
    }
}

const Style = StyleSheet.create({
    container: {

    },
    styleFormTlt: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'grey',
        padding: 16,
        fontWeight: '600'
    },
    styleInput: {
        margin: 12,
        paddingBottom: 6,
        borderBottomWidth: 1,
        borderColor: 'lightgrey'
    },
    styleCard: {
        flex: 1,
        borderBottomWidth: 0,
        justifyContent: 'center',
    },
    ButtonStyle: {
        marginLeft: 8,
        marginRight: 8,
    }
});

export default LoginForm;