import firebase from 'react-native-firebase';
import * as types from './types';
export * from './types';

import { Actions } from 'react-native-router-flux'

export const setUserLogin = () => async (dispatch, getState) => {

    const { username, password } = getState().form.Login.values;
    let userCredential = null;
    try {
        dispatch({
            type: types.SET_LOGIN_LOADING,
            payload: true
        })
        userCredential = await firebase.auth().signInWithEmailAndPassword(username, password)
        console.log(">> User - login");
        console.log(userCredential)

    } catch (error) {
        userCredential = await firebase.auth().createUserWithEmailAndPassword(username, password);
        console.log(error);
        console.log(">> User - signup");
        console.log(userCredential)
    } finally {
        await dispatch({
            type: types.START_LOGIN,
            payload: userCredential
        });
        dispatch({
            type: types.SET_LOGIN_LOADING,
            payload: false
        })

        if (userCredential) {
            console.log("setUserLogin >> finally >> userCredential")
            console.log(userCredential)
            Actions.main();
        }

    }


}