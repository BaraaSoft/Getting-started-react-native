import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import LoginPageReducers from './LoginPageReducers'

export default combineReducers({
    ...LoginPageReducers,
    form: formReducer
})