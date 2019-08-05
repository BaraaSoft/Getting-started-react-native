import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { Card, CardItem, ButtonBig, Spinner } from './common';

class EmployeeCreateView extends Component {

    onSave = (e) => {

    }

    renderInput(event) {
        const { input, meta: { touched, error, warning, active } } = event
        const isInvalid = error && touched;
        return (
            <View style={{ marginBottom: 8 }}>
                <TextInput
                    {...input}
                    {...event}
                    style={[Styles.input, active ? Styles.inputFocus : Styles.inputOutFocus]}
                />
                {invalid && (<Text style={Styles.inputError}>{error}</Text>)}
            </View>
        );
    }

    render() {
        return (
            <View style={Styles.container}>
                <Card>
                    <CardItem style={{ flex: 1, justifyContent: 'center', }}>
                        <Text style={Styles.title}>Add new employee</Text>
                    </CardItem>
                    <CardItem style={{ flex: 2, justifyContent: 'center', borderBottomWidth: 0 }}>
                    </CardItem>
                    <CardItem style={{ flex: 1, borderBottomWidth: 0, justifyContent: 'space-around' }}>
                        <ButtonBig onPress={this.onSave.bind(this)}>
                            SAVE
                        </ButtonBig>
                    </CardItem>
                </Card>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch'
    },
    title: {
        alignSelf: 'center',
        fontSize: 25,
        color: 'blue',
        fontWeight: '200'
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
})

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

export default EmployeeCreateView;
