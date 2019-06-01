import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers'
import LoginForm from './components/LoginForm';
import { Header } from './components/common';


export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
          <Header title='Management' />
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
