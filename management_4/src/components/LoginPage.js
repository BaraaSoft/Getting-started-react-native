import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { Card, CardItem } from './common';
import { Field, reduxForm } from 'redux-form'


class LoginPage extends Component {

    // renderInput = ({ input, meta: { touched, error, warning } }) => {
    //     const invalid = (touched && error);
    //     console.log(">> input :")
    //     console.log(input)
    //     return (
    //         <View style={{ margin: 16, backgroundColor: '#e5e5e5' }} >
    //             <TextInput {...input} />
    //             {invalid && (<Text>{error}</Text>)}
    //         </View>
    //     );
    // }
    renderInput = (event) => {
        const { input, meta: { touched, error, warning, active } } = event;
        const invalid = (touched && error);
        return (
            <View>
                <TextInput {...input} {...event} style={[Style.input, active ? Style.inputFocus : Style.inputOutFocus]} />
                {invalid && (<Text style={Style.inputError}>{error}</Text>)}
            </View>
        );
    }

    render() {
        return (
            <Card>
                <CardItem>
                    <Text>
                        Login
                    </Text>
                </CardItem>
                <CardItem>
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
        margin: 10,
        marginBottom: 4,
        borderBottomWidth: 1
    },
    inputFocus: {
        borderBottomColor: 'blue'

    },
    inputOutFocus: {
        borderBottomColor: '#e3e3e3'
    },
    inputError: {
        marginLeft: 18,
        fontSize: 10,
        color: 'red'
    }
});


const LoginPageForm = reduxForm({
    form: 'Login',
    validate
})(LoginPage)

export default LoginPageForm;
