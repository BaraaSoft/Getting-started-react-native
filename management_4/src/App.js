import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers'
import LoginForm from './components/LoginForm';
import { Header } from './components/common';
import LoginPageForm from './components/LoginPage';
import MainRouter from './components/Router';


export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers, applyMiddleware(thunk))}>
        <MainRouter />
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



/*
<Provider store={createStore(reducers, applyMiddleware(thunk))}>
        <View style={styles.container}>
          <Header title='Management' />
          <LoginPageForm />
        </View>
</Provider>
*/
