import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { Card, CardItem, ButtonBig, Spinner } from './common';
import { Field, reduxForm } from 'redux-form'

import { setUserLogin } from '../actions'
import { connect } from 'react-redux';


class LoginPage extends Component {

    renderInput = (event) => {
        const { input, meta: { touched, error, warning, active } } = event;
        const invalid = (touched && error);
        return (
            <View style={{ marginBottom: 8 }}>
                <TextInput {...input} {...event} style={[Style.input, active ? Style.inputFocus : Style.inputOutFocus]} />
                {invalid && (<Text style={Style.inputError}>{error}</Text>)}
            </View>
        );
    }

    onLogin = () => {
        console.log("Componet -> onLogin")
        this.props.setUserLogin();
    }

    render() {
        return (
            <Card style={Style.container} >
                {this.props.loginLoading && <Spinner />}
                <CardItem style={{ flex: 1, justifyContent: 'center', }} >
                    <Text style={Style.title}>
                        Login
                    </Text>
                </CardItem>
                <CardItem style={{ flex: 2, justifyContent: 'center', borderBottomWidth: 0 }}>
                    <Field
                        name='username'
                        textContentType="emailAddress"
                        placeholder={"your email..."}
                        component={this.renderInput}
                    />
                    <Field
                        name='password'
                        secureTextEntry
                        textContentType="password"
                        placeholder={"your password"}
                        component={this.renderInput}
                    />
                </CardItem>
                <CardItem style={{ flex: 1, borderBottomWidth: 0, justifyContent: 'space-around' }}>
                    <ButtonBig style={Style.button} onPress={this.onLogin.bind(this)}>
                        Login / sign up
                    </ButtonBig>
                </CardItem>
            </Card>
        )
    }

}

const validate = values => {
    const errors = {}
    if (!values.username) {
        errors.username = '*Required'
    }
    if (!values.password) {
        errors.password = '*Required'
    }
    return errors
}

const Style = StyleSheet.create({
    container: {

    },
    input: {
        padding: 8,
        paddingBottom: 8,
        borderBottomWidth: 1
    },
    inputFocus: {
        borderBottomColor: 'blue'
    },
    inputOutFocus: {
        borderBottomColor: '#e3e3e3'
    },
    inputError: {
        marginLeft: 12,
        fontSize: 10,
        color: 'red'
    },
    title: {
        alignSelf: 'center',
        color: 'blue',
        fontSize: 25,
        fontWeight: '200'
    },
    button: {

    }
});

const mapStateToProps = ({ loginLoading }, ownProps) => {
    return { loginLoading };
}



let connectLoginPage = connect(mapStateToProps, { setUserLogin })(LoginPage)

let LoginPageForm = reduxForm({
    form: 'Login',
    validate
})(connectLoginPage)

export default LoginPageForm;
